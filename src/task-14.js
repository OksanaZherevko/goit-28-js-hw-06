class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }
  
  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// Задание
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// class Car {
//   model;
//   price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getModel() {
//     return this.model;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }

//   getPrice() {
//     return this.price;
//   }

//   setPrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// Тесты
// Объявлен класс Car.
// В классе Car объявлено приватное свойство brand.
// В классе Car объявлено приватное свойство model.
// В классе Car объявлено приватное свойство price.
// Конструктор класса принимает объект со свойствами brand, model и price.
// В классе Car объявлен геттер brand.
// В классе Car объявлен сеттер brand.
// В классе Car объявлен геттер model.
// В классе Car объявлен сеттер model.
// В классе Car объявлен геттер price.
// В классе Car объявлен сеттер price.

// Результаты
// Объявлен класс `Car`
// В классе `Car` объявлено приватное свойство `brand`
// В классе `Car` объявлено приватное свойство `model`
// В классе `Car` объявлено приватное свойство `price`
// Конструктор класса принимает объект со свойствами `brand`, `model` и `price`
// В классе `Car` объявлен геттер `brand`
// В классе `Car` объявлен cеттер `brand`
// В классе `Car` объявлен геттер `model`
// В классе `Car` объявлен cеттер `model`
// В классе `Car` объявлен геттер `price`
// В классе `Car` объявлен cеттер `price`

