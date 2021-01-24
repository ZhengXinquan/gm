<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <img
        class=" absolute stage-item"
       :style="(isIphoneX?'bottom: 0rem;':'top: 14.08rem;')+'  left: 0.61rem; width: 7.12rem'"
        src="/img/4/路.png"
      />
      <img
        class=" absolute stage-item pulse9"
        style="top: 0rem; left: 0rem; width: 4.37rem"
        src="/img/4/云.png"
      />
      <img
        class=" absolute stage-item"
        style="top: 11.81rem; left: 4.85rem; width: 3.45rem"
        src="/img/4/气泡1.png"
      />
      <img
        class=" absolute stage-item pulse7"
        style="top: 1.2rem; right: 0.44rem; width: 1.58rem"
        src="/img/4/气泡2.png"
      />
      <img
        class=" absolute stage-item"
        style="top: 10.33rem; left: 1.28rem; width: 1.58rem"
        src="/img/4/气泡3.png"
      />

      <img
        class=" absolute stage-item"
        style="bottom: 0rem; right: 0rem; width: 4.1rem"
        src="/img/4/25.png"
      />
      <img
        class=" absolute stage-item pulse5"
        style="bottom: 0rem; right: 0.57rem; width: 8.81rem"
        src="/img/4/气泡不动.png"
      />

      <!-- papper  animate__slideInUp animate__fadeIn -->
      <transition enter-active-class="animate__animated animate__fadeIn">
        <div
          v-if="papper"
          class="absolute papper"
          :style="'top: 2rem; left: 1.13rem; width: 7.57rem;height:8.35rem'"
        >
          <div class="word">{{ words[0] }}</div>
          <div class="word">{{ words[1] }}</div>
          <div class="word">{{ words[2] }}</div>
          <div class="word">{{ words[3] }}</div>
          <div class="word">{{ words[4] }}</div>
          <div class="word">{{ words[5] }}</div>
          <div class="word">{{ words[6] }}</div>
          <div class="word">
            {{ words[7] }}
            <span>{{ words[8] }}</span
            >{{ words[9] }}
          </div>
          <div class="word">{{ words[10] }}</div>
        </div>
      </transition>

      <img
        class=" absolute stage-item"
        :style="(isIphoneX?'bottom: 2.56rem;':'top: 10.36rem;')+' left: 2.5rem; width: 3.5rem;height:4.89rem'"
        src="/img/4/人和牛.png"
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
      days: 2929,
      wordStr: "",
      words: ["", "", "", "", "", "", "", "", "", "", ""],

      papper: false,
    };
  },
  computed: {},
  created() {
    setTimeout(() => {
      this.papper = true;
      setTimeout(() => {
        this.typeWord(this.$store.state.user.enterDate);
      }, 800);
    }, 800);

  },

  methods: {
    swipeup: function () {
      this.nextPage();
    },
    typeWord(__enterDate) {
      this.days =
        (new Date("2021/01/01").getTime() -
          new Date(__enterDate).getTime()) /
        1000 /
        60 /
        60 /
        24;
      this.wordStr =
        "25年前,光明乳业正式成立,不管晴天雨天,今天也是努力营业的,一天~,截止2021年1月1日,光明已与您相互陪伴,了," +
        this.days +
        ",天,为您的付出打CALL！";

      let arr = this.wordStr.split("");
      let index = 0,i = 0,l = arr.length;
      let timer = setInterval(() => {
        if (i < l) {
          let w = arr[i];
          if (w == ",") {
            index++;
          } else {
            let old = this.words[index];
            this.$set(this.words, index, old + w);
          }
          i++;
        } else {
          clearInterval(timer);
        }
      }, 100);
    },
    nextPage() {
    if(this.$store.state.user.freedom && (this.$store.state.user.incomeCompareResult!=0 ||  this.$store.state.user.incomeCompareResult!=1 ||  this.$store.state.user.incomeCompareResult!=2 ||  this.$store.state.user.incomeCompareResult!=3)){
        let id = this.$store.state.freedomArray.findIndex(e=>e==this.$store.state.user.freedom)+ 1;
        this.$router.push({ path: "/freedom/" + id });
        return;
    }

        if((!this.$store.state.user.freedom || this.$store.state.user.incomeCompareResult!=0||  this.$store.state.user.incomeCompareResult!=1|| this.$store.state.user.incomeCompareResult!=2||  this.$store.state.user.incomeCompareResult!=3)&& this.$store.state.user.more!=false){
           this.$router.push({ path: "/more" });
        }else if(!this.$store.state.user.education && this.$store.state.user.education!=false ){
            this.$router.push({ path: "/education" });
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
  },
};
</script>
<style lang="less" scoped>
.papper {
  padding: 0.8rem;
  background-image: url("/img/4/纸张.png");
  background-size: 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: left;
  div.word {
    font-family: "wawa";
    height: 0.75rem;
    width: 6.1rem;
    line-height: 1rem;
    font-size: 18px;
    letter-spacing: 4px;
    span {
      color: #cc131d;
      font-size: 24px;
    }
  }
}
</style>