let allBtn = document.querySelectorAll("button");

allBtn.forEach((elm) => {
  elm.addEventListener("click", () => {
    if (elm.innerText == "Add Friend") {
      elm.innerText = "Remove Friend";
      elm.style.backgroundColor = "red"
    } else {
      elm.innerText = "Add Friend";
      elm.style.backgroundColor = "#3d63ff";
    }
  });
});
