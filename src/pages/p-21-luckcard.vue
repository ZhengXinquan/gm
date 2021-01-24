<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <!-- <img
        class="absolute stage-item"
        style="bottom: 0rem; width: 10rem"
        src="/img/12/花.png"
      /> -->

      <!-- small -->
      <img
        class="absolute stage-item pulse3"
        style="right: 0.57rem; top: 0.27rem; width: 2.16rem"
        src="/img/21/云.png"
      />
      <div class="papper">
        <div class="countTime">
          <img src="/img/21/计时.png" />{{ textCountTime }}
        </div>

        <div class="card-box-box">
          <div class="card-box" v-for="(card, i) in cards" :key="i">
            <div
              class="card"
              :class="{ active: card.isFront }"
              @click="check(card, i)"
            >
              <img class="side back" src="/img/21/卡牌背面.png" />
              <img
                class="side front"
                :src="'/img/21/' + card.frontIMG + '.png'"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- papper  animate__slideInUp animate__fadeIn -->
      <!-- <transition enter-active-class="animate__animated animate__fadeIn"> -->

      <!-- </transition> -->
      <!--road  man -->
    </div>

    <div
      v-show="showRull"
      @click="showRull = false"
      class="zzz absolute page flex flex-center"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="page-rull">
        游戏规则：<br />
        1.翻出两张一样的价值观卡牌即可得分，在规定时间内翻出全部12张价值观卡牌视为挑战成功，用时越短得分越高.
        <br />
        2.完成挑战后即可前往参与抽奖.
      </div>
    </div>
    <div
      v-show="showScord"
      class="zzz absolute page flex flex-center"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="page-scord flex-column flex-center">
        <img
          style="
            width: 2.57rem;
            height: 2.04rem;
            margin-top: -8.4rem;
            position: absolute;
          "
          src="/img/21/皇冠1.png"
        />
        <div
          style="
            height: 0.71rem;
            font-size: 0.82rem;
            font-weight: 400;
            color: #ffffff;
            line-height: 0.71rem;
            text-algin: center;
            margin-top: 1rem;
          "
        >
          恭喜您
        </div>

        <div
          style="
            font-size: 0.4rem;
            font-weight: 400;
            color: #ffffff;
            text-algin: center;
            margin-top: 0.97rem;
            margin-bottom: 1.67rem;
          "
        >
          获得<span
            style="font-size: 1.15rem; font-weight: 400; color: #ffb912"
            >{{ scord }}</span
          >分
        </div>
        <div class="flex justify-between" style="width: 5.67rem">
          <div @click="reStartGame" class="btn start">再玩一次</div>
          <div @click="nextPage" class="btn next">前去抽奖</div>
        </div>
      </div>
    </div>
    <div
      v-show="showGameOver"
      class="zzz absolute page flex flex-center"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="page-scord flex-column flex-center">
        <img
          style="
            width: 2.57rem;
            height: 2.04rem;
            margin-top: -8.4rem;
            position: absolute;
          "
          src="/img/21/皇冠0.png"
        />
        <div
          style="
            height: 0.71rem;
            font-size: 0.82rem;
            font-weight: 400;
            color: #ffffff;
            line-height: 0.71rem;
            text-algin: center;
            margin-top: 1rem;
          "
        >
          很遗憾
        </div>

        <div
          style="
            font-size: 0.4rem;
            font-weight: 400;
            color: #ffffff;
            text-algin: center;
            margin-top: 0.97rem;
            margin-bottom: 1.67rem;
          "
        >
          时间用尽了~<br /><br />您没有完成翻牌挑战
        </div>
        <div class="flex justify-center" style="width: 5.67rem">
          <div @click="reStartGame" class="btn start">继续挑战</div>
        </div>
      </div>
    </div>
  </v-touch>
