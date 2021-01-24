<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <img
        class=" absolute stage-item"
        style="bottom: 2.16rem; right: 0rem; width: 8.82rem"
        src="/img/5/建筑.png"
      />

      <img
        class=" absolute stage-item"
        style="bottom: 0rem; left: 0rem; width: 7.82rem"
        src="/img/5/飘带.png"
      />

      <img
        class=" absolute stage-item"
        style="bottom: 0rem; left: 0rem; width: 3.36rem"
        src="/img/5/叶子.png"
      />
      <!--  -->
      <img
        class=" absolute stage-item pulse3"
        style="left: 1.69rem; top: 0rem; width: 0.84rem"
        src="/img/5/金币6.png"
      />
      <img
        class=" absolute stage-item pulse4"
        style="left: 8.68rem; top: 1.67rem; width: 0.84rem"
        src="/img/5/金币0.png"
      />
      <img
        class=" absolute stage-item pulse8"
        style="left: 1.39rem; top: 2.92rem; width: 0.53rem"
        src="/img/5/金币3.png"
      />
      <img
        class=" absolute stage-item pulse9"
        style="left: 7.24rem; top: 4.27rem; width: 0.73rem"
        src="/img/5/金币2.png"
      />
      <img
        class=" absolute stage-item"
        style="left: 0.77rem; top: 11.23rem; width: 0.69rem"
        src="/img/5/金币1.png"
      />
      <img
        class=" absolute stage-item pulse5"
        style="left: 2.27rem; top: 12.39rem; width: 0.56rem"
        src="/img/5/金币2.png"
      />
      <img
        class=" absolute stage-item"
        style="left: 8.21rem; top: 16.21rem; width: 0.72rem"
        src="/img/5/金币4.png"
      />

      <!-- <img
        class=" absolute stage-item"
        style="left: 0.00rem; top: 0.00rem; width: 0.00rem"
        src="/img/5/金币.png"
      /> -->
      <!--  -->

      <img
        class=" absolute stage-item"
       :style="(isIphoneX?('bottom: '+coinTop+'rem;'):(' top: '+coinTop+'rem;'))+ 'right: 2.65rem; width: 0.6rem'"
        src="/img/5/投掷钱币.png"
      />
      <img
        class=" absolute stage-item"
        :style="(isIphoneX?'bottom: 8.56rem;':'top: 9.55rem;')+'  right: 0rem; width: 3.12rem'"
        src="/img/5/手.png"
      />
      <img
        class=" absolute stage-item pulse9"
       :style="(isIphoneX?'bottom:1.56rem;':'top: 12.44rem;')+'  right: 2.02rem; width: 3.59rem'"
        src="/img/5/存钱罐.png"
      />

      <!--  -->

      <!-- papper  animate__slideInUp animate__fadeIn -->
      <transition enter-active-class="animate__animated animate__fadeIn">
        <div
          v-if="papper"
          class="absolute papper"
          :style="'top: 2.01rem; height:8.3rem;left:50%; width:7rem;transform: translateX(-50%)!important;'"
        >
          <div class="word">2020年已经过去</div>
          <div class="word">在光明的日子“色伊伐”？</div>
          <div class="word">这一年</div>
          <div class="word">
            您在<span>{{ $store.state.user.job }}</span
            >岗位上
          </div>
          <div class="word">为自己赚到了（税前）</div>
          <div class="word text-right">
            <span>{{ $store.state.user.pretaxIncome }}</span
            >元
          </div>
          <div class="word">恭喜实现了</div>
          <div class="word">
            <span>{{ $store.state.user.freedom }}</span>
          </div>
        </div>
      </transition>

      <div v-if="btn" class="absolute btn" @click="showBill">查看账单详情</div>

      <!--  -->
      <template v-if="freeIndex == 1">
        <img
          class=" absolute stage-item"
          style="top: 0.93rem; left: 5.8rem; width: 2.41rem"
          :src="'/img/5/牛奶-1-1.png'"
        />
        <img
          class=" absolute stage-item"
          style="top: 9.23rem; left: 0.67rem; width: 1.83rem"
          :src="'/img/5/牛奶-3-1.png'"
        />
      </template>
      <template v-if="freeIndex == 2">
        <img
          class=" absolute stage-item"
          style="top: 0.93rem; left: 5.8rem; width: 2.41rem"
          :src="'/img/5/牛奶-1-2.png'"
        />
        <img
          class=" absolute stage-item"
          style="top: 9.23rem; left: 0.67rem; width: 1.83rem"
          :src="'/img/5/牛奶-1-1.png'"
        />
      </template>
      <template v-if="freeIndex == 3">
        <img
          class=" absolute stage-item"
          style="top: 0.93rem; left: 5.8rem; width: 2.41rem"
          :src="'/img/5/牛奶-1-2.png'"
        />
        <img
          class=" absolute stage-item"
          style="top: 9.23rem; left: 0.67rem; width: 1.83rem"
          :src="'/img/5/牛奶-3-1.png'"
        />
      </template>
      <img
        class=" absolute stage-item"
        style="top: 7.5rem; left: 6.11rem; width: 2.97rem"
        :src="'/img/5/牛奶-2-' + freeIndex + '.png'"
      />
    </div>
    <div v-if="bill" class="page flex-center billpage">
      <transition enter-active-class="animate__animated animate__fadeIn">
        <iscroll-view v-if="billContent" class="scroll-view content-center bill" :options="{preventDefault: false}">
          <div class="flex-column flex-center bill-content">
            <div class="title word text-center">你的年度账单</div>
            <div class="word">2020年您在本公司共收入</div>
            <div class="word text-right"><span></span>{{ $store.state.user.totalIncome }}元</div>
            <div class="bing tu" style="height: 5.25rem">
              <!-- height="5.25rem" -->
              <div
                ref="main"
                style="margin-left: -0.8rem; width: 8rem; height: 5.25rem"
              ></div>
            </div>
            <div class="word" style="margin-top: -0.5rem">
              应发收入<span>{{ c_need_income }}</span>
            </div>
            <div class="word">
              五险一金<span>{{ $store.state.user.fiveOneIncome }}</span>
            </div>
            <div class="word">
              其他（补扣、补结等）<span>{{ $store.state.user.supplementaryIncome }}</span>
            </div>
            <div class="word">
              已预缴个人所得税<span>{{ $store.state.user.personalTaxIncome }}</span>
            </div>
            <div class="word">
              实发收入<span>{{ $store.state.user.paidIncome }}</span>
            </div>
            <div class="word">
              累计专项附加扣除<span>{{ $store.state.user.specialIncome }}</span>
            </div>
            <div class="pulse1 big-red"  style="margin-top: 0.2rem;font-size:16px">上滑查看更多</div>
            <img
              style="margin-top: 0.2rem; width: 4.57rem"
              :src="'/img/5/条形码.png'"
            />

            <div class="row-height" v-if="$store.state.user.incomeCompareResult == 3">
              <div class="word">您的工资比2019增长了</div>
              <div class="word">
                <span>{{ $store.state.user.incomeCompareGrowth }}</span
                >元
              </div>
              <div class="word">增幅达到</div>
              <div class="word">
                <span>{{ Number($store.state.user.incomeCompareGrowthRate*100).toFixed(2) }}%</span>
              </div>

              <div class="word">
                哇哦~没有<span>对比</span>就没有<span>惊喜</span>
              </div>
              <div class="word">感受到光明</div>
              <div class="word">
                对您沉甸甸的爱了吗？
              </div>
            </div>
            <div class="row-height" v-if="$store.state.user.incomeCompareResult == 1">
              <div class="word">您的工资</div>
              <div class="word">比2019年有所降低</div>
              <div class="word">
                <span style="color: #2c3e50">别难过、别泄气</span>
              </div>
              <div class="word">至少您还拥有着</div>
              <div class="word">光明的<span>爱</span>和<span>期待！</span></div>
            </div>
            <div class="row-height" v-if="$store.state.user.incomeCompareResult == 2">
              <div class="word">您的工资</div>
              <div class="word">与2019年基本持平</div>
              <div class="word">可能没有达到您的预期吧</div>
              <div class="word">来年我们一起</div>
              <div class="word"><span>加油，努力！</span></div>
            </div>
            <div class="row-height" v-if="$store.state.user.incomeCompareResult == 0">
              <div class="word">您在光明乳业</div>
              <div class="word">开启了一段新的人生</div>
              <div class="word">是否寻找到一个新的自己</div>
              <div class="word">找到“光明”</div>
              <div class="word">的<span>诗和远方</span>呢？</div>
            </div>
            <div class="flex align-center" style="margin-top: 0.45rem;margin-bottom:0.25rem">
              <img
              class="heartBeat"
                style="height: 0.71rem; width: 1.4rem; margin-left: 2rem"
                :src="'/img/5/已阅.png'"
                @click="nextPage"
              />
              <img
                style="height: 1.44rem; width: 1.48rem; margin-left: 0.67rem"
                :src="'/img/5/盖章.png'"
              />
            </div>
          </div>
        </iscroll-view>
      </transition>
    </div>
  </v-touch>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/pie");
