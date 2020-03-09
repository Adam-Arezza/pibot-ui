<template>
    <div id="video-stream">
        <img :src="video_feed" alt="Live Feed">
    </div>
</template>

<script>

export default {
    data () {
        return {
            video_feed: undefined
        }
    },
    sockets: {
        videoData(data) {
            this.video_feed = `data:image/jpeg;base64,${data}`
        }
    }
}
</script>

<style scoped>

</style>