<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <img
        class="absolute  stage-item "
        style="top: 0rem; right: 0rem; width: 4.62rem"
        src="/img/3/云1.png"
      />
      <img
        class="absolute stage-item swing8"
        style="top: 1.75rem; left: 0.6rem; width: 2.667rem"
        src="/img/3/云2.png"
      />
      <img
        class="absolute stage-item swing9"
        style="top: 3.88rem; right: 1.6rem; width: 2.63rem"
        src="/img/3/云3.png"
      />

        <img
          class="absolute  animate__animated animate__fadeInBottomLeft"
          style="top: 3.92rem; left: 2.63rem; width: 2.44rem"
          src="/img/3/纸飞机.png"
        />
  
      <img
        class="absolute stage-item "
        style="top: 6.41rem; right: 0.24rem; width: 3.21rem"
        src="/img/3/气泡花.png"
      />

      <img
        class="absolute"
        :style="
          'transition: left 1s linear,bottom 1s linear;;bottom: ' +
          milkBottom +
          'rem; left: ' +
          milkLeft +
          'rem; width: 5.77rem'
        "
        src="/img/3/奶箱.png"
      />
      <img
        class="absolute"
        :style="'transition: bottom 1s linear;bottom:' + papperBottom + 'rem; right: 0rem; width:10rem'"
        src="/img/3/手持报纸.png"
        @click="clickPapperButton"
      />
      <img
        class="absolute heartBeat"
        :style="'transition: bottom 1s linear;bottom:' + (papperBottom+2.7) + 'rem; right:4rem; width:2rem'"
        src="/img/3/准备好了么按钮.png"
        @click="clickPapperButton"
      />
    </div>
    <div class="page flex-center">
      <div class="content-center flex-column flex-center"></div>
    </div>
  </v-touch>
</template>
<script>
import myMixin from '../common/Mixin';
export default {
  mixins: [myMixin],
  data() {
    return {
      milkLeft: 2.16,
      milkBottom: -0.5,
      papperBottom: -10,

    };
  },
  computed: {},
  created() {
    this.thisPageShowSign=false;
    setTimeout(() => {
      this.move();
    }, 2000);

  },

  methods: {
    swipeup: function () {},
    move() {
      this.milkLeft = -1.7;
      this.milkBottom = -3.73;
  
      setTimeout(() => {
        this.papperBottom = 0;
      }, 1000);
    },
    clickPapperButton() {
       this.nextPage();
    },
    nextPage() {
        if(this.$store.state.user.enterDate){
            this.$router.push({ path: "/companietime" });
            return;
        }
        if(!this.$store.state.user.enterDate){
             let id = this.$store.state.freedomArray.findIndex(e=>e==this.$store.state.user.freedom)+ 1;
             this.$router.push({ path: "/freedom/" + id });
        }else if(!this.$store.state.user.freedom || this.$store.state.user.incomeCompareResult!=0||  this.$store.state.user.incomeCompareResult!=1||  this.$store.state.user.incomeCompareResult!=2||  this.$store.state.user.incomeCompareResult!=3){
             this.$router.push({ path: "/more" });
        }else if(!this.$store.state.user.education ){
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
  },
};
</script>
<style lang="less" scoped>
</style>