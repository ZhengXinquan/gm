import util from "./Util";
const store = {
  debug: true,
  state: {
    message: "Hello!",

    freedomArray: ["优倍自由", "纯鲜自由", "娟姗自由"],
    labelArray: [
      "more",
      "education",
      "position",
      "marry",
      "child",
      "approval",
      "study",
      "contribution",
      "activity",
      "shoptour",
    ],
    rewardCards: ["空白券", "带薪休假一日券", "5元爱心券", "10元爱心券"],
    user: { token: "" },
    showUp:true,
  },
  declineSpinTimesAction() {
    if (this.state.user.spinTimes > 0) {
      if (this.debug) util.console_dev("declineSpinTimes suc");
      this.state.user.spinTimes = this.state.user.spinTimes - 1;
    } else {
      if (this.debug) util.console_dev("declineSpinTimes err");
    }
  },
  setMyRewardAction(newValue) {
    if (this.debug) util.console_dev("setMyRewardAction triggered with", newValue);
    this.state.user.myReward = newValue;
  },
  setUserInfoAction(newValue) {
    try {
      newValue = JSON.parse(newValue);
    } catch (error) {util.console_dev(error)}
    try {
      newValue['position']=JSON.parse(newValue.position);
    } catch (error) {util.console_dev(error)}
    try {
      util.console_dev('newValue.study')
      util.console_dev(newValue.study)
      newValue['study']=JSON.parse(newValue.study);
    } catch (error) { util.console_dev('newValue.study err');util.console_dev(error)}
    try {
      newValue['shoptour']=JSON.parse(newValue.shoptour);
    } catch (error) {util.console_dev(error)}
    try {
      newValue['title']=JSON.parse(newValue.title);
    } catch (error) {util.console_dev(error)}

    newValue['title']=newValue.title.join('/')
    if (this.debug) util.console_dev("setUserInfoAction triggered with", newValue);
    // localStorage.setItem("Token",newValue.token)
    this.state.user = Object.assign({}, newValue);
  },
  clearUserInfoAction() {
    if (this.debug) util.console_dev("clearMessageAction triggered");
    this.state.user = { token: "" };
  },
};

export default store;
