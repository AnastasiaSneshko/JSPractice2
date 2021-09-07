'use strict';
// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
const inputNumber = +prompt ("Please enter your number");
const result = 0;
for(let i = 0; i < inputNumber; i++){
  result = result + (inputNumber - i);
}
alert(result); 

// 2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
const student = {
  name: 'Ivan',
  lastName: 'Ivanov',
  male: true,
  contact: '0769948671',
}

// 2.2 Создать объект университета, который содержит свойства, о факультете и кафедре.
const university = {
  faculty: 'mathematical',
  department: 'applied math',
}

// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
const studentInfo = {
  ...student,
  ...university,
};
// 2.4 Реализовать функцию вывода на экран всю информацию о студенте
function showInformation(){
  console.log(`${student.name} ${student.lastName} is student of ${university.faculty} faculty ${university.department} department`)
}

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
const array = [];
for(let i = 0; i < 25; i++){
    array.push(Math.round(Math.random() * 20));
}
console.log(array);

// 3.2 Вывести элементы с четными индексами
array.forEach((value, index) => {
  if(index % 2 === 0){
    console.log(value);
  }
});

// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
const addNumberArray = [];
for(let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0){
    addNumberArray.push(array[i]);
  }
}
console.log(addNumberArray);

// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
array.forEach((value, index) => {
  if(value === 0){
    console.log(index);
  }
});

// 3.5 Подсчитать количество нулевых элементов
const numberOFValues = array.filter(function(value){
  return value === 0;
}).length;
console.log(numberOFValues)


// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
class Book {
  constructor(author, name, year, publishing){
    this.author = author;
    this.nameOfBook = name;
    this.yearPublishing = year;
    this.publishingHouse = publishing;
  }
}

const book = new Book('Марк Мэнсон', 'Тонкое искусство', 2017, 'Альпина Паблишер')

// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class Ebook {
  constructor(author, name, year, publishing, format, isbn){
    this.author = author;
    this.nameOfBook = name;
    this.yearPublishing = year;
    this.publishingHouse = publishing;
    this.format = format;
    this.serialNumber = isbn;
  }
}

const eBook = new Ebook('Макс Фрай', 'Сновидения Ехо', 2017, 'АСТ', 'fb2', '978-5-17-982967-6')


// 5. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n —
// это целое число, которая функция принимает в качестве параметра, с
// такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
const fizzBuzzNumber = function(num){
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 ===0){
      console.log('fizzbuzz');
    }
    else if(i % 3 === 0){
      console.log('fizz');
    }
    else if(i % 5 === 0){
      console.log('buzz');
    }
    else{
      console.log(i);
    }
  }
}