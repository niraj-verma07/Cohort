let img = document.querySelector("img");
let love = document.querySelector("#love");
let likeBtn = document.querySelector("#likebtn");

img.addEventListener("dblclick", function () {
  love.style.opacity = 1;
  love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";

  setTimeout(function () {
    love.style.transform = "translate(-50%,-300%) scale(1) rotate(60deg)";
  }, 800);
  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    love.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
  }, 1200);
});

likeBtn.addEventListener("click", function () {
  love.style.opacity = 1;
  love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";

  // toggle icon
  if (likeBtn.classList.contains("ri-heart-line")) {
    likeBtn.classList.remove("ri-heart-line");
    likeBtn.classList.add("ri-heart-fill");
    likeBtn.style.color = "red";
  } else {
    likeBtn.classList.remove("ri-heart-fill");
    likeBtn.classList.add("ri-heart-line");
    likeBtn.style.color = "black";
  }

  setTimeout(function () {
    love.style.transform = "translate(-50%,-300%) scale(1) rotate(60deg)";
  }, 800);
  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    love.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
  }, 1200);
});
