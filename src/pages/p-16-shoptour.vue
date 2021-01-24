<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        style="bottom: 0rem; right: -0.2rem; width: 5.37rem; height: 6.4rem"
        src="/img/16/望远镜.png"
      />
      <img
        class="absolute stage-item"
        style="left: 1.4rem; bottom: 2.65rem; width: 2.23rem"
        src="/img/16/气泡1.png"
      />
      <img
        class="absolute stage-item"
        style="bottom: 0rem; width: 10rem"
        src="/img/12/花.png"
      />

      <!-- small -->
      <img
        class="absolute stage-item"
        style="right: 0.2rem; top: 7.24rem; width: 2.23rem"
        src="/img/16/气泡.png"
      />
      <img
        class="absolute  animate__animated animate__fadeInBottomLeft"
        style="left: 5.9rem; bottom: 6.65rem; width: 1.04rem"
        src="/img/16/纸飞机.png"
      />
      <img
        class="absolute stage-item"
        style="left: 0.13rem; top: 8.56rem; width: 2.31rem"
        src="/img/16/降落伞.png"
      />

      <img
        class="absolute stage-item pulse5"
        style="right: 0.8rem; top: 0rem; width: 2.5rem"
        src="/img/16/云.png"
      />
      <div
        class="absolute papper animate__animated animate__fadeIn "
        style="top: 2rem; left: 2rem; width: 7rem; height: 7rem"
      >
        <div>
          <div class="word">您打卡解锁了</div>
          <div class="word">
            全国<span class="big-red">{{ shoptours[0]  }}</span
            >家线下门店
          </div>
          <div class="word">
            上传了<span class="big-red">{{ shoptours[1]  }}</span
            >张照片
          </div>
          <div class="word">巡店之旅的</div>
          <div class="word">每一步都是</div>
          <div class="word"><span class="big-red">独一无二</span>的光点</div>
          <div class="word">光明伴您走遍</div>
          <div class="word">全国的各个角落</div>
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
    shoptours(){
        return this.$store.state.user.shoptour.split(",")
    }
  },

  created() {

  },

  methods: {
    nextPage: function () {
        this.$router.push({ path: "/nextyear" });
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