const util = {
  console_dev: function(e) {
    if (process.env.NODE_ENV == "development") {
      console.log(e);
    }
  },
  getSearch: function() {
    var url = location.search;
    var json = {};
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        let key_ = strs[i].split("=")[0];
        let value_ = unescape(strs[i].split("=")[1]);
        json[key_] = value_;
      }
    }
    return json;
  },
  isNumber: function(value) {
    return !Number.isNaN(Number(value));
  },
  getDomain: function() {
    return window.location.origin
      ? window.location.origin
      : window.location.protocol +
          "//" +
          window.location.hostname +
          (window.location.port ? ":" + window.location.port : "");
  },
  console: {
    black(str) {
      console.log("%c " + str, "background:black;color:white");
    },
    red(str) {
      console.log("%c " + str, "background:red;color:white");
    },
    blue(str) {
      console.log("%c " + str, "background:blue;color:white");
    },
    green(str) {
      console.log("%c " + str, "background:green;color:white");
    },
    yellow(str) {
      console.log("%c " + str, "background:yellow;color:black");
    },
  },
  copyText: function(text_, tips) {
    let range = document.createRange();
    let eleP = document.createElement("p");
    let ele = document.createTextNode(text_);
    eleP.appendChild(ele);
    document.body.appendChild(eleP);
    range.selectNode(ele);
    var selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges();
    selection.addRange(range);
    console.log(selection);
    document.execCommand("copy");
    document.body.removeChild(eleP);
    if (tips) {
      alert(tips);
    }
  },
  sortBy(__json, __str, sortMark) {
    sortMark = -sortMark;
    console.log("sortBy=" + __str);
    __json.sort(function(a, b) {
      var aa = a[__str] + "";
      var bb = b[__str] + "";
      var xxx = aa.localeCompare(bb);
      if (parseFloat(bb) == bb && parseFloat(aa) == aa) {
        xxx = aa - bb;
      }
      return sortMark * xxx;
    });
    return __json;
  },
  jsonToArr(obj) {
    let arr = [];
    for (var key in obj) {
      arr.push({ key: key, value: obj[key] });
    }
    return arr;
  },
};
export default util;
