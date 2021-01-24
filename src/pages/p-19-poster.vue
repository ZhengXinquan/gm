<template>
  <div class="page">
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
        class="absolute stage-item"
        style="right: 0rem; top: 1rem; width: 1.96rem"
        src="/img/18/云1.png"
      />

      <img
        class="absolute stage-item"
        style="left: 0.21rem; top: 1.7rem; width: 0.77rem"
        src="/img/18/纯鲜.png"
      />
      <img
        class="absolute stage-item"
        style="left: -1.23rem; top: 2.2rem; width: 2.46rem"
        src="/img/18/云2.png"
      />
      <img
        class="absolute stage-item"
        style="right: 0.85rem; top: 11.68rem; width: 1.11rem"
        src="/img/18/娟姗.png"
      />
      <img
        class="absolute stage-item"
        style="right: 0.5rem; top: 12.89rem; width: 2.64rem"
        src="/img/18/云1.png"
      />

      <div
        class="absolute papper animate__animated animate__fadeIn"
        style="top: 2.35rem; left: 1.33rem; width: 7.75rem; height: 9rem"
      >
        <div>
          <div class="word">2020年</div>
          <div class="word">只争朝夕，不负韶华</div>
          <div class="word">您是光明的</div>
          <div class="word" v-for="(text, i) in titleArray" :key="i">
            <img
              width="20"
              style="display: inline"
              src="/img/18/奖牌.png"
            /><span>{{ text }}</span>
            <img width="20" style="display: inline" src="/img/18/奖牌.png" />
          </div>
          <div class="word">2021将又是新的开始</div>
          <div class="word">光明使者再接再厉！</div>
        </div>
      </div>
      <div class="absolute stage-item btn" @click="showFn">
        点击生成您的专属海报
      </div>
    </div>

    <v-touch
      v-if="showPoster"
      v-on:swipeleft="swiperleft"
      v-on:swiperight="swiperight"
      class="page poster-box"
    >
      <div class="poster-papper-box">
        <div
          id="cvb1"
          class="poster-papper"
          :class="{ left: active == 2 }"
        ></div>
        <div
          id="cvb2"
          class="poster-papper"
          :class="{ right: active == 1 }"
        ></div>
      </div>
      <div @click="save" class="btn short">{{ nextText }}</div>
    </v-touch>
  </div>
