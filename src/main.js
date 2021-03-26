import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/global.less";
import {
  Button,
  Input,
  Icon,
  Menu,
  Slider,
  List,
  Avatar,
  notification,
  message,
} from "ant-design-vue";
import {
  Carousel,
  CarouselItem,
  Timeline,
  TimelineItem,
  Image,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Pagination,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;

Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Slider);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Image);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(notification);
Vue.use(message);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
