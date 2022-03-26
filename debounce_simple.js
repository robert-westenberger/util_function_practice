function debounce(func, wait) {
  let timeout; // variable that the timeout function (ID) will be assigned to

  // The function that is returned, and will be executed many times.
  return function (...args) {
    function later() {
      timeout = null;
      func(...args);
    }
    // Reset the timer after each function call. If this inner 
    // constantly being called, it will never execute (as desired).
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  }
}

const myEfficientFn = debounce(function () {
  console.log("debounced");
}, 1000);

window.addEventListener("resize", myEfficientFn);