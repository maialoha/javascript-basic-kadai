// 変数numにランダムな整数を代入する
let num = Math.floor(Math.random() * 30);//1以上の正の数を代入

// 変数numの値を出力する（確認用）
console.log(num);

// &&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う
if (num % 3 === 0 && num % 5 === 0 ) {
    console.log('3と5の倍数です');
}
// 変数numの倍数が3であれば、「3の倍数です」という文字列を出力する
if (num % 3 === 0) {
  console.log('3の倍数です');
}
// 変数numの倍数が5であれば、「5の倍数です」という文字列を出力する
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
// それ以外のときは、numの値を出力する
else {
  console.log('num');
}