"use strict";

document.querySelectorAll(".bottom-nav-item").forEach(function (el, index) {
  el.addEventListener("click", function (el1) {
    console.log(index);
    removeAllactiveClass();
    document.querySelectorAll(".bottom-nav-item")[index].className += " bottom-nav-item-active";
  });
});

var removeAllactiveClass = function removeAllactiveClass() {
  document.querySelectorAll(".bottom-nav-item").forEach(function (el, index) {
    el.classList.remove("bottom-nav-item-active");
  });
};