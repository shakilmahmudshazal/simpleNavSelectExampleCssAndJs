"use strict";

document.querySelectorAll(".bottom-nav-item").forEach(function (el, index) {
  el.addEventListener("click", function (el1) {
    console.log(index);
    removeAllactiveClass();
    document.querySelectorAll(".bottom-nav-item")[index].className += " bottom-nav-item-active";
    var n = 100 / document.querySelectorAll(".bottom-nav-item").length;
    document.querySelector(".round-circle-item").style.left = "".concat(index * n + n / 2, "%");
  });
});

var removeAllactiveClass = function removeAllactiveClass() {
  document.querySelectorAll(".bottom-nav-item").forEach(function (el, index) {
    el.classList.remove("bottom-nav-item-active");
  });
};