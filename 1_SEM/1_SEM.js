/*
1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
*/

const p1 = document.querySelector('#block p');

console.log(p1);

const p2 = document.querySelectorAll('.www');

console.log(p2);

/*
Дан тег <a class="link" href="#">link text html</a>
Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/ 
Дан тег <img class="photo" src="" alt=""> 
Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/


const link_1 = document.querySelector('.link');
console.dir(link_1); // список атрибутов


link_1.textContent = 'link text js';
console.log(link_1);

link_1.href = 'https://developer.mozilla.org/ru/';
console.log(link_1);

const img = document.querySelector('.photo');
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTK_PQO75EfPVctd4TnuKVkdU0Urbw3PbHyw&s://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723161600&semt=ais_hybrid';

/*
Дан тег <div class="content"></div> 
Создайте новый элемент p
Добавьте в него текст “Новый текстовый элемент”
Добавьте созданный элемент внутри <div class="content"></div>
Удалите добавленный узел 
*/

const div = document.querySelector('.content');
const newP = document.createElement('p');
newP.textContent = 'Новый текстовый элемент';
div.appendChild(newP);
// div.remove();
// div.removeChild(newP);
newP.remove();

/*
Создать элемент button, добавить в блок <div class="content"></div>
При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
*/
const buttonClick = document.createElement('button');
buttonClick.textContent = 'Отправить';
div.appendChild(buttonClick);
let count = 0;

// buttonClick.onclick = () => {
//     count++;
//     console.log(count);
// }

buttonClick.addEventListener('click', () => {
    count++;
    console.log(count);
});

/*
Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

const buttonSend = document.createElement('button');
buttonSend.textContent = 'Отправть';
div.appendChild(buttonSend);

buttonSend.addEventListener('click', () => {
    buttonSend.textContent = 'Отправлено'
});






