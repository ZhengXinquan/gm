<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <!-- <img
          class="absolute stage-item"
          style="bottom: 0rem; width: 10rem"
          src="/img/22/花草.png"
        /> -->

      <!-- small -->
      <img
        class="absolute stage-item"
        style="left: 0rem; top: 0rem; width: 4.05rem"
        src="/img/22/旗子.png"
      />
      <img
        class="absolute stage-item"
        style="left: 0.85rem; top: 0.3rem; width: 8.24rem"
        src="/img/22/幸运大抽奖.png"
      />
      <img
        class="absolute stage-item"
        style="left: 0.4rem; top: 4.35rem; width: 1.12rem"
        src="/img/22/氛围.png"
      />
      <img
        class="absolute stage-item pulse4"
        style="left: 0.67rem; bottom: 0rem; width: 4.25rem"
        src="/img/22/云.png"
      />
      <img
        class="absolute stage-item pulse5"
        style="right: -1rem; bottom: 0.48rem; height: 5.47rem"
        src="/img/22/热气球.png"
      />
      <img
        class="absolute stage-item pulse3"
        style="right: 0rem; bottom: 0rem; width: 2rem"
        src="/img/22/云1.png"
      />

      <div
        class="absolute papper"
        style="top: 5.41rem; left: 0.77rem; width: 8.32rem; height: 8.81rem"
      >
        <div class="spin-box flex flex-wrap">
          <template v-for="(spin, i) in spins">
            <div
              v-if="spin.type"
              :key="i"
              class="spin-item"
              :class="[spin.reward == active ? 'active' : '', spin.class]"
            >
              <img v-show="spin.reward == active" src="/img/22/选中高亮.png" />
            </div>
            <div
              v-else
              :key="i"
              class="spin-item bg-click"
              :class="{ canClick: $store.state.user.spinTimes > 0 }"
              @click="startGame"
            >
              GO
            </div>
          </template>
        </div>
        <div class="word">
          当前您有{{ $store.state.user.spinTimes }}次抽奖机会
        </div>
      </div>
      <div class="btn next" @click="nextPage">返回首页</div>

      <!-- papper  animate__slideInUp animate__fadeIn -->
      <!-- <transition enter-active-class="animate__animated animate__fadeIn"> -->

      <!-- </transition> -->
      <!--road  man -->
    </div>

    <div
      v-show="showreward"
      class="absolute page flex flex-center"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="page-reward flex-column align-center">
        <div class="bg">{{ rewardText }}</div>
        <div class="btn" @click="nextPage">点击领取</div>
      </div>
    </div>
  </v-touch>
