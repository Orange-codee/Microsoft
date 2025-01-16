//當滑鼠點擊所有Microsoft,觸發事件-為prodcut-menu加上active class
const productMenu = document.querySelector(".product-menu");
const product = document.querySelector(".product");
product.addEventListener("click", () => {
  productMenu.classList.toggle("active");
});

//當滑鼠滑出productMenu區塊,觸發事件-為prodcut-menu取消active class
productMenu.addEventListener("mouseleave", () => {
  productMenu.classList.remove("active");
});

//當滑鼠點擊hamBtn,觸發事件-為collapse-menu加上active class
const hamBtn = document.querySelector(".ham-btn");
const collapseMenu = document.querySelector(".collapse-menu");
hamBtn.addEventListener("click", () => {
  collapseMenu.classList.toggle("active");
});
//當不在menu上點擊 且 用戶所點擊的元素不是btn本身 時,移除active class
document.addEventListener("click", (e) => {
  if (!collapseMenu.contains(e.target) && e.target !== hamBtn) {
    collapseMenu.classList.remove("active");
  }
});

const miniBtn = document.querySelectorAll(".mini-btn");
for (let i = 0; i < miniBtn.length; i++) {
  miniBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
}