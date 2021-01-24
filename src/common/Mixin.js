import { myAnimation, wordAnimation } from "./Animation";
let myWordAnimation = new wordAnimation();
let mixin = {
  data() {
    return {
      eleList: null,
      isIphoneX:false,
      thisPageShowSign:true,
    };
  },
  inject: ['setSign'],
  created() {
    if(document.documentElement.clientHeight>740){this.isIphoneX=true}
    this.$nextTick(() => {
      setTimeout(() => {
        myWordAnimation.show();
        this.eleList = new myAnimation();
        if (this.$route.meta.animated == "fade") {
          this.eleList.showFn();
        }else{
          this.eleList.showFn(true);
          // this.eleList.showUpFn();
        }
      }, 1000);
    });
    setTimeout(() => {
      this.setSign(!!this.thisPageShowSign)
    }, 50);
  },
  beforeRouteLeave(to, from, next) {
    if (from.meta.animated == "fade") {
      this.eleList && this.eleList.hideFn();
      setTimeout(() => {
        next();
      }, 1000);
    } else {
      setTimeout(() => {
        // this.eleList && this.eleList.hideUpFn();
        next();
      }, 1000);
    }
  },
  beforeDestroy() {
    // this.eleList.hideFn();
  },
  methods:{
    swipedown() {
      history.go(-1)
    },
  }
};
export default mixin;
