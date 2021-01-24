<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        style="bottom: 0rem; width: 10rem"
        src="/img/12/花.png"
      />

      <!-- small -->
      <img
        class="absolute stage-item"
        style="right: 0rem; top: 0rem; width: 3.56rem"
        src="/img/17/旗子.png"
      />
      <img
        class="absolute stage-item"
        style="left: 1rem; top: 0rem; width: 4.44rem"
        src="/img/17/星星挂件.png"
      />
      <img
        class="absolute stage-item"
        style="right: 0.03rem; top: 4.7rem; width: 1.6rem"
        src="/img/17/气球.png"
      />

      <img
        class="absolute stage-item"
        style="left: 0.36rem; top: 9.49rem; width: 2.71rem"
        src="/img/17/气泡.png"
      />
      <img
        class="absolute stage-item"
        :style="
          (isIphoneX ? 'bottom: 4rem;' : ' top: 10.65rem;  ') +
          'left: 2.4rem; width: 6rem'
        "
        src="/img/17/日历.png"
      />
      <div
        class="absolute papper animate__animated animate__fadeIn"
        style="top: 2rem; left: 2rem; width: 7rem; height: 7rem"
      >
        <div>
          <div class="word">2020年</div>
          <div class="word">注定是不平凡的一年</div>
          <div class="word">新冠疫情</div>
          <div class="word">影响着每一个人</div>
          <div class="word">公司的发展需要</div>
          <div class="word">您的关注与创造</div>
          <div class="word">不妨一起融入团队</div>
          <div class="word">提升自我</div>
          <div class="word">来一场<span class="big-red">全民营销</span>吧！</div>
        </div>
      </div>

      <!-- papper  animate__slideInUp animate__fadeIn -->
      <!-- <transition enter-active-class="animate__animated animate__fadeIn"> -->

      <!-- </transition> -->
      <!--road  man -->
    </div>
  </v-touch>
</template>
<script>
import myMixin from "../common/Mixin";
export default {
  mixins: [myMixin],
  data() {
    return {
      count: "25",
      photo: "2319",
    };
  },
  computed: {},

  created() {},

  methods: {
    nextPage: function () {
      if (this.$store.state.user.title!=false) {
        this.$router.push({ path: "/poster" });
         return;
       }else if ( this.$store.state.user.title==false || !this.$store.state.user.myreward || !this.$store.state.user.spintime ) {
        this.$router.push({ path: "/user" });
      }
    },
    swipeup: function () {
      this.nextPage();
    },
  },
};
</script>
<style lang="less" scoped>
.papper {
  // padding: 0.8rem 0.8rem;
  // background-image: url("/img/12/文字板.png");
  // background-size: 100%;
  // background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: left;
  div.word.title {
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
  }
  div.word {
    font-family: "wawa";

    // width: 6.1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 20px;
    color: #fff;
    letter-spacing: 6px;
    span {
      font-size: 24px;
      // color: #cc131d;
    }
  }
}
</style>