var ss_btn_1 = document.querySelector(".ss_wrap_1 .ss_btn");
var ss_btn_2 = document.querySelector(".ss_wrap_2 .ss_btn");
var ss_btn_3 = document.querySelector(".ss_wrap_3 .ss_btn");

ss_btn_1.addEventListener("click", function () {
  this.classList.toggle("active");
});

ss_btn_2.addEventListener("click", function () {
  this.classList.toggle("active");
});

ss_btn_3.addEventListener("click", function () {
  this.classList.toggle("active");
});
