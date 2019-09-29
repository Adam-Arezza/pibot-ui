<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
