<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        style="left: 0rem; bottom: 0rem; width: 10rem"
        src="/img/7/花草.png"
      />

      <!-- small -->
            <img
        class="absolute stage-item"
        style="right: 0.43rem; top: 0.56rem; width: 0.8rem"
        src="/img/18/优倍.png"
      />
      <img
        class="absolute stage-item pulse5"
        style="right: 0rem; top: 1rem; width: 1.96rem"
        src="/img/18/云1.png"
      />

                <img
        class="absolute stage-item pulse4"
        style="left: 0.21rem; top: 1.7rem; width: 0.77rem"
        src="/img/18/纯鲜.png"
      />
      <img
        class="absolute stage-item pulse3"
        style="left: -1.23rem; top: 2.2rem; width: 2.46rem"
        src="/img/18/云2.png"
      />
                <img
        class="absolute stage-item swing4"
        style="right: 0.85rem; bottom: 3.87rem; width: 1.11rem"
        src="/img/18/娟姗.png"
      />
      <img
        class="absolute stage-item pulse6"
        style="right: 0.5rem; bottom: 3.21rem; width: 2.64rem"
        src="/img/18/云1.png"
      />

      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 3.35rem; left: 1.33rem; width: 6.75rem; height: 7.57rem"
      >
        <div>
          <div class="word">2020年</div>
          <div class="word">只争朝夕，不负韶华</div>
          <div class="word">您是光明的</div>
          <div class="word">
            <span>{{ title }} </span>
          </div>
          <div class="word">2021将又是新的开始</div>
          <div class="word">光明使者再接再厉！</div>
        </div>
      </div>

  <div class="absolute stage-item btn" @click="nextPage">点击生成您的专属海报</div>
      <!-- <img
        class="absolute stage-item"
        style="bottom: 0rem; right: 0.16rem; width: 6.05rem"
        src="/img/18/情人.png"
      /> -->
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
      title: "奋进先锋/巡店天眼/ 强国标兵",
    };
  },
  computed: {},

  created() {
    this.thisPageShowSign=false;
  },

  methods: {
    nextPage: function () {
      this.$router.push({ path: "/poster" });
    },
    swipeup: function () {
      // this.nextPage();
    },
  },
};
</script>
<style lang="less" scoped>
.papper {
  padding: 0.8rem 0.6rem;
  background-image: url("/img/18/文字板.png");
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
    line-height: 0.85rem;
    font-size: 16px;
    color: #172e56;
    span {
      font-size: 24px;
      color: #cc131d;
    }
  }
}

.btn {
  background-image: url("/img/18/点击按钮.png");
  background-size: 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: center;
  top: 11.84rem;
  left: 1.75rem;
  width: 5.8rem;
  height: 0.88rem;
  line-height: 0.88rem;
  font-family: "wawa";
  font-size: 16px;
  color:#1F7BD8;
}
.dis_none{
width:100px;
display: none;
}
</style>