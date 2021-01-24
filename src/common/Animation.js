class wordAnimation {
  constructor() {
    this.n = 0;
    this.show = function() {
      let wordDIVs = document.getElementsByClassName("word");
      if (wordDIVs.length) {
        wordDIVs.forEach((element, index) => {
          ((e, i) => {
            setTimeout(() => {
              e.className = e.className + " word-animation";
            }, i * 500);
          })(element, index);
        });
      } else {
        if (this.n <= 5000) {
          setTimeout(() => {
            this.n++;
            this.show();
          }, 500);
        }
      }
    };
  }
}
class myAnimation {
  constructor() {
    let stageItems = document.getElementsByClassName("stage-item");
    let b = {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    };
    stageItems.forEach((element) => {
      let e = {
        top: element.offsetTop,
        left: element.offsetLeft,
        w: element.clientWidth,
        h: element.clientHeight,
      };

      // let hide = {
      //   left: e.left + e.w / 2 > b.w / 2 ? b.w : -e.w,
      //   top: e.top + e.h / 2 > b.h / 2 ? b.h : -e.h,
      // };
      element.dataset.e = JSON.stringify(e);
      // element.dataset.hide = JSON.stringify(hide);
      // element.style.left = hide.left + "px";
      // element.style.top = hide.top + "px";
      let inLeft = " animate__animated animate__bounceInLeft";
      let inRight = " animate__animated animate__bounceInRight";
      let outLeft = " animate__animated animate__bounceOutLeft";
      let outRight = " animate__animated animate__bounceOutRight";

      // let inDown = " animate__animated animate__slideInDown";
      let inUp = " animate__animated animate__slideOutUp";
      let outUp = " animate__animated animate__slideInUp";
      // let outDow = " animate__animated animate__slideOutDown";

      element.dataset.animateInUpClass = inUp;
      element.dataset.animateOutUpClass = outUp;

      if (e.left + e.w / 2 > b.w / 2) {
        element.dataset.animateInClass = inRight;
        element.dataset.animateOutClass = outRight;
      } else {
        element.dataset.animateInClass = inLeft;
        element.dataset.animateOutClass = outLeft;
      }
    });
    this.showFn = function(mark) {
      let stageItems = document.getElementsByClassName("stage-item");
      stageItems.forEach((element) => {
        setTimeout(() => {
          const __className =
            element.className +
            " action " +
            (mark ? "" : element.dataset.animateInClass);
          element.className = __className;
        }, 10);
        setTimeout(() => {
          element.className =  element.className.replace(element.dataset.animateInClass, "")
        }, 1000);
      });
    };
    this.hideFn = function() {
      let stageItems = document.getElementsByClassName("stage-item");
      stageItems.forEach((element) => {
        setTimeout(() => {
          element.className =
            element.className.replace(element.dataset.animateInClass, "") +
            " " +
            element.dataset.animateOutClass;
        }, 10);
      });
    };
    this.showUpFn = function() {
      let stageItems = document.getElementsByClassName("stage-item");
      stageItems.forEach((element) => {
        setTimeout(() => {
          element.className =
            element.className + " action " + element.dataset.animateInUpClass;
        }, 10);
      });
    };
    this.hideUpFn = function() {
      let stageItems = document.getElementsByClassName("stage-item");
      stageItems.forEach((element) => {
        setTimeout(() => {
          element.className =
            element.className.replace(element.dataset.animateInUpClass, "") +
            " " +
            element.dataset.animateOutUpClass;
        }, 10);
      });
    };
  }
}
export { myAnimation, wordAnimation };