</template>
<script>
import myMixin from "../common/Mixin";
export default {
  mixins: [myMixin],
  data() {
    return {
      reward: 0,
      active: 1,
      timer: null,
      speedInt: 100, ///最初间隔时间（初速度）
      speedLow: 415, //最大间隔时间（即最小速度时，去停止）
      speedfailing: 35, //每次衰减
      speed: 1, //当前间隔时间
      round: 0, //转了几圈
      isRunning: false,
      showreward: false,
      spins: [
        {
          text: "10元爱心券",
          class: "bg-10-yuan",
          reward: 1,
          type: true,
        },
        { text: "5元爱心券", class: "bg-5-yuan", reward: 2, type: true },
        {
          text: "10元爱心券",
          class: "bg-10-yuan",
          reward: 3,
          type: true,
        },
        { text: "5元爱心券", class: "bg-5-yuan", reward: 8, type: true },
        { text: "", class: "bg-click", reward: 99, type: false },
        { text: "5元爱心券", class: "bg-5-yuan", reward: 4, type: true },
        {
          text: "带薪休假一日券",
          class: "bg-sm-yuan",
          reward: 7,
          type: true,
        },
        { text: "5元爱心券", class: "bg-5-yuan", reward: 6, type: true },
        {
          text: "10元爱心券",
          class: "bg-10-yuan",
          reward: 5,
          type: true,
        },
      ],
    };
  },
  computed: {
    rewardText() {
      let spin = this.spins.find((e) => {
        return e.reward == this.reward;
      });

      return spin ? spin.text : "";
    },
  },

  created() {
    this.thisPageShowSign=false;
  },

  methods: {
    startGame() {
      if (this.isRunning) return;

      this.speed = this.speedInt;
      this.round = 0; //转了几圈

      if (this.$store.state.user.spinTimes > 0) {
        this.isRunning = true;
        this.nextGame();
        //   接口延迟？？

        this.getReward();
      } else {
        this.$$.console_dev("n=" + this.$store.state.user.spinTimes);
      }
    },
    getReward() {
      const tryReward = Math.floor(Math.random() * 8 + 1);

      const trySpin = this.spins.find((e) => {
        return e.reward == tryReward;
      });
      let cardIndex = this.$store.state.rewardCards.findIndex(
        (e) => e == trySpin.text
      );
      this.$Model.GetReward({myReward:cardIndex},(jsonData) => {
          this.$$.console_dev(jsonData);
          if (jsonData.code == 1) {
            this.reward = tryReward;
            // let cardIndex = this.$store.state.rewardCards.findIndex(
            //   (e) => e == this.rewardText
            // );
            this.$store.setMyRewardAction(cardIndex);
            this.$$.console_dev("getReward success");
          }
        }
      );
    },
    nextGame() {
      setTimeout(() => {
        if (this.active >= 8) {
          this.active = 1;
          this.round++;
        } else {
          this.active++;
        }
        if (this.round > 3 && this.reward > 0) {
          this.speed = this.speed + this.speedfailing;
        }
        if (this.active == this.reward && this.speed >= this.speedLow) {
          this.endGame();
        } else {
          this.$$.console_dev(this.round, this.speed, this.active);
          this.nextGame();
        }
      }, this.speed);
    },
    endGame() {
      this.isRunning = false;
      this.showreward = true;
      this.$store.declineSpinTimesAction();
    },
    nextPage: function () {
      this.$router.push({ path: "/luckchat" });
    },
    swipeup: function () {
      //   this.nextPage();
    },
  },
};
</script>
<style lang="less" scoped>
.papper {
  padding: 0.56rem;
  background-image: url("/img/22/抽奖白底.png");
  background-size: 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: left;

  div.spin-box {
    div.spin-item {
      width: 2.04rem;
      height: 2.04rem;
      margin: 0.18rem;
      background-size: 100%;
      background-position: center;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-color: transparent;
      border: none;
      opacity: 0.75;
    }
    .bg-sm-yuan {
      background-image: url("/img/22/神秘大礼.png");
    }
    .bg-10-yuan {
      background-image: url("/img/22/十元券.png");
    }
    .bg-5-yuan {
      background-image: url("/img/22/五元券.png");
    }
    div.spin-item.active {
      opacity: 1;
    }
    .bg-click {
      background-image: url("/img/22/抽奖不可点击.png");
      font-size: 0.89rem;
      font-weight: 400;
      color: #172e56;
      line-height: 2.04rem;
      text-align: center;
      opacity: 1;
    }
    .bg-click.canClick {
      background-image: url("/img/22/抽奖可点击.png");
      opacity: 1;
    }
  }
  div.word {
    height: 0.35rem;
    font-size: 0.4rem;
    font-weight: 400;
    color: #172e56;
    line-height: 0.35rem;
    margin-top: 0.26rem;
    text-align: center;
  }
}
.btn.next {
  position: absolute;
  width: 5.41rem;
  height: 1rem;
  left: 2.29rem;
  bottom: 1.92rem;
  background-image: url("/img/22/返回首页.png");
  background-size: 100% 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;

  font-size: 0.64rem;
  font-weight: 400;
  color: #172e56;
  line-height: 1rem;
}
.page-reward {
  .bg {
    width: 9.39rem;
    height: 7.85rem;
    background-image: url("/img/22/券底图.png");
    background-size: 100% 100%;
    background-position: center;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;

    font-size: 0.59rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 9.1rem;
  }

  .btn {
    margin-top: 0.61rem;
    width: 5.56rem;
    height: 1.28rem;
    background-image: url("/img/22/按钮.png");
    background-size: 100% 100%;
    background-position: center;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;

    font-size: 0.64rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 1.28rem;
  }
}
</style>