</template>
<script>
import myMixin from "../common/Mixin";
export default {
  mixins: [myMixin],
  data() {
    return {
      showPoster: false,
      active: 1,
      isWX: false,
      canvas: {
        element: null,
        width: 0,
        height: 0,
      },
    };
  },
  computed: {
    nextText() {
      return this.isWX ? "长按海报可保存分享" : "长按海报可保存分享";
    },
    title() {
      return this.$store.state.user.title || ""; // "学习达人/奋进先锋/巡店天眼/强国标兵",
    },
    titleArray() {
      return this.title.split("/");
    },
  },

  created() {
    this.thisPageShowSign = false;
    this.isWX =
      window.navigator.userAgent.toLowerCase().indexOf("micromessenger") != -1;
  },
  mounted() {},
  methods: {
    showFn() {
      this.showPoster = true;
      this.$nextTick(() => {
        this.draw(1);
        this.draw(2);
      });
    },
    draw: function (n) {
      const fillStyle = n == 1 ? "#132248" : "#BD1616"; // 设置文字的填充颜色
      const font =
        n == 1
          ? "normal normal bolder 24px 微软雅黑"
          : "normal normal bolder 24px 微软雅黑"; // 设置文字的填充样式
      const leftArray = n == 1 ? [0.748, 0.636, 0.524] : [0.359, 0.272, 0.188]; //关键词背景的left
      const top = n == 1 ? 1.28 : 1.215; //关键词背景的top
      let baseWordW = n == 1 ? 6 : 0.5; //关键词相对关键词背景的left偏移
      let baseWordH = n == 1 ? 18 : 22.5; //关键词相对关键词背景的top偏移
      let speacedHeight = n == 1 ? 14 : 14; //关键词间距
      const qrLeftArray = n == 1 ? [0.064, 0.219] : [0.669, 0.824]; //二维码的left
      const qrTop = n == 1 ? 1.416 : 1.423; //二维码的top

      // 为保证清晰度，字体大小 及 相关尺寸X2（通过transform: scale(0.5)缩小视觉尺寸）
      baseWordW = baseWordW * 2;
      baseWordH = baseWordH * 2;
      speacedHeight = speacedHeight * 2;

      let cvb = document.getElementById("cvb" + n);
      let canvas = document.createElement("canvas");
      canvas.width = cvb.clientWidth * 0.91715;
      canvas.height = cvb.clientHeight * 0.956;
      cvb.append(canvas);
      //用getContext()判断是否支持canvas
      if (canvas.getContext) {
        let context = canvas.getContext("2d");
        context.fillStyle = fillStyle;
        context.font = font;
        // 画背景
        let bgIMG = new Image();
        bgIMG.src = "/img/19/背景" + n + ".png";
        bgIMG.onload = () => {
          context.drawImage(bgIMG, 0, 0, canvas.width, canvas.height);
          // 画二维码
          let QrIMG = new Image();
          QrIMG.src = "/img/19/二维码.png";
          let QrIMG_width = 0.132 * canvas.width;
          QrIMG.onload = () => {
            context.drawImage(
              QrIMG,
              qrLeftArray[0] * canvas.width,
              qrTop * canvas.width,
              QrIMG_width,
              QrIMG_width
            );
            context.drawImage(
              QrIMG,
              qrLeftArray[1] * canvas.width,
              qrTop * canvas.width,
              QrIMG_width,
              QrIMG_width
            );
          };
          // 画关键词背景
          let keyWordIMG = new Image();
          keyWordIMG.src = "/img/19/关键词" + n + ".png";
          let keyWordIMG_width =
            n == 1 ? 0.096 * canvas.width : 0.056 * canvas.width;
          let keyWordIMG_height =
            n == 1 ? 0.287 * canvas.width : 0.339 * canvas.width;
          keyWordIMG.onload = () => {
            let _title = this.title.split("/");
            _title.forEach((d, i) => {
              ((left, wordsStr) => {
                let wordsArray = wordsStr.split("");
                const baseBGH = top * canvas.width;
                const baseBGW = left * canvas.width;
                context.drawImage(
                  keyWordIMG,
                  baseBGW,
                  baseBGH,
                  keyWordIMG_width,
                  keyWordIMG_height
                );
                // 画关键词
                wordsArray.forEach((__word, index) => {
                  context.fillText(
                    wordsArray[index],
                    baseBGW + baseWordW,
                    baseBGH + baseWordH + speacedHeight * index
                  );
                });
              })(leftArray[i], d);
            });
            let save_url = canvas.toDataURL("image/png", 1);
            let save_IMG = new Image();
            save_IMG.src = save_url;
            save_IMG.width = canvas.width;
            save_IMG.height = canvas.height;
            save_IMG.id = "save_IMG_" + n;
            cvb.append(save_IMG);
            cvb.removeChild(canvas);
          };
        };
      }
    },
    save: function () {
      // let save_url = document.getElementById("cvb" + this.active).childNodes[0]
      //   .src;
      // let a = document.createElement("a");
      // document.body.appendChild(a);
      // a.href = save_url;
      // a.download = this.title + "_" + this.active;
      // a.click();
      // setTimeout(() => {
      this.nextPage();
      // }, 1000);
    },
    nextPage: function () {
      this.showPoster = false;
      this.$router.push({ path: "/luckchat" });
    },
    swiperight: function () {
      this.active = 1;
      console.log("swiperight");
    },
    swiperleft: function () {
      this.active = 2;
      console.log("swiperleft");
    },
  },
};
</script>
<style lang="less" scoped>
.poster-box {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
}
.poster-papper-box {
  margin: 2.1rem auto;
  height: 10.66rem;
  margin-bottom: 1rem;
  width: 100%;
}
.poster-papper {
  padding: 0.28 * 2rem;
  box-sizing: border-box;
  background-image: url("/img/19/纸张.png");
  background-size: 100% 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 6.88 * 2rem;
  height: 10.67 * 2rem;
  position: absolute;
  left: 1.56rem;
  transition: left 0.5s linear, transform 0.5s linear;
  transform: scale(0.5);
  transform-origin: 5% 0;
}
.poster-papper.right {
  transform: scale(0.45);
  left: 9rem;
}
.poster-papper.left {
  transform: scale(0.45);
  left: -5.88rem;
}
.papper {
  padding: 0.8rem 0.8rem;
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

    // width: 6.1rem;
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
  color: #1f7bd8;
}
.btn.short {
  width: 6rem;
  height: 1.05rem;
  line-height: 1.05rem;
  font-size: 0.48rem;
  margin: 0 auto;
}
.dis_none {
  display: none;
}
</style>