<template>
  <div id="app" @click="play">
    <audio
      id="music"
      class="audio"
      src="/music/bgm.mp3"
      controls
      loop
      hidden="true"
    ></audio>
    <img
      class="absolute"
      :class="{ 'spin-all-time': isPlay }"
      style="top: 16px; right: 16px; z-index: 10"
      width="30"
      src="/img/0/音乐.png"
      v-on:click.stop="togglePlay"
    />
    <img
      v-show="upIsShow"
      class="absolute bounce dis_none"
      style="top: 80%; left: 4.5rem; width: 1rem; z-index: 12"
      width="30"
      src="/img/0/上滑.png"
    />
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// 引入组件

export default {
  name: "App",
  data() {
    return {
      transitionName: "fade",
      isPlay: false,
      upIsShow: true,
      hasClick:false,
    };
  },
  provide() {
    return {
      setSign: this.setSign,
    };
  },
  components: {},
  created() {
    // const that = this;
    //获取页面高度，以便全屏显示
    // that.$setFullHeight(document.documentElement.clientHeight);
    // 获取个人信息
    this.$Model.GetInfo((response) => {
      this.$$.console_dev("app GetInfo", response.data);
      if (response.code == 1) {
        this.$store.setUserInfoAction(response.data);
      }
    });

    let defaultPath = "/preload"; //preload freedom  harvest/title
    if (process.env.NODE_ENV == "development") {
      // defaultPath = "/freedom/3";
    }
    if (this.$route.path != defaultPath) {
      // this.$router.push({ path: defaultPath });
    }
  },
  mounted() {
    // const that = this;
    // this.$nextTick(() => {
    //   var audio = document.getElementById("music");
    //   audio.addEventListener("canplay", function () {
    //     that.$$.console_dev("audio can play")
    //     that.isPlay = true;
    //     audio.play(); // 播放
    //   });
    // });
  },
  watch: {
    $route(to, from) {
      this.transitionName = from.meta.animated || "fade";
    },
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next();
  },
  methods: {
    setSign(v) {
      this.upIsShow = v;
    },
    togglePlay() {
      var audio = document.getElementById("music");
      if (audio !== null) {
        if (audio.paused) {
          this.isPlay = true;
          audio.play(); // 播放
        } else {
          this.isPlay = false;
          audio.pause(); // 暂停
        }
      }
    },
    play() {
      if(this.hasClick)return;
      this.$$.console_dev("app click");
      var audio = document.getElementById("music");
      this.$$.console_dev("audio can play")
      this.isPlay = true;
      audio.play(); // 播放
    },
    // async fn_async_get() {
    //   const that = this;
    //   const data_ = that.$qs.stringify({token:this.$store.state.user.token});
    //   try {
    //     return await that.$axios.get("getInfo", data_);
    //   } catch (error) {
    //     console.warn(error);
    //   }
    // },
  },
};
</script>

<style lang="less">
@rem: 32/1rem;
</style>
