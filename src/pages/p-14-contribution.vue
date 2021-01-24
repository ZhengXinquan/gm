<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        :style="(isIphoneX?'bottom: 0rem;':' top: 4.25rem; ')+'left: 1.21rem;width: 7.84rem'"
        src="/img/14/箱子.png"
      />
      <img
        class="absolute stage-item"
        style="bottom: 0rem; width: 10rem"
        src="/img/12/花.png"
      />

      <!-- small -->

      <img
        class="absolute stage-item"
        style="right: 0.1rem; top: 7.68rem; width: 2.55rem"
        src="/img/14/气泡1.png"
      />
      <img
        class="absolute stage-item"
        style="left: 1.08rem; bottom: 2.97rem; width: 2.36rem"
        src="/img/14/气泡.png"
      />
      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 2.04rem; left: 1rem; height: 5.29rem"
      >
        <div>
          <div class="word">赠人玫瑰 手有余香</div>
          <div class="word">感谢您参加了</div>
          <div class="word">一日捐活动</div>
          <div class="word">通过爱心基金会</div>
          <div class="word">小小的善举</div>
          <div class="word">
            给公司的<span class="big-red">{{ $store.state.user.contribution }}位</span
            >同伴
          </div>
          <div class="word">带去了温暖和帮助</div>
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
        if(this.$store.state.user.activity && this.$store.state.user.activity!=false){
                this.$nextMarkPage();
                return;
          }else if(!this.$store.state.user.shoptour && this.$store.state.user.nextyear!=false){
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