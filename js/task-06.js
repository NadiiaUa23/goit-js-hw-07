//посилання на поле елементів
const input = document.querySelector('input');

//посилання кнопка создания елемента 
const btnCreate = document.querySelector('[data-create]');

//посилання кнопка удалить все 
const btnDestroy = document.querySelector('[data-destroy]');

//посилання на бокс по ид
const boxesContainer  = document.getElementById('boxes');
//дабавлю переменную
let pixel = 30;

//add клики подіі
btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroyClick);


//ф-ции які вікликаються на клік
function onBtnCreateClick (){
  //Після натискання користувачем на кнопку Create 
//треба провалідувати значення в input,
const amount =  input.value;

// // воно має бути в межах від 1 до 100 включно
if (amount < 1 || amount > 100) {
  alert('Будь ласка, введіть число в межах від 1 до 100 включно! Дякую!');
  return;
}

//будет функцией для нових елементов
createBoxes(amount);
//удаляем содержимое 
input.value = '';
pixel = pixel + 10; 
};



function onBtnDestroyClick() {
  // destroyBoxes(), яка очищає вміст div#boxes, 
  //у такий спосіб видаляючи всі створені елементи.
  destroyBoxes();
};

//Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів,
// яка вказана в input. 
//Після повторного кліку на кнопку Create попередні квадрати повністю прибираються 
//і замість них додаються нові у кількості, що вказана в input.
//Значення input очищається
//Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
//Перший квадрат у div#boxes має розміри 30px на 30px, 
//а кожен наступний на 10px вищий і ширший від попереднього

function createBoxes (amount){
const boxes = [];

//перебираю щоб змінювались параметри та колір
for (let i = 0; i < amount; i++){

  //создаем новий див в боксес  
  const box = document.createElement('div');
// добавляем css w  and h

box.style.width = pixel+'px';
box.style.height = pixel+'px';
//добавляем цвета c функцией рамдомного цвета 
box.style.backgroundColor = getRandomHexColor();
// создали див,размер, цвета и каждий див добавляем в бокс
boxes.push(box);
// и єто все [] в контейнер дочірнім елементом
boxesContainer.append(...boxes);

}
};
// кнопка удаляет все из html
function  destroyBoxes() {
  boxesContainer.innerHTML = '';
};
// рандомний цвет 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




