import Vue from "vue";
import App from "./App.vue";
import vueSocket from 'vue-socket.io'

Vue.use(new vueSocket({
  connection: 'http://192.168.0.15:3000'
}))

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
