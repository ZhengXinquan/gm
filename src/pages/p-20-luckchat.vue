<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <img
        class="absolute stage-item"
        style="top: 0rem; width: 10rem"
        src="/img/20/气球.png"
      />

      <!-- small -->
      <img
        class="absolute stage-item pulse3"
        style="left: 0.1rem; bottom: 1.6rem; width: 1.93rem"
        src="/img/20/云.png"
      />
      <img
        class="absolute stage-item"
        style="right: -2.3rem; bottom: 0rem; width: 5rem"
        src="/img/20/飞机.png"
      />

      <div
        @click="$router.push({ path: '/user' })"
        class="user absolute stage-item"
      >
        <img :src="userIMG" />个人中心
      </div>

      <div class="chat-box">
        <div
          v-for="(chat, i) in chats"
          :ref="chat.id"
          :key="i"
          class="chat"
          :class="['chat' + chat.type, isMy(chat.uid) ? 'active' : '222']"
          :style="
            'margin-left:' +
            chat.marginLeft +
            'rem;margin-top:' +
            chat.marginTop +
            'rem'
          "
        >
          <div class="circle"></div>
          <span>{{ chat.text }}</span>
        </div>
      </div>
      <div
        class="absolute papper flex-column align-center"
        style="bottom: 0.69rem; left: 0rem; width: 10rem"
      >
        <div class="t1" style="margin-bottom: 0.28rem">
          已向光明爱心基金会捐款:
        </div>
        <div class="flex justify-center" style="margin-bottom: 0.96rem">
          <img class="bg-money-icon" src="/img/20/金币符号.png" />
          <template v-for="(n, i) in thousandNumberArray">
            <img
              v-if="n == ','"
              :key="i"
              class="bg-dot"
              src="/img/20/分隔符.png"
            />
            <div v-else :key="i" class="bg-number">{{ n }}</div>
          </template>
        </div>
        <div class="bg-btn" style="margin-bottom: 0.75rem">
          快来发送你的祝福吧~<img
            @click="alert = true"
            src="/img/20/小键盘.png"
          />
        </div>
        <img @click="nextPage" class="bg-next" src="/img/20/下一步.png" />
      </div>
    </div>
    <div class="bg-alert" v-show="alert">
      <div class="alert">
        <div class="word-box">
          <div
            class="flex justify-between"
            v-for="(newWord, i) in newWords"
            :key="i"
          >
            <div class="word">{{ newWord.msg }}</div>
            <div @click="sendText(newWord)" class="img">pick</div>
          </div>
        </div>
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
      chats: [],
      topMark: 0,
      textArray: [],
      alert: false,
      newWords: [
        "因为有你，所以光明！",
        "光明相伴，教会我们传递温暖。",
        "岁岁长欢愉，万事皆光明！",
        "愿你所求皆如愿，所行化坦途，多喜乐，常安宁。",
        "一切尽意，百事从欢。",
        "想对你说：共度韶光，明日可期。",
        "愿你用创新和突破引领团队前进的步伐。",
        "愿你用专注的精神和信念铸就光明的品质。",
        "愿你用勇气的力量感染周围人超越自我。",
        "愿你以共享的精神与光明家人共同前行。",
        "愿你通过关爱凝聚身边的力量，陪伴他们成长。",
        "愿你以包容拢人心，集思广益才能放眼全球。",
        "期待来年继续与你们共筑光明！",
        "让光明围绕你我，让爱伴你同行。",
        "生活光明，万物可爱。人间值得，未来可期。",
        "光熙照射大地，明日冉冉升起。",
        "愿你是能披荆斩棘的大英雄 也能是被人疼爱的小朋友。",
        "神说要有光明，于是就诞生了你。",
        "光明之间，朝夕华年！",
        "祝愿大家在新的一年里，牛转乾坤，牛气冲天，牛年大吉！",
      ],
      timer: null,
    };
  },
  computed: {
    userIMG() {
      return this.$store.state.user.img || "/img/20/默认头像.png";
    },
    thousandNumber() {
      let num =
        typeof this.$store.state.user.donation !== "number"
          ? Number(this.$store.state.user.donation)
          : this.$store.state.user.donation;
      return num.toFixed(0).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
    },
    thousandNumberArray() {
      return this.thousandNumber.split("");
    },
  },
  watch: {
    "$store.state.user.donation"(n) {
      this.$$.console_dev("new donation = ", n);
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
  created() {
    this.thisPageShowSign=false;

    let newWords = [];
    this.newWords.forEach((e) => {
      newWords.push({ id: 999, uid: localStorage.getItem("uid"), msg: e });
    });
    this.newWords = [].concat(newWords);

    this.$Model.GetChat((jsonData) => {
      this.$$.console_dev(jsonData);
      if (jsonData.code == 1) {
        // {id: 4, uid: 1, msg: "123213"}
        let jsonDataData = jsonData.data.sort((a, b) => {
          return b.id - a.id;
        });
        this.textArray = [].concat(jsonDataData);
      }
      this.init();
    });
  },
  methods: {
    isMy(uid) {
      return uid == localStorage.getItem("uid");
    },
    init() {
      if (this.textArray.length < 5) {
        this.textArray = this.textArray.concat(this.newWords);
      }
      for (let i = 0; i < 5; i++) {
        let randomText = this.getText();
        this.chats.push({
          id: this.getRandom(i),
          uid: randomText.uid,
          text: randomText.msg,
          type: Math.floor(Math.random() * 3 + 1),
          marginLeft: 10.5 + Math.random() * 3,
          marginTop: this.getTop(),
          isEnd: true,
        });
      }
      this.timer = setInterval(() => {
        this.chats.forEach((e, i) => {
          let json = Object.assign({}, e);
          json.marginLeft -= 0.01;
          let ele = this.$refs[json.id];

          let remW = 5.8;
          if (ele && ele.length) {
            remW = ele[0].clientWidth / window.rem;
          }
          if (json.marginLeft + remW <= 10 && json.isEnd) {
            let randomText = this.getText();
            this.chats.push({
              id: this.getRandom(i),
              uid: randomText.uid,
              text: randomText.msg,
              type: Math.floor(Math.random() * 3 + 1),
              marginLeft: 10.5 + Math.random() * 3,
              marginTop: this.getTop(),
              isEnd: true,
            });
            json.isEnd = false;
          }

          if (json.marginLeft < -remW) {
            this.chats.splice(i, 1);
          } else {
            this.$set(this.chats, i, json);
          }
        });
      }, 10);
    },
    getRandom(n) {
      n = n || (Math.random() + "").replace(".", "_");
      let m = (Math.random() + "").replace(".", "_");
      let t = new Date().getTime();
      return "t" + t + "_n" + n + "_m" + m;
    },
    sendText(text) {
      this.alert = false;
      this.textArray.unshift(text);

      this.$Model.SendChat(
        {
          msg: text.msg,
        },
        () => {
          this.init();
        }
      );
    },
    getText() {
      if (this.textArray.length > 0) {
        return this.textArray.splice(0, 1)[0];
      }
      return this.newWords[parseInt(Math.random() * this.newWords.length)];
    },
    getTop() {
      let re = 1.52 * this.topMark;
      this.topMark++;
      if (this.topMark > 4) {
        this.topMark = 0;
      }
      return re;
    },
    nextPage: function () {
      this.$router.push({ path: "/user" });
    },
    swipeup: function () {
      //   this.nextPage();
    },
  },
};
</script>
<style lang="less" scoped>
.user {
  background-image: url("/img/20/个人中心.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  right: 0.1rem;
  top: 0.33rem;
  width: 3.8rem;
  height: 1.37rem;
  line-height: 1.37rem;
  font-size: 0.48rem;
  img {
    display: inline;
    vertical-align: middle;
    width: 0.67rem;
    height: 0.67rem;
    margin-top: -0.2rem;
    padding-right: 0.27rem;
  }
}
.chat-box {
  position: absolute;
  width: 20rem;
  height: 7.2rem;
  left: 0rem;
  top: 1.88rem;
  z-index: 3;
  .chat {
    // width: 5.8rem;
    height: 1rem;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    color: #172e56;
    font-size: 0.46rem;
    line-height: 0.9rem;
    text-align: left;
    position: absolute;
    .circle {
      width: 0.52rem;
      height: 0.52rem;
      background-color: #72adfb;
      border-radius: 100%;
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.1rem;
      margin-left: 0.28rem;
      margin-top: -0.1rem;
    }
  }
  .chat.active .circle {
    background-color: #172e56;
  }
  .chat1 {
    background-image: url("/img/20/弹幕1.png");
  }
  .chat2 {
    background-image: url("/img/20/弹幕2.png");
  }
  .chat3 {
    background-image: url("/img/20/弹幕3.png");
  }
}
.bg-alert {
  position: absolute;
  z-index: 5;
  width: 10rem;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.2);
  .alert {
    padding: 0.72rem 0.6rem;
    background-image: url("/img/20/弹窗对话框.png");
    background-size: 100%;
    background-position: center;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    text-align: left;
    width: 8.48rem;
    height: 8.89rem;
    z-index: 5;
    bottom: 4.39rem;
    left: 0.68rem;
    position: absolute;
    .word-box {
      overflow-y: scroll;
      height: 100%;
      .word {
        width: 5.41rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.48rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .img {
        height: 1rem;
        width: 1.6rem;
        line-height: 1rem;
        font-size: 0.48rem;
        text-align: center;
        color: #ffffff;
        background-image: url(/img/20/pick.png);
        background-size: 100% auto;
        background-position: center;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-color: transparent;
      }
    }
  }
}

.papper {
  // padding: 0.8rem 0.8rem;
  // background-image: url("/img/20/文字板.png");
  // background-size: 100%;
  // background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: left;

  .t1 {
    width: 4.29rem;
    height: 0.31rem;
    font-size: 0.35rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 0.3rem;
  }
  .bg-money-icon {
    width: 0.56rem;
    height: 0.73rem;
    margin-top: 1.1rem;
  }
  .bg-number {
    background-image: url("/img/20/数字.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 1.16rem;
    height: 2.16rem;
    color: #172e56;
    font-size: 1.33rem;
    font-weight: 400;
    text-align: center;
    line-height: 2.16rem;
  }
  .bg-dot {
    width: 0.13rem;
    height: 0.32rem;
    margin-left: -0.065rem;
    margin-right: -0.065rem;
    margin-top: 1.5rem;
  }
  .bg-btn {
    background-image: url("/img/20/按钮背景.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 8.75rem;
    height: 1.21rem;
    text-align: center;
    font-size: 0.55rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 1.21rem;
    img {
      display: inline;
      vertical-align: text-bottom;
      width: 0.67rem;
      height: 0.67rem;
      padding-left: 1rem;
    }
  }
  .bg-next {
    width: 1.43rem;
    height: 1.43rem;
  }
}
</style>