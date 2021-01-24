<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <!-- 10rem -->
      <div class="absolute head-bg"></div>

      <!-- small -->
      <img
      @click="nextPage"
        class="absolute"
        style="left: 0.69rem; top: 0.55rem; width: 0.72rem"
        src="/img/23/返回.png"
      />

      <div class="absolute flex-column flex-center" style="top: 1.59rem">
        <div class="head"><img src="/img/20/默认头像.png" /></div>
        <div class="name">{{$store.state.user.name}}</div>
        <div class="department">{{$store.state.user.department}}</div>
        <img
          v-if="myReward > 0"
          style="margin-top: 1.4rem; width: 8.87rem"
          :src="'/img/23/' + $store.state.rewardCards[myReward] + '.png'"
        />
        <template  v-else>
                  <img
         
          style="margin-top: 1.4rem; width: 3rem"
          :src="'/img/23/空白券.png'"
        />
        <div class="reward-no">您目前还没有奖券哦~</div>
        </template>

      </div>

      <div class="tips" v-if="myReward ==1">
        感谢您参与本次的活动！如需使用“带薪休假一日券”，请与所在部门相关负责人联系。请在有效期内使用，过期则无效。(本次活动最终解释权归光明乳业所有)
      </div>
      <div class="tips" v-if="myReward > 1">
        感谢您参与本次的活动！您的爱心捐赠券已被捐入光明爱心基金会的慈善捐款池中，可在首页查看全体员工捐赠总额。
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
      myReward: 0,
    };
  },
  computed: {},

  created() {
    this.thisPageShowSign=false;
     this.myReward = this.$store.state.user.myReward;
  },

  methods: {
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
.page {
  background-color: #ffffff;
}
.head-bg {
  height: 6.63rem;
  width: 10rem;
  background-image: url(/img/0/背景.png);
  background-size: 100% auto;
  background-position: top center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  border-radius: 0 0 100% 100%;
}
.head {
  width: 2.24rem;
  height: 2.24rem;
  background-color: #fff;
  border-radius: 100%;
  img {
    width: 2rem;
    margin: 0.12rem;
    border-radius: 100%;
  }
}
.name {
  text-align: center;
  height: 0.45rem;
  font-size: 0.53rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.45rem;

  margin-top: 0.37rem;
}
.department {
  background-image: url("/img/23/岗位框.png");
  background-size: 100% 100%;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;

  width: 4.44rem;
  height: 0.65rem;
  font-size: 0.32rem;
  font-weight: 400;
  color: #172e56;
  line-height: 0.65rem;
  margin-top: 0.31rem;
}
.tips {
  position: absolute;
  bottom: 0;
  padding: 0.96rem;
  font-size: 0.32rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #172e56;
  text-align: left;
}
.reward-no{
font-size: .45rem;
font-weight: 400;
color: #172E56;
text-align: center;
margin-top:1rem;
}
</style>