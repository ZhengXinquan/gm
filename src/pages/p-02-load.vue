<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <img
        class="absolute stage-item pulse9"
        style="top: 0rem; right: 0rem; width: 5.1rem"
        src="/img/2/云1.png"
      />
      <img
        class="absolute stage-item swing8"
        style="top: 2.3rem; left: 0rem; width: 3rem"
        src="/img/2/云2.png"
      />
      <img
        class="absolute stage-item swing6"
        style="top: 5.24rem; right: 1.3rem; width: 2.2rem"
        src="/img/2/云3.png"
      />
      <img
        class="absolute stage-item pulse3"
        style="top: 9.3rem; left: 0.78rem; width: 1.41rem"
        src="/img/2/手绘牛奶.png"
      />
      <img
        class="absolute stage-item pulse6"
        style="top: 10.8rem; right: 0.87rem; width: 2.1rem"
        src="/img/2/手绘气泡.png"
      />
      <img
        class="absolute stage-item pulse3"
        style="bottom: 0rem; left: 0rem; width: 3rem"
        src="/img/2/气泡1.png"
      />
      <img
        class="absolute stage-item pulse2"
        style="bottom: 2rem; right: 1.36rem; width: 1.86rem"
        src="/img/2/气泡2.png"
      />
    </div>
    <div class="page flex-center">
      <div
        class="content-center flex-column flex-center"
        style="margin-top: 1rem"
      >
        <img style="width: 1.467rem" src="/img/2/奶瓶.png" />
        <div
          class="flex justify-between align-center"
          style="
            font-family: 'wawa';
            color: #fff;
            width: 2.5rem;
            height: 0.237rem;
            margin-top: 0.58rem;
          "
        >
          正在加载中{{ percent }}
        </div>
        <img
          class="loading"
          style="width: 0.86rem; margin-top: 0.65rem"
          src="/img/2/奶车.png"
        />
        <img style="width: 3.9rem" src="/img/2/进度条.png" />
      </div>
    </div>
  </v-touch>
</template>

<script>
import imgJson from "../assets/imgs";
var imgs = imgJson.p2;

import myMixin from '../common/Mixin';
export default {
  mixins: [myMixin],
  data() {
    return {
      count: 0,
      percent: "0%",
    };
  },
  computed: {},
  mounted: function () {
    this.preload();
  },
  created() {
    this.thisPageShowSign=false;
  },
  methods: {
    swipeup: function () {},
    preload: function () {
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = this.imgDoneFn;
        image.onerror = this.imgDoneFn;
      
      }
    },
    imgDoneFn() {
      this.count++;
      // 计算图片加载的百分数，绑定到percent变量
      let percentNum = Math.floor((this.count / imgs.length) * 100);
      this.percent = `${percentNum}%`;
      if (this.count === imgs.length) {
        // 图片加载完成后跳转页面
        setTimeout(() => {
          this.$router.push({ path: "/letter" });
        }, 100);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  position: relative;
  z-index: 2;
}
</style>