</template>
<script>
import myMixin from '../common/Mixin';
export default {
  mixins: [myMixin],
  data() {
    return {
      cardWords: "包容,创新,共享,关爱,勇气,专注",
      showRull: true,
      showScord: false,
      showGameOver: true,
      cards: [],
      countTime: 6000,
      start: false,
      countTimer: null,
    };
  },
  computed: {
    textCountTime() {
      let s = this.countTime % 100;
      let m = parseInt(this.countTime / 100);
      if (s < 10) {
        s = "0" + s;
      }
      if (m < 10) {
        m = "0" + m;
      }
      return m + ":" + s;
    },
    scord() {
      return parseInt(this.countTime / 100) * 6;
    },
  },

  created() {
    this.thisPageShowSign=false;
    if (!Array.prototype.shuffle) {
      Array.prototype.shuffle = function () {
        for (
          var j, x, i = this.length;
          i;
          j = parseInt(Math.random() * i),
            x = this[--i],
            this[i] = this[j],
            this[j] = x
        );
        return this;
      };
    }
    this.initCards();
  },

  methods: {
    initCards() {
      this.start = false;
      this.showScord = false;
      this.showGameOver = false;
      this.countTime = 6000;

      let words = this.cardWords + "," + this.cardWords;
      let wordsArray = words.split(",");
      wordsArray.shuffle();
      let __cards = [];
      wordsArray.forEach((text) => {
        __cards.push({
          frontIMG: text,
          canClick: true,
          waitNext:false,
          isFront: false,
          done: false,
        });
      });
      this.cards = [].concat(__cards);
    },
    check(__card, i) {
      this.tryStartGame();

      if (__card.canClick == false) return;

      __card = Object.assign({}, __card);
      // 待对比 ： 未配对，正面的
      let waittingCardIndex = this.cards.findIndex((e) => {
        return e.waitNext == true;
      });
      __card.canClick = false;
      __card.isFront = true;
      this.$set(this.cards, i, __card);

      //有一个待对比的
      if (waittingCardIndex !== -1) {

        let waittingCard = Object.assign({}, this.cards[waittingCardIndex]);
        waittingCard.waitNext = false;
        this.$set(this.cards, waittingCardIndex, waittingCard);

        if (waittingCard.frontIMG == __card.frontIMG) {
          //   对，设为done=true
          waittingCard.done = true;
          this.$set(this.cards, waittingCardIndex, waittingCard);

          __card.done = true;
          this.$set(this.cards, i, __card);
          
          this.tryEndGame();
        } else {
          //   不对，两个都翻回去 (延迟等待__card翻到正面，再翻回去)
          setTimeout(() => {
            waittingCard.isFront = false;
            this.$set(this.cards, waittingCardIndex, waittingCard);
            
            __card.isFront = false;
            this.$set(this.cards, i, __card);
            // (延迟等待__card翻到背面，再变为可点击)
            setTimeout(() => {
              waittingCard.canClick = true;
              this.$set(this.cards, waittingCardIndex, waittingCard);
              
              __card.canClick = true;
              this.$set(this.cards, i, __card);
            }, 500);
          }, 500);
        }
      }else{
          __card.waitNext = true;
          this.$set(this.cards, i, __card);
      }
    },
    tryStartGame() {
      if (this.start) return;
      this.start = true;
      this.countTimer = setInterval(() => {
        this.countTime--;
        if (this.countTime == 0) {
          this.timeOutGame();
        }
      }, 10);
    },
    tryEndGame() {
      let unDoneCardIndex = this.cards.findIndex((e) => {
        return e.done == false;
      });
      if (unDoneCardIndex == -1) {
        this.showScord = true;
        clearInterval(this.countTimer);
      }
    },
    timeOutGame() {
      this.showGameOver = true;
      clearInterval(this.countTimer);
    },
    reStartGame() {
      this.initCards();
    },
    nextPage: function () {
    if(this.$store.state.user.myreward && this.$store.state.user.spintime){
            this.$nextMarkPage();
            return;
          }
      if(!this.$store.state.user.myreward || !this.$store.state.user.spintime ){
            this.$router.push({ path: "/user" });
            return;
       }
             this.$router.push({ path: "/luckspin" });

    },
    swipeup: function () {
      // this.nextPage();
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

  margin: 2rem auto;
  position:relative;
  .countTime {
    //   padding: 0.8rem 0.8rem;
    background-image: url("/img/21/倒计时框.png");
    background-size: 100%;
    background-position: center;
    width: 2.45rem;
    height: 0.73rem;
    margin: 0 auto;
    color: #507ae6;
    font-size: 0.43rem;
    line-height: 0.73rem;
    img {
      display: inline;
      vertical-align: middle;
      width: 0.28rem;
      margin: 0rem 0.2rem;
      margin-top: -0.1rem;
    }
  }
  .card-box-box {
    margin-top: 0.28rem;
    width: 8.28rem;
    perspective: 800px;
    display: flex;
    flex-wrap: wrap;
      position:relative;
    .card-box {
      width: 2.76rem;
      height: 2.76rem;
      padding: 0.28rem;
      box-sizing: border-box;
        position:relative;
      .card {
        width: 2.2rem;
        height: 2.2rem;
  position:relative;
        //   backface-visibility: hidden; /*背对屏幕时隐藏*/
        transition: all 0.5s ease; /*为翻牌添加过渡效果*/
        transform-style: preserve-3d; /*子元素将保留其 3D 位置。*/
        .side {
          position: absolute; /*让背面和正面重叠*/
        }
        .front {
          transform: rotateY(180deg);
        }
        .back {
          transform: translateZ(1px)
        }
      }
      .card.active {
        transform: rotateY(180deg);
      }
    }
  }
}
.zzz{
  // z-index: 9;
  transform: translateZ(2px)
}
.page-rull {
  width: 6.64rem;
  font-size: 0.56rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.96rem;
  text-align: left;
}
.page-scord {
  width: 7.19rem;
  height: 8.39rem;
  background-image: url("/img/21/弹窗.png");
  background-size: 100% 100%;
  background-position: center;
}
.btn {
  width: 2.52rem;
  height: 0.95rem;
  background-size: 100% 100%;
  background-position: center;
  font-size: 0.49pxrem;
  font-weight: 400;

  line-height: 0.95rem;
}
.btn.start {
  background-image: url("/img/21/再玩一次.png");
  color: #172e56;
}
.btn.next {
  background-image: url("/img/21/抽奖.png");
  color: #ffffff;
}
</style>