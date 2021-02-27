function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
firstArray.forEach(element => {
if (secondArray.includes(element)) {
      commonElements.push(element);
    }
});

  
  return commonElements;
  // Пиши код выше этой строки
}

// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Пиши код выше этой строки
// }

// Тесты
// Объявлена функция getCommonElements(firstArray, secondArray).
// Для перебора параметра (массива) использован метод forEach.
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// Результаты
// Объявлена функция `getCommonElements(firstArray, secondArray)`
// Для перебора массива `firstArray` использован метод `forEach`
// getCommonElements([1, 2, 3], [2, 4])` возвращает `[2]
// Вызов функции `getCommonElements([1, 2, 3], [2, 1, 17, 19])` возвращает `[1, 2]`
// Вызов функции `getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])` возвращает `[12, 27, 3]`
// Вызов функции `getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])` возвращает `[10, 30, 40]`
// Вызов функции `getCommonElements([1, 2, 3], [10, 20, 30])` возвращает `[]`
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение. Результатом вызова функции getCommonElements([24,13,10,6,24,8,12,15], [23,13,23,7,14,6,11,14]) будет [13,6]