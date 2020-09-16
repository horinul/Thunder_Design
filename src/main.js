import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./css/index.less";
Vue.config.productionTip = false;

import THMessage from "../packages/Message/index";
Vue.use(THMessage)

import animate from 'animate.css'
Vue.use(animate)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
