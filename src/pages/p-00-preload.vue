<template>
  <div class="page flex-center">
    <h2>
      <strong>正在加载中{{ percent }}</strong>
    </h2>
  </div>
</template>

<script>
import imgJson from "../assets/imgs";
let imgs = imgJson.p1;
export default {
  data() {
    return {
      count: 0,
      percent: "",
    
    };
  },
  created: function () {
    this.thisPageShowSign=false;
    this.preload();
  },
  methods: {
    preload: function () {
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = this.imgDoneFn;
        image.onerror = this.imgDoneFn;
   
      }
    },
    imgDoneFn() {
      
      this.count++;
      
      // 计算图片加载的百分数，绑定到percent变量
      let percentNum = Math.floor((this.count / imgs.length) * 100);
      this.percent = `${percentNum}%`;
     
      if (this.count === imgs.length) {
        // 图片加载完成后跳转页面
        setTimeout(() => {
         this.$router.push({ path: "/login" });
        }, 100);
      }
    },
  },
};
</script>