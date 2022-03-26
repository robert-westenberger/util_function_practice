const throttle = (cb, delay) => {
  let timer = false;

  return (...args) => {
    if (!timer) {
      cb(...args);
      timer = true;

      setTimeout(() => {
        timer = false;
      }, delay);
    }
  }
}

const myEfficientFn = throttle(function () {
  console.log("throttled");
}, 500);

window.addEventListener("resize", myEfficientFn);