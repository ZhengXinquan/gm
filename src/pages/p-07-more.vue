<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <img
        class="absolute stage-item"
        style="left: 0rem; bottom: 0rem; width: 10rem; height: 6rem"
        src="/img/7/花草.png"
      />

      <img
        class="absolute stage-item pulse3"
        style="left: 0rem; top: 0rem; width: 4.69rem"
        src="/img/7/云1.png"
      />
      <img
        class="absolute stage-item pulse5"
        style="right: 0.15rem; top: 7.08rem; width: 2.68rem"
        src="/img/7/云2.png"
      />
      <img
        class="absolute stage-item"
        style="left: 1.05rem; top: 8.77rem; width: 2.98rem"
        src="/img/7/加油.png"
      />

      <img
        class="absolute stage-item"
        :style="(isIphoneX?'bottom: 5rem;':' top: 4.43rem;')+' right: 0rem; width: 6.19rem'"
        src="/img/7/牛.png"
      />
      <img
        class="absolute stage-item"
        style="right: 0.5rem; top: 3.08rem; width: 9rem"
        src="/img/7/文字板.png"
      />
    </div>
    <div class="page flex-center">
      <div class="content-center flex-column flex-center"></div>
    </div>
  </v-touch>
</template>
<script>
import myMixin from "../common/Mixin";
export default {
  mixins: [myMixin],
  data() {
    return {
      compareResult: 3, // 0 新 1低 2平 3高
      growth: 84739, //增长量
      growthRate: "23.76%", //增长率
    };
  },
  computed: {},

  created() {},

  methods: {
    nextPage: function () {
        console.log(this.$store.state.user.education)
        if(this.$store.state.user.education){
          this.$router.push({ path: "/education" });
          return;
         }else if(!this.$store.state.user.education && this.$store.state.user.position!=false){
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
</style>