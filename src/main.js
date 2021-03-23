import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/global.less";
import { Button, Input, Icon, Menu,Slider } from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Slider)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
