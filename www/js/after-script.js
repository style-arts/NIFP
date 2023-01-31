/**
 * key visual の高さを取得する
 */
const calcKeyVisualHeight = () => {
  const element = document.getElementsByClassName("kv-apply-area-wrapper")[0];
  const kv = document.getElementsByClassName("kv-background")[0];

  kv.style.height =
    window.screen.height - element.getBoundingClientRect().height + "px";
};

// 実行する関数
const main = () => {
  // スマホの時に実行する関数
  if (window.screen.width <= 520) {
    calcKeyVisualHeight();
  }
};

main();
