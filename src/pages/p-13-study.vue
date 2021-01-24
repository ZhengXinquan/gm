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
        style="right: 0.1rem; top: 5.24rem; width: 2.43rem"
        src="/img/13/气泡1.png"
      />
      <img
        class="absolute stage-item"
        style="left: 0.2rem; top: 9.16rem; width: 2.16rem"
        src="/img/13/气泡2.png"
      />
      <img
        class="absolute stage-item"
         :style="(isIphoneX?'bottom: 3.3rem;':'top: 9.61rem;')+' left: 1.75rem; width: 6.69rem'"
        src="/img/13/书.png"
      />
      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 2.04rem; left: 2.11rem; height: 5.29rem"
      >
        <div>
          <div class="word">在光明学院APP上</div>
          <div class="word">您总计学习了</div>
          <div class="word big-red">
            <span>{{ hours }}</span
            >小时<span>{{ minutes }}</span
            >分
          </div>
          <div class="word">获取了<span class="big-red">{{$store.state.user.study[1]}}</span>积分</div>
          <div class="word">学海无涯</div>
          <div class="word">相信点滴积累</div>
          <div class="word">必将成就</div>
          <div class="word">熠熠生辉的你</div>
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
  computed: {
    hours(){
      return parseInt(this.$store.state.user.study[0]/60)
    },minutes(){
      return this.$store.state.user.study[0]%60
    }
  },

  created() {console.log(this.$store.state.user.study)},

  methods: {
     nextPage: function () {
        if(this.$store.state.user.contribution ){
            this.$router.push({ path: "/contribution" });
        return;
        }else if(!this.$store.state.user.activity && this.$store.state.user.activity!=false){
                  this.$router.push({ path: "/shoptour" });
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