<template>
  <div id="app">
    <VideoStream></VideoStream>
    <Controls></Controls>
    <Outputs></Outputs>
  </div>
</template>

<script>
import Controls from './components/controls'
import VideoStream from './components/VideoStream'
import Outputs from './components/outputs'

export default {
  name: "app",
  components: {Controls, VideoStream, Outputs}
};
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #41ec4f;
  background: black;
  min-height: 100vh;
}
</style>
