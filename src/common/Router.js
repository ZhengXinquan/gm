import Vue from "vue";
import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 引入组件



import preload from "@/pages/p-00-preload.vue";
import login from "@/pages/p-01-login.vue";
import load from "@/pages/p-02-load.vue";
import letter from "@/pages/p-03-letter.vue";
import companietime from "@/pages/p-04-companietime.vue";
import freedom from "@/pages/p-05-freedom.vue";
import more from "@/pages/p-07-more.vue";
import education from "@/pages/p-08-education.vue";
import position from "@/pages/p-09-position.vue";
import marry from "@/pages/p-10-marry.vue";
import child from "@/pages/p-11-child.vue";
import approval from "@/pages/p-12-approval.vue";
import study from "@/pages/p-13-study.vue";
import contribution from "@/pages/p-14-contribution.vue";
import activity from "@/pages/p-15-activity.vue";
import shoptour from "@/pages/p-16-shoptour.vue";
import nextyear from "@/pages/p-17-nextyear.vue";
import title from "@/pages/p-18-title.vue";
import poster from "@/pages/p-19-poster.vue";

import luckchat from "@/pages/p-20-luckchat.vue";
import luckcard from "@/pages/p-21-luckcard.vue";
import luckspin from "@/pages/p-22-luckspin.vue";
import user from "@/pages/p-23-user.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: preload,
    meta: { animated: 'fade' }
  },
  {
    path: "/preload",
    component: preload,
    meta: { animated: 'fade' }
  },
  {
    path: "/login",
    component: login,
    meta: { animated: 'fade' }
  },
  {
    path: "/load",
    component: load,
    meta: { animated: 'fade' }
  },
  {
    path: "/letter",
    component: letter,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/companietime",
    component: companietime,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/freedom/:id",
    component: freedom,
    meta: { animated: 'fade' }
  },
  {
    path: "/more",
    component: more,
    meta: { animated: 'fade' }
    
  },
  {
    path: "/education",
    component: education,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/position",
    component: position,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/marry",
    component: marry,
    meta: { animated: 'fade' }
  },
  {
    path: "/child",
    component: child,
    meta: { animated: 'fade' }
  },
  {
    path: "/approval",
    component: approval,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/study",
    component: study,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/contribution",
    component: contribution,
    meta: { animated: 'fade' }
  },
  {
    path: "/activity",
    component: activity,
    meta: { animated: 'fade' }
  },
  {
    path: "/shoptour",
    component: shoptour,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/nextyear",
    component: nextyear,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/title",
    component: title,
    meta: { animated: 'fade' }
  },
  {
    path: "/poster",
    component: poster,
    meta: { animated: 'fade' }
  },
  {
    path: "/luckchat",
    component: luckchat,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/luckcard",
    component: luckcard,
    meta: { animated: 'scaleUp' }
  },
  {
    path: "/luckspin",
    component: luckspin,
    meta: { animated: 'fade' }
  },
  {
    path: "/user",
    component: user,
    meta: { animated: 'fade' }
  }
];

var router = new VueRouter({
  routes,
});
export default router;
