import Vue from "vue";

let windowHeight, mainMinHeight, main;

const setMinHeight = () => {
  windowHeight = window.innerHeight;
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
