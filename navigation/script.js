var navi = document.getElementById("navi");

animateSlider = x => {
  var screenWidth = window.innerWidth;
  x = (x / screenWidth).toFixed(1);
  console.log(x);
  navi.style.setProperty('--s', x);
}

window.onmousemove = e => setTimeout(() => animateSlider(e.clientX), 500);