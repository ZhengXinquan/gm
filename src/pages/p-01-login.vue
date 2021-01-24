<template>
  <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown" class="page">
    <div class="absolute page">
      <img
        class="absolute stage-item swing4"
        style="bottom: 0rem; right: 0.31rem; width: 3.05rem"
        src="/img/1/云1.png"
      />
      <img
        class="absolute stage-item swing5"
        style="top: 4.27rem; right: 0rem; width: 1.37rem"
        src="/img/1/云2.png"
      />
      <img
        class="absolute stage-item swing6"
        style="bottom: 1.24rem; left: 0rem; width: 3rem"
        src="/img/1/云3.png"
      />
      <img
        class="absolute stage-item swing7"
        style="top: 1.63rem; left: 0rem; width: 1.93rem"
        src="/img/1/云4.png"
      />
      <img
        class="absolute stage-item swing8"
        style="top: 0rem; left: 4.91rem; width: 3.31rem"
        src="/img/1/云5.png"
      />
    </div>
    <div class="page flex-center">
      <div class="content-center flex-column flex-center">
        <img
          class="logo"
          style="width: 3.532rem"
          src="/img/1/登陆界面logo.png"
        />
        <div class="button-box" style="margin-top: 1.04rem">
          <img class="icon" src="/img/1/账号图标.png" />
          <input
            class="btn input"
            v-model="account"
            type="text"
            placeholder="员工自助系统账户"
          />
        </div>
        <div class="button-box" style="margin-top: 0.57rem">
          <img class="icon" src="/img/1/密码图标.png" />
          <input
            class="btn input"
            v-model="password"
            type="password"
            placeholder="员工自助系统密码"
          />
        </div>
        <input
          class="btn login"
          :class="{ active: loginactive }"
          type="button"
          style="margin-top: 0.41rem"
          value="登录"
          @click="login"
        />
      </div>
      <van-overlay :show="loading">
        <div class="wrapper" @click.stop>
          <van-loading size="60px" />
        </div>
      </van-overlay>
    </div>
  </v-touch>
</template>
<script>
import myMixin from "../common/Mixin";
export default {
  mixins: [myMixin],
  data() {
    return {
      loading:false,
      account: "",
      password: "",
    };
  },
  computed: {
    loginactive() {
      if (this.account && this.password) {
        return true;
      }
      return false;
    },
  },
  created() {
    this.thisPageShowSign = false;
    // 获取个人信息
    if (process.env.NODE_ENV == "development") {
      this.account = "34048";
      this.password = "ABC123";
    }
    // this.getInfo();
  },
  methods: {
    swipeup: function () {},
    getInfo() {
      this.$Model.GetInfo((response) => {
        this.loading=false;
        if (response.code == 1) {
          this.$store.setUserInfoAction(response.data);
          console.log("123");
        }
      });
    },
    login() {
      if (!this.loginactive) {
        return;
      }
      console.log("123");
      this.loading=true;
      this.$Model.Login(
        { account: this.account, password: this.password },
        (response) => {
          if (response.code == 1) {
            console.log("123");
            this.getInfo();
          }else{
            this.loading=false;
          }
          this.$$.console_dev(
            "login callback",
            response,
            this.$store.state.user
          );
        }
      );
    },
  },
};
</script>
<style lang="less" scoped>
.btn.input {
  width: 6.57rem;
  height: 1.03rem;
  background-image: url(/img/1/输入框.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  padding-right: 0.5rem;
  padding-left: 1.1rem;
  color: #fff;
  box-sizing: border-box;
  font-size: 16px;
}
.btn.input::placeholder {
  color: #fff;
  font-size: 16px;
}
.btn.login {
  width: 4.24rem;
  height: 1.97rem;
  background-image: url("/img/1/登陆框未点击灰色.png");
  background-size: 100%;
  background-position: center;

  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
}
.btn.login.active {
  background-image: url("/img/1/登陆框可点击蓝色.png");
}
.icon {
  display: block;
  position: absolute;
  margin-left: 0.6rem;
  margin-top: 0.34rem;
  width: 0.35rem;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>