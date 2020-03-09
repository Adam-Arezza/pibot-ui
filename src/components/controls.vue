<template>
    <div id="controls">
        <p>Connection: {{connected}}</p>
        <div class="key-grid">
            <button v-for="(dir, index) in directions" :key="index" v-bind:class="[dir, {'highlight': dir == direction}]" class="move-btn">{{dir.toUpperCase()}}</button>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            directions: ['forward', 'reverse', 'left', 'right'],
            messages: undefined,
            connected: false,
            direction: undefined
        }
    },
    sockets: {
        connect() {
            this.connected = true
        }
    },
    methods: {
        getDirection(e) {
            if(e.key == "w") {
                this.direction = "forward"
            }
            if(e.key == "a") {
                this.direction = "left"
            }
            if(e.key == "d") {
                this.direction = "right"
            }
            if(e.key == "s") {
                this.direction = "reverse"
            }
        },
        robotMove(direction) {
            this.$socket.emit('move', this.direction)
            console.log(this.direction)
        },
        stopMove() {
            console.log("stopping")
            this.direction = undefined
            this.$socket.emit('move', "stop")
        }
    },
    created() {
        window.addEventListener('keypress', this.getDirection)
        window.addEventListener('keyup', this.stopMove)
    },
    watch: {
        direction: function(newDir, oldDir) {
            if(newDir != oldDir) {
                this.robotMove(newDir)
            }
        }
    }
}
</script>

<style scoped>
#controls {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.key-grid {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 50px);
}
.forward {
    grid-column-start: 2; 
}
.left {
    grid-column-start: 1;
    grid-row-start: 2;
}
.right {
    grid-column-start: 3;
    grid-row-start: 2;
}
.reverse {
    grid-column-start: 2;
    grid-row-start: 3;
}
.move-btn {
    font-size: 1em;
    background: grey;
    border: none;
    color: greenyellow;
}
.move-btn:hover {
    cursor: pointer;
    border: solid 2px white;
}

.highlight {
    background: white;
}

</style>