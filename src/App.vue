<template>
  <div id="app">
    <VideoStream></VideoStream>
    <Controls></Controls>
  </div>
</template>

<script>
import Controls from './components/controls'
import VideoStream from './components/VideoStream'

export default {
  name: "app",
  components: {Controls, VideoStream}
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #41ec4f;
  background: black;
  min-height: 100vh;
}
</style>
