/*
<div class="block">

</div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute)
*/

const targetDiv = document.querySelector('.block');
const newDiv = document.createElement('div');
newDiv.classList.add('item');
newDiv.style.color = 'blue';
newDiv.textContent = 'Элемент внутри';
newDiv.style.border = '1px solid black';
newDiv.style.padding = '16px';

targetDiv.appendChild(newDiv);

newDiv.setAttribute('class', 'item_1');

/*
Дан код
<div class="elem">
  <img src="photo.png" alt="photo">
  <div class="content">
    <h2 class="heading">Lorem, ipsum dolor.</h2>
    <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
  </div>
</div>

Необходимо с помощью querySelector найти параграф с классом text
Вывести в консоль соседний элемент h2
Вывести в консоль родительский элемент content
Вывести в консоль картинку
Вывести в консоль родительский элемент elem
*/

const pEl = document.querySelector('.text');
console.log(pEl.previousElementSibling);
console.log(pEl.parentElement);
console.log(pEl.parentElement.previousElementSibling);
console.log(pEl.parentElement.parentNode);


/*
<div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
*/

let subtitleEl = document.querySelector('.subtitle');
let itemEl = document.querySelector('.item');


while (subtitleEl.parentElement) {
  subtitleEl = subtitleEl.parentElement;
  console.log(subtitleEl);
}




/*
<form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, 
а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным
*/

const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('.form__input');
const buttonEl = formEl.querySelector('.btn');
const h2El = document.createElement('h2');
h2El.textContent = 'вы не заполнили поле ввода';

buttonEl.onclick = function () {
  if (!inputEl.value) {
    formEl.appendChild(h2El);
    inputEl.style.border = '3px solid red';
  }
}


/*
Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

const contentEl = document.querySelector('.contentnew');
const newBtnEl = document.createElement('button');
contentEl.appendChild(newBtnEl);
newBtnEl.textContent = 'Отправить';


newBtnEl.addEventListener('click', () => {
  newBtnEl.textContent = 'Отправлено';
});
