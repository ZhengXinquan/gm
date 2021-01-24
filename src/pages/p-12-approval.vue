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
        style="right: 0.35rem; top: 3.08rem; width: 1.85rem"
        src="/img/12/奶瓶1.png"
      />
      <img
        class="absolute stage-item"
        style="left: 0.48rem; top: 9.6rem; width: 2.16rem"
        src="/img/12/奶瓶2.png"
      />
      <img
        class="absolute stage-item"
       :style="(isIphoneX?'bottom: 3rem;':'top: 8.71rem;')+'left: 1.97rem;  width: 7.07rem'"
        src="/img/12/印章.png"
      />
      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 2rem; left: 1.97rem; width: 6.63rem; height: 6.01rem"
      >
        <div>
          <div class="word">一次次</div>
          <div class="word">细致严谨的点击</div>
          <div class="word">都蕴含着</div>
          <div class="word"><span class="big-red">职责</span>与<span class="big-red"> 担当 </span></div>
          <div class="word">2020年</div>
          <div class="word">您一共为员工审批了</div>
          <div class="word">
            <span class="big-red">{{ $store.state.user.approval }}</span>
            次OA流程
          </div>
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
      oas: "299",
    };
  },
  computed: {},

  created() {},

  methods: {
    nextPage: function () {
        if(this.$store.state.user.study!=false){
            this.$router.push({ path: "/study" });
            return;
        }else if(!this.$store.state.user.contribution && this.$store.state.user.activity!=false){
            this.$router.push({ path: "/activity" });
       }else if(!this.$store.state.user.activity && this.$store.state.user.shoptour!=false){
            this.$router.push({ path: "/shoptour" });
       }else if(!this.$store.state.user.shoptour==false && this.$store.state.user.nextyear!=false){
            this.$router.push({ path: "/nextyear" });
       }else if(!this.$store.state.user.title==false && this.$store.state.user.poster!=false){
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