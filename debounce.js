function debounce(cb, delay) {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timer = null;
    }
    const callNow = !timer;
    clearTimeout(timer);
    timer = setTimeout(later, delay);
    if (callNow) cb.apply(context, args);
  }
}

const myEfficientFn = debounce(function() {
  console.log("debounced");
}, 1000);

window.addEventListener("resize", myEfficientFn);