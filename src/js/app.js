"use strict";

const navListEl = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

const arrowDown = document.querySelector(".hero__arrow-down");

hamburger.addEventListener("click", function () {
  navListEl.classList.toggle("active");
});

arrowDown.addEventListener("click", function () {
  scrollTo({ top: 500, left: 500, behavior: "smooth" });
});

const elementsToShow = document.querySelectorAll(".show-on-scroll");

let scroll =
  requestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 1000 / 60);
  };

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

// Helper function from: http://stackoverflow.com/a/7557433/274826

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

loop();
