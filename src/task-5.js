// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Пиши код выше этой строки

// Тесты
// Объявлена переменная calculateTotalPrice.
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
// В функции использован неявный возврат.
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice('3, 400) возвращает 1200.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// Результаты
// Объявлена переменная `calculateTotalPrice`
// Переменной `calculateTotalPrice` присвоена стрелочная функция с параметрами `(quantity, pricePerItem)`
// В функции `calculateTotalPrice` использован неявный возврат
// Вызов `calculateTotalPrice(5, 100)` возвращает `500`
// Вызов `calculateTotalPrice(8, 60)` возвращает `480`
// Вызов `calculateTotalPrice(3, 400)` возвращает `1200`
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение. Результатом вызова функции calculateTotalPrice(18, 12) будет 216