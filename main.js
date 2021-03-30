// spanのDOM要素を取得している
const output = document.getElementById("output");

// 画面に表示する数字の値を持っている変数
const number = 0;

// 画面が表示された時に、数字は初期値としての0が表示されるのを確認できる
output.textContent = number;

// ボタンのDOM要素を取得し、クリック時の処理を組み込んでいる
// 第二引数にはクリックされた時の処理を無名関数として渡している
document.getElementById('doneButton').addEventListener("click" , () => {
      // 表示する数字を一つ増やす
      number++;
      // その数字を表示させている
      output.textContent = number;
  });