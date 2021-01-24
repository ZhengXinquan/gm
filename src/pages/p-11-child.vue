<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <!-- <img
          class="absolute stage-item"
          style="bottom: 0rem; width: 10rem"
          src="/img/10/花草.png"
        /> -->

      <!-- small -->
      <img
        class="absolute stage-item pulse4"
        style="left: 0rem; top: 0rem; width: 2.91rem"
        src="/img/10/挂心云.png"
      />
      <img
        class="absolute  animate__animated animate__fadeInBottomRight"
        style="left: 6.25rem; top: 0.52rem; width: 1.57rem"
        src="/img/10/飞机1.png"
      />
      <img
        class="absolute stage-item pulse6"
        style="right: 0.12rem; top: 2.13rem; width: 1.33rem"
        src="/img/10/云1.png"
      />
      <img
        class="absolute stage-item pulse5"
        style="right: 0.1rem; bottom: -0.5rem; width: 5.67rem"
        src="/img/11/热气球.png"
      />

      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 3.81rem; left: 1.69rem; width: 6.63rem; height: 6.24rem"
      >
        <div>
          <div class="word">您把一个新的生命</div>
          <div class="word">带来到了这个世界</div>
          <div class="word">TA是您心中的<span> 软肋 </span></div>
          <div class="word">亦是您身上</div>
          <div class="word">披荆斩棘的<span> 盔甲 </span></div>
          <div class="word">愿TA被世界温柔相待</div>
        </div>
      </div>

      <img
        class="absolute   animate__animated animate__fadeInTopLeft"
        style="left: 2.32rem; top: 12.43rem; width: 1.03rem"
        src="/img/10/飞机.png"
      />

      <img
        class="absolute stage-item pulse6"
        style="left: -0.3rem; bottom: 1.56rem; width: 2.25rem"
        src="/img/11/云.png"
      />
      <img
        class="absolute stage-item wing4"
        style="right: -1.5rem; bottom: -1.56rem; width: 4rem"
        src="/img/11/云.png"
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
        if(this.$store.state.user.approval ){
            this.$nextMarkPage();
            return;
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
  background-image: url("/img/10/文字板.png");
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
    color: #172e56;
    span {
      font-size: 24px;
      color: #cc131d;
    }
  }
}
</style>