function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

 orderedItems.forEach(element => (totalPrice += element));

  // Пиши код выше этой строки
  return totalPrice;
}


// Задание
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// Тесты
// Объявлена функция calculateTotalPrice(orderedItems).
// Для перебора массива orderedItems использован метод forEach.
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// Результаты
// Объявлена функция `calculateTotalPrice(orderedItems)`
// Для перебора массива `orderedItems` использован метод `forEach`
// Вызов функции `calculateTotalPrice([12, 85, 37, 4])` возвращает `138`
// Вызов функции `calculateTotalPrice([164, 48, 291])` возвращает `503`
// Вызов функции `calculateTotalPrice([412, 371, 94, 63, 176])` возвращает `1116`
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение. Результатом вызова функции calculateTotalPrice([23,6,9,19,16,13,6,18,13,24,9,11,10,18,23,12,15]) будет число 245