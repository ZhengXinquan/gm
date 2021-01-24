import Vue from "vue";
import App from "./App.vue";

import { Overlay,Loading } from 'vant';

Vue.use(Overlay).use(Loading);
// 引入路由
import router from "./common/Router";

import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
Vue.use(IScrollView, IScroll)

import store from "./common/Store";
import util from "./common/Util";
Vue.prototype.$$ = util;

Vue.prototype.$store = store;

import Model from "@/common/Model";
Vue.prototype.$Model = Model;

Vue.prototype.$nextMarkPage = function() {
  const path = this.$route.path.replace("/", "");
  console.log('我打印了时间')
  console.log(this.$store.state.user.enterDate)
   util.console_dev(path, this.$store.state.labelArray);
  const index = this.$store.state.labelArray.findIndex((e) => e == path);
  const l = this.$store.state.labelArray.length;
  let finder = false;
  if (index > -1 && index < l) {
    for (let i = index + 1; i < l; i++) {
      let markKey = this.$store.state.labelArray[i];

      if (this.$store.state.user[markKey]) {
         util.console_dev(this.$store.state.user[markKey]);
        this.$router.push({ path: "/" + markKey });
        finder = true;
        break;
      }
    }
  }
  if (!finder) {
    this.$router.push({ path: "/nextyear" });
  }
};

Vue.config.productionTip = false;

import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });

// 自定义全局css
import "./assets/global.css";

import animated from "animate.css";
Vue.use(animated);

// Vue.prototype.$BASE_URL = process.env.VUE_APP_BASE_URL || "/";
// Vue.prototype.$fullHeight = 0;
// Vue.prototype.$setFullHeight = (n) => {
//   Vue.prototype.$fullHeight = n;
// };

///////////////////////


var dpr, rem;
var docEl = document.documentElement;
var fontEl = document.createElement("style");
var metaEl = document.querySelector('meta[name="viewport"]');
dpr = window.devicePixelRatio || 1;
//rem = docEl.clientWidth * dpr / 10;
var docEl_clientWidth = docEl.clientWidth;
rem = docEl_clientWidth / 10;
//scale = 1 / dpr;
// 设置viewport,进行缩放,达到高清效果
//metaEl.setAttribute("content", "width=" + dpr * docEl.clientWidth + ",initial-scale=" + scale + ",maximum-scale=" + scale + ", minimum-scale=" + scale + ",user-scalable=no");
metaEl.setAttribute(
  "content",
  "width=" +
    docEl.clientWidth +
    ",initial-scale=1,maximum-scale=1, minimum-scale=1,user-scalable=no"
);
// 设置data-dpr属性,留作的css hack之用
docEl.setAttribute("data-dpr", dpr);
// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = "html{font-size:" + rem + "px!important;}";
window.dpr = dpr;
window.rem = rem;
if (process.env.NODE_ENV == "development") {
util.console_dev("document.body.offsetWidth:" + document.body.offsetWidth);
util.console_dev("docEl.clientWidth:" + docEl.clientWidth);
util.console_dev("docEl.clientHeight:" + docEl.clientHeight);
util.console_dev("docEl.clientHeight:" + docEl.clientHeight / window.rem + "rem");
util.console_dev("docEl.iphone x clientHeight:21.653333333333332rem");
util.console_dev("window.rem*10:" + window.rem * 10);
}
Vue.prototype.$remHeight = docEl.clientHeight / window.rem;
Vue.prototype.$remTop =
  (21.653333333333332 - docEl.clientHeight / window.rem) / 2;


Vue.prototype.$top = "top:-" + Vue.prototype.$remTop + "rem;";
Vue.prototype.$bottom = "bottom:-" + Vue.prototype.$remTop + "rem;";

util.console_dev("$top:" + Vue.prototype.$top);
util.console_dev("$bottom:" + Vue.prototype.$bottom);



new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
