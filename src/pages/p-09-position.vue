<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        style="bottom: 0rem; width: 10rem"
        src="/img/9/花草.png"
      />

      <!-- small -->
      <img
        class="absolute stage-item"
        style="right: -0.5rem; top: -0.4rem; width: 2.42rem"
        src="/img/9/云2.png"
      />
      <img
        class="absolute stage-item"
        style="left: -1.5rem; top: 2.2rem; width: 3.25rem"
        src="/img/9/云1.png"
      />

      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 3.81rem; left: 1.53rem; width: 6.63rem; height: 7.88rem"
      >
        <div>
          <div class="word">2020年</div>
          <div class="word">光明幸运星非您莫“鼠”！</div>
          <div class="word">您从一名{{ $store.state.user.position[0] }}</div>
          <div class="word">
            晋升为了一名<span>{{ $store.state.user.position[1] }}!</span>
          </div>
          <div class="word">祝愿您2021年</div>
          <div class="word"><span>“牛”气冲天！</span></div>
        </div>
      </div>

      <img
        class="absolute stage-item"
        :style="(isIphoneX?'bottom: 3rem;':' top: 5.44rem;')+'   right: 0rem; width: 5.09rem'"
        src="/img/9/工作证.png"
      />
      <img
        class="absolute  animate__animated animate__fadeInBottomLeft"
        style="left: 0.15rem; top: 12.51rem; width: 2.28rem"
        src="/img/9/飞机.png"
      />

      <img
        class="absolute stage-item"
        style="left: 6.25rem; top: 1.59rem; width: 0.73rem"
        src="/img/9/星星1.png"
      />
      <img
        class="absolute stage-item"
        style="left: 0.79rem; top: 5.67rem; width: 0.87rem"
        src="/img/9/星星2.png"
      />

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
        if(this.$store.state.user.marry==1 ){
              this.$nextMarkPage();
              return;
         }else if(!this.$store.state.user.marry && this.$store.state.user.child==1){
              this.$router.push({ path: "/child" });
         }else if(!this.$store.state.user.child && this.$store.state.user.approval!=false){
              this.$router.push({ path: "/approval" });
         }else if(!this.$store.state.user.approval && this.$store.state.user.study!=false){
              this.$router.push({ path: "/study" });
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
  padding: 0.8rem 0.8rem;
  background-image: url("/img/8/文字板.png");
  background-size: 100%;
  background-position: center;
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

    width: 5.1rem;
    line-height: 0.85rem;
    font-size: 16px;
    span {
      font-size: 24px;
      color: #cc131d;
    }
  }
}
</style>