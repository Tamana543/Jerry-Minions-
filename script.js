const eyeEl = document.querySelectorAll(".brown_eye"),
  smileEl = document.querySelector(".jerry_smile");

document.querySelector(".pocket").onmousemove = () => {
  smileEl.style.display = "none";
  document.querySelector(".jerry_angry ").style.display = "block";
};
document.body.onmousemove = (event) => {
  // coordinates
  const x = (event.clientX * 55) / window.innerWidth + "%";
  const y = (event.clientY * 55) / window.innerHeight + "%";
  //   console.log(x);
  //   console.log(y);
  eyeEl.forEach((eye) => {
    eye.style.left = x;
    eye.style.top = y;
  });
  //   if (smileEl.style.display === "none") {
  //     document.querySelector(".jerry_angry ").style.display = "none";
  //     smileEl.style.display = "block";
  //   }
};
