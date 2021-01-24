import axios from "axios";
import qs from "qs";
import router from "../common/Router";
import Toast from "vant/lib/toast";
import "vant/lib/toast/style";
import util from "./Util";
//接口配置
var instance = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? "/api" : window.ApiUrl,
});

//////////////////////////
// let elementLoading;
//添加请求拦截器
util.console_dev(process.env);
instance.interceptors.request.use(
  (config) => {
    //在一个ajax发送前执行操作 config.url  config.method
    util.console_dev(config.url, process.env.NODE_ENV);
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    util.console_dev("******loading********start");
    // elementLoading=Loading.service({ fullscreen: true ,background:'rgba(255, 255, 255, 0.5)'});//
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    //在一个ajax响应后再执操作
    // elementLoading.close();
    util.console_dev("******loading********end");
    util.console_dev(response)
    if (response.data.code != 1) {
      if (response && response.data) {
        Toast(response.data.data||response.data.msg);
      }
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
    if (response && response.data&& response.data.data) {
      try {
        response.data.data=JSON.parse(response.data.data)
      } catch (error) {
        util.console_dev(error)
      }
    }
    return response;
  },
  (error) => {
    if (instance.isCancel(error)) {
      util.console_dev("isCancel->", error.message);
    } else {
      util.console_dev("error", error);
    }
    return Promise.reject(error);
  }
);
export default instance;
