// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// Тесты
// Объявлена переменная calculateTotalPrice.
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice(3, 400) возвращает 1200.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// Результаты
// Объявлена переменная `calculateTotalPrice`
// Переменной `calculateTotalPrice` присвоена стрелочная функция с параметрами `(quantity, pricePerItem)`
// Вызов `calculateTotalPrice(5, 100)` возвращает `500`
// Вызов `calculateTotalPrice(8, 60)` возвращает `480`
// Вызов `calculateTotalPrice(3, 400)` возвращает `1200`
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение. Результатом вызова функции calculateTotalPrice(8, 8) будет 64