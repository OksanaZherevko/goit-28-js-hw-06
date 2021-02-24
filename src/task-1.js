const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = {};

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// Тесты
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает true.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов child.hasOwnProperty('name') возвращает true.
// Обращение к child.name возвращает 'Jason'.
// Вызов child.hasOwnProperty('age') возвращает true.
// Обращение к child.age возвращает 27.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Используется метод Object.create().

// Результаты
// Объявлена переменная 'parent'
// Значение переменной `parent` это объект
// Объявлена переменная 'child'
// Значение переменной `child` это объект
// Вызов `parent.hasOwnProperty('surname')` возвращает `true`
// Вызов `parent.hasOwnProperty('heritage')` возвращает `true`
// Вызов `child.hasOwnProperty('name')` возвращает `true`
// Обращение к `child.name` возвращает 'Jason'
// Обращение к `child.age` возвращает 27
// Обращение к `child.surname` возвращает 'Moore'
// Обращение к `child.heritage` возвращает 'Irish'
// Вызов `child.hasOwnProperty('age')` возвращает `true`
// Вызов `child.hasOwnProperty('surname')` возвращает `false`
// Вызов `child.hasOwnProperty('heritage')` возвращает `false`
// Вызов `parent.isPrototypeOf(child)` возвращает `true`
// Используется метод `Object.create()`