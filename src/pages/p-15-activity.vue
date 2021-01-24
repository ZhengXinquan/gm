<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        :style="(isIphoneX?'bottom: 0rem;':' top: 11.40rem; ')+' right: 1.32rem; width: 3.87rem'"
        src="/img/15/讲台.png"
      />
      <img
        class="absolute stage-item"
        style="bottom: 0rem; width: 10rem"
        src="/img/12/花.png"
      />

      <!-- small -->
      <img
        class="absolute stage-item"
        style="left: 0rem; top: 0.93rem; width: 2.17rem"
        src="/img/15/尺子.png"
      />
      <img
        class="absolute stage-item"
        style="left: 2.28rem; top: 7.75rem; width: 3.15rem"
        src="/img/15/划重点.png"
      />
      <img
        class="absolute stage-item"
        style="right: 0.55rem; top: 6.63rem; width: 1.01rem"
        src="/img/15/书.png"
      />
      <img
        class="absolute stage-item"
        style="right: 1.02rem; top: 8.28rem; width: 2.6rem"
        src="/img/15/气泡2.png"
      />
      <img
        class="absolute stage-item"
        style="left: 1.19rem; top: 10.51rem; width: 2.8rem"
        src="/img/15/气泡1.png"
      />
      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 1.97rem; left: 1.85rem; width: 7rem; height: 4.49rem"
      >
        <div>
          <div class="word">光明举办的工会活动</div>
          <div class="word">
            其中<span class="big-red">{{ $store.state.user.activity  }}场</span
            >
          </div>
          <div class="word">都不乏您的身影</div>
          <div class="word">我们看到了</div>
          <div class="word">您的爱心、活力、才</div>
          <div class="word">艺、智慧...</div>
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
import myMixin from '../common/Mixin';
export default {
  mixins: [myMixin],
  data() {
    return {
    };
  },
  computed: {},

  created() {},

  methods: {
    nextPage: function () {
    if(this.$store.state.user.shoptour ){
        this.$nextMarkPage();
        return;
      }
   if(!this.$store.state.user.shoptour && this.$store.state.user.nextyear!=false ){
        this.$router.push({ path: "/nextyear" });
   }else if(!this.$store.state.user.title && this.$store.state.user.poster!=false){
        this.$router.push({ path: "/poster" });
   }else if(!this.$store.state.user.myreward  || !this.$store.state.user.spintime ){
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