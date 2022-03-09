const btnTop = document.querySelector(".btn_top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 500) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

function toTop() {
  document.documentElement.scrollTop = 0;
}

btnTop.addEventListener("click", toTop);