import myMixin from '../common/Mixin';
export default {
  mixins: [myMixin],
  data() {
    return {
      coinTop:11.65,
      freeIndex: 1,
      wordStr: "",
      words: ["", "", "", "", "", "", "", "", "", "", ""],

      papper: false,
      btn: false,

      bill: false,
      billContent: false,

      //
      last_x: 0,
      last_y: 0,
      last_z: 0,
      last_update: 0,
    };
  },
  computed: {
    c_need_income(){
      return Number(this.$store.state.user.basicIncome)//:"36920",//基本工资
          +Number(this.$store.state.user.pieceIncome)//:"0",//计件工资
          +Number(this.$store.state.user.bonusIncome)//:"6771.93",//奖金
          +Number(this.$store.state.user.overtimeIncome)//:"19391.73",//加班费
          +Number(this.$store.state.user.subsidiesIncome)//:"500",//津补贴
          +Number(this.$store.state.user.otherIncome)//:"0",//其他（应发前）
    },
    c_pie_chart_all(){
      return  Number(this.$store.state.user.basicIncome)
      +Number(this.$store.state.user.bonusIncome)
      +Number(this.$store.state.user.overtimeIncome)
      +Number(this.$store.state.user.subsidiesIncome)
      +Number(this.$store.state.user.otherIncome+this.$store.state.user.yearEndIncome)
    },
  },
  created() {
    this.thisPageShowSign=false;

    this.freeIndex = this.$route.params.id || 1;
     if(document.documentElement.clientHeight>740){
       this.isIphoneX=true
      this.coinTop = 8;
    }
    setTimeout(() => {
      this.papper = true;
      
      setTimeout(() => {
        this.btn = true;
        this.coinTop=13;

         if( this.isIphoneX==true){
      
      this.coinTop = 2;
    }
      }, 2000);
    }, 1500);

    //运动事件监听
    // if (window.DeviceMotionEvent) {
    //   window.addEventListener("devicemotion", this.deviceMotionHandler, false);
    // }
  },

  methods: {
    nextPage: function () {
        if(this.$store.state.user.education ){
                 this.$router.push({ path: "/more" });
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
      if (this.billContent) {
        // this.nextPage();
      }
    },
    showBill() {
      this.bill = true;
      setTimeout(() => {
        this.billContent = true;
        this.addECharts();
      }, 100);
    },
    addECharts() {
      this.$nextTick(() => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.$refs.main);
        this.$$.console_dev(myChart);
        // 绘制图表
        myChart.setOption({
          color: [
            "#4573a7",
            "#89a54e",
            "#71588f",
            "#4298af",
            "#df9661",
            "#93a9d0",
          ],
          series: [
            {
              type: "pie",
              radius: ["30%", "60%"],
              center: ["50%", "50%"],
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  borderColor: "#fff",
                },
              },
              label: {
                position: "outer",
                alignTo: "none",
                color: "#002d71",
                fontFamily: "wawa",
                bleedMargin: 0,
              },
              labelLine: {
                lineStyle: {
                  color: "#002d71",
                },
                length: 8,
                length2: 8,
                smooth: true,
              },
              data: [
                { value: this.$store.state.user.basicIncome, name: "基本工资" },
                { value: this.$store.state.user.bonusIncome, name: "奖金" },
                { value: this.$store.state.user.overtimeIncome, name: "加班费" },
                { value: this.$store.state.user.subsidiesIncome, name: "津补贴" },
                { value: this.$store.state.user.otherIncome, name: "其他" },
                { value: this.$store.state.user.yearEndIncome, name: "年终奖" },
              ]
              // .sort(function (a, b) {
              //   return a.value - b.value;
              // }),
            },
          ],
        });
      });
    },
    deviceMotionHandler(eventData) {
      const SHAKE_THRESHOLD = 5000;

      var acceleration = eventData.accelerationIncludingGravity;
      var curTime = new Date().getTime();
      if (curTime - this.last_update > 10) {
        var diffTime = curTime - this.last_update;
        this.last_update = curTime;
        let x = acceleration.x;
        let y = acceleration.y;
        let z = acceleration.z;
        var speed =
          (Math.abs(x + y + z - this.last_x - this.last_y - this.last_z) /
            diffTime) *
          10000;
        if (speed > SHAKE_THRESHOLD) {
          alert("SHAKE_THRESHOLD");
        }
        this.last_x = x;
        this.last_y = y;
        this.last_z = z;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.papper {
  padding: 0.9rem 0.7rem;
  background-image: url("/img/5/文本框.png");
  background-size: 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: left;
  color: #172e56;
  div.word {
    font-family: "wawa";
    line-height: 0.65rem;
    font-size: 16px;
    span {
      color: #cc131d;
      font-size: 20px;
    }
  }
}
.btn {
  background-image: url("/img/5/查看账单按钮.png");
  background-size: 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: center;
  top: 12.22rem;
  left: 2.28rem;
  width: 4.06rem;
  height: 0.93rem;
  line-height: 0.93rem;
  font-family: "wawa";
  font-size: 16px;
}

.billpage {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
  .word{
    opacity: 1;
  }
}
.bill {
  // overflow: auto;
  padding: 0.6rem 0.4rem;
  background-image: url("/img/5/纸张.png");
  background-size: 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-align: left;
  height: 15.71rem;
  width: 7.36rem;
  color: #172e56;
    /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  // position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  .bill-content{
    min-height:24rem;
  }
  div.word.title {
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
  }
  div.word {
    font-family: "wawa";
    height: 0.78rem;
    width: 6.1rem;
    line-height: 1.1rem;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 18px;
    }
  }
  .row-height {
    margin-top: 0.8rem;
    div.word {
      justify-content: flex-start;
      span {
        font-size: 18px;
        color: #cc131d;
        
      }
    }
  }
}
</style>