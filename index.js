const btnScroll = document.querySelector(".btn-scroll");
document.addEventListener("scroll", () => {
  const scrolled = Math.floor(document.documentElement.scrollTop);
  console.log(scrolled);
  if (scrolled > 200) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
});

const onScroll = () => {
  document.documentElement.scrollTop = 0;
};
btnScroll.addEventListener("click", onScroll);
