# Frontend Mentor - Sunnyside agency landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Project screenshot](./src/images/project%20screenshot.PNG)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
const elementsToShow = document.querySelectorAll(".show-on-scroll");

// This is better than window.addEventListener('scroll')
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

// This function is from stackOverflow

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
```

### Continued development

Css Animations

### Useful resources

[css color filter generator](https://angel-rs.github.io/css-color-filter-generator/)

[css tricks](https://css-tricks.com/snippets/css/css-triangle/)

[css hsl to hex converter](https://easyretro.io/tools/hsl-to-hex/)

[css animation rocks website](https://cssanimation.rocks/scroll-animations/)

[stackOverflow](http://stackoverflow.com/a/7557433/274826)

## Author

- George Asiedu - [@george5-star](https://www.frontendmentor.io/profile/george5-star)
