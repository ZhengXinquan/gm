<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        style="bottom: 0rem; width: 10rem"
        src="/img/8/花草.png"
      />

      <!-- small -->
      <img
        class="absolute stage-item"
        style="right: 0rem; top: -0.4rem; width: 2.26rem"
        src="/img/8/云1.png"
      />
      <img
        class="absolute stage-item swing5"
        style="left: -0.6rem; top: 0.97rem; width: 3.32rem"
        src="/img/8/云2.png"
      />
      <img
        class="absolute stage-item  swing7"
        style="right: 0rem; top: 8.32rem; width: 1.68rem"
        src="/img/8/云3.png"
      />
      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 3.81rem; left: 1.53rem; width: 6.63rem; height: 7.88rem"
      >
        <div>
          <div class="word">恭喜您获得了</div>
          <div class="word">
            <span>{{ $store.state.user.education }}!</span>
          </div>
          <div class="word">多掉的29292根头发</div>
          <div class="word">和无数个沉迷学习的</div>
          <div class="word">白天黑夜</div>
          <div class="word">拿到证书的那一刻</div>
          <div class="word">在都成了<span>值得</span></div>
        </div>
      </div>
      <img
        class="absolute stage-item"
        style="top: 11rem; left: 0; width: 1.76rem"
        src="/img/8/尺子.png"
      />
      <img
        class="absolute stage-item"
       :style="(isIphoneX?'bottom: 3rem;':' top: 12.73rem;')+'  left: 1.76rem; width: 5.81rem'"
        src="/img/8/书.png"
      />
      <img
        class="absolute animate__animated animate__fadeInBottomLeft"
        style="top: 2.61rem; right: 0.77rem; width: 1.31rem"
        src="/img/8/飞机.png"
      />

      <img
        class="absolute stage-item"
        style="left: 3.92rem; top: 0.01rem; width: 0.92rem"
        src="/img/8/星星1.png"
      />
      <img
        class="absolute stage-item"
        style="right: 1.02rem; top: 4.9rem; width: 0.81rem"
        src="/img/8/星星2.png"
      />
      <img
        class="absolute stage-item"
        style="left: 0.64rem; top: 7.88rem; width: 0.89rem"
        src="/img/8/星星3.png"
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
        if(this.$store.state.user.position !=false ){
                this.$router.push({ path: "/position" });
       }else if(!this.$store.state.user.position==false && this.$store.state.user.marry==1){
            this.$router.push({ path: "/marry" });
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

    width: 6.1rem;
    height: 0.85rem;
    line-height: 0.85rem;
    font-size: 16px;
    span {
      font-size: 24px;
      color: #cc131d;
    }
  }
}
</style>