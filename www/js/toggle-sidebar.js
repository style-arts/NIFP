/**
 * key visual の高さを取得する
 */
const keyVisual = document.getElementById("keyvisual");
const sideBar = document.getElementById("sidebar");

setInterval(function () {
  const clientRect = keyVisual.getBoundingClientRect();

  // Key Visual が画面外になったら、サイドバーを表示する
  clientRect.bottom > 0
    ? sideBar.classList.remove("is-show")
    : sideBar.classList.add("is-show");
}, 100);
