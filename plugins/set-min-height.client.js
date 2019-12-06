import Vue from "vue";

let windowHeight, headerHeight, footerHeight, mainMinHeight, main;

const setMinHeight = () => {
  windowHeight = window.innerHeight;
  // headerHeight = document.getElementsByTagName("header")[0].clientHeight;
  // footerHeight = document.getElementsByTagName("footer")[0].clientHeight;
  mainMinHeight = windowHeight;
  main = document.getElementsByTagName("main")[0];

  main.style.minHeight = mainMinHeight + "px";
};
setMinHeight();
window.onresize = setMinHeight;

Vue.mixin({
  updated() {
    setMinHeight();
  },
});
