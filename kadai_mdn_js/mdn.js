const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので+1する
const day = today.getDate();

// 月と日を2桁に整形（例：5 → 05）
const formattedMonth = String(month).padStart(2, '0');
const formattedDay = String(day).padStart(2, '0');

console.log(`${year}年${formattedMonth}月${formattedDay}日`);
