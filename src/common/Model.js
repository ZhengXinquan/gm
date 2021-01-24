import router from "./Router";
import axios from "./Axios";
// import Dialog from 'vant/lib/dialog';
// import 'vant/lib/dialog/style';
import Toast from "vant/lib/toast";
import "vant/lib/toast/style";
import util from "./Util";
function checkLoginTime() {
  let t = localStorage.getItem("t");
  let n = new Date().getTime();
  if (t && (n - t) / 1000 / 60 < 5) {
    localStorage.setItem("t", n);
    return true;
  } else {
    router.push("/login");
    return false;
  }
}
const model = {
  GetInfo(callback) {
    const getResponse = ({ data }) => {
      if (!checkLoginTime()) return;
      if (data.code == 1) {
        // Toast("获取信息成功");
        // util.console_dev("getInfo success", router);
        if (
          router.history.current.path == "/login" ||
          router.history.current.path == "/preload"
        ) {
          router.push({ path: "/load" });
        }
      } else {
        util.console_dev("getInfo error");
      }
      callback && callback(data);
    };

     axios.post("/getInfo", { uid: localStorage.getItem("uid") }).then(getResponse);
  },

  Login(json, callback) {
    const getResponse = ({ data }) => {
      util.console_dev("model Login", data);
      if (data.code == 1) {
        Toast("登录成功");
        localStorage.setItem("uid", data.data.uid);
        localStorage.setItem("t", new Date().getTime());
        router.push({ path: "/load" });
      } else {
        util.console_dev("Login error");
      }
      callback && callback(data);
    };
    axios.post("/login", json).then(getResponse);
  },
  SendChat(json, callback) {
    if (!checkLoginTime()) return;
    const getResponse = ({ data }) => {
      if (data.code == 1) {
        Toast(data.data);
      }
      callback && callback(data);
    };
    axios
      .post(
        "/sendChat",
        Object.assign(json, { uid: localStorage.getItem("uid") })
      )
      .then(getResponse);
  },
  GetChat(callback) {
    if (!checkLoginTime()) return;
    const getResponse = ({ data }) => {
      callback && callback(data);
    };
    axios.post("/getChat").then(getResponse);
  },
  GetReward(json,callback) {
    if (!checkLoginTime()) return;
    const getResponse = ({ data }) => {
      callback && callback(data);
    };
    axios
      .post(
        "/getReward",
        Object.assign(json, { uid: localStorage.getItem("uid") })
      )
      .then(getResponse);
  },
};

export default model;
