<template>
    <div id="controls">
        <div class="key-grid">
            <button v-for="(dir, index) in directions" :key="index" v-bind:class="dir" @click="robotMove(dir)" class="move-btn">{{dir.toUpperCase()}}</button>
        </div>
        <div class="key-grid">
        </div>
        <div class="key-grid">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            directions: ['forward', 'reverse', 'left', 'right']
        }
    },
    methods: {
        robotMove(direction) {
            console.log(direction)
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
    grid-template-rows: repeat(3, 100px);
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
}
</style>