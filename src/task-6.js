// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
}
// Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Задание
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// // Пиши код ниже этой строки
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки

// Тесты
// Объявлена переменная calculateTotalPrice.
// Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems).
// Для перебора массива orderedItems использован метод forEach.
// Коллбек для метода forEach это стрелочная функция.
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// Результаты
// Объявлена переменная `calculateTotalPrice`
// Переменной `calculateTotalPrice` присвоена стрелочная функция с параметром `(orderedItems)`
// Для перебора массива `orderedItems` использован метод `forEach`
// Коллбек для метода `forEach` это стрелочная функция
// Вызов функции `calculateTotalPrice([12, 85, 37, 4])` возвращает `138`
// Вызов функции `calculateTotalPrice([164, 48, 291])` возвращает `503`
// Вызов функции `calculateTotalPrice([412, 371, 94, 63, 176])` возвращает `1116`
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение. Результатом вызова функции calculateTotalPrice([9,13,24,22,13,22,5,14,23]) будет число 145