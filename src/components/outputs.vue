<template>
    <div class="outputs">
        <div>
            Distance reading: {{distance}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            distance: 0
        }
    },
    sockets: {
        distance(data) {
            this.distance = data.cm
        }
    }
}
</script>

<style scoped>

</style>