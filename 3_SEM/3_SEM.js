'use strict';

/*
В html создать кнопку button
После загрузки страницы вывести в консоль текст “страница загрузилась”
Добавить событие onclick которое выводит в консоль текст “событие onclick”
Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
*/

const btnEl = document.querySelector('.button-click');
const btnClearEl = document.querySelector('.button-clear');

window.onload = () => {
    console.log('loaDEAD');
}

window.addEventListener('load', (e) => {
    console.log('loaded');
});


btnEl.onclick = () => {
    console.log('событие onclick');
}
btnClearEl.onclick = () => {
    console.clear();
}

"sff".toLowerCase;

btnEl.addEventListener('click', (e) => {
    console.log('событие addEventListenerevent');
});


/*
Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
*/

const buttonEls = document.querySelectorAll('.button');

buttonEls.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
    });
});



const counetButtonEl = document.querySelector('.button-counter');

let counter = 0;
counetButtonEl.addEventListener('click', function (e) {
    console.log(++counter);
});


const textBtnEl = document.querySelector('.button-text');

textBtnEl.addEventListener('click', (e) => {
    textBtnEl.textContent = 'Вы нажали на эту кнопку'
}, { once: true });



/*
Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
Создать вторую кнопку, которая будет удалять созданный заголовок h1
Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , 
как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
*/
const btnDivEl = document.querySelector('.buttons-h1');
const buttonH1AddEl = document.querySelector('.button-h1-add');
const buttonH1DelEl = document.querySelector('.button-h1-del');
const buttonMouseoverEl = document.querySelector('.button-mouseover');

const h1El = document.createElement('h1');
h1El.textContent = 'Новый заголовок';

buttonH1AddEl.addEventListener('click', (e) => {
    btnDivEl.appendChild(h1El);
});

buttonH1DelEl.addEventListener('click', function (e) {
    btnDivEl.removeChild(h1El);
});

buttonMouseoverEl.addEventListener('mouseover', function (e) {
    console.log('вы навели на данную кнопку');
});
buttonMouseoverEl.addEventListener('mouseout', function (e) {
    console.log('Наведения на кнопку больше не навели на данную кнопку');
});


/*
Создать в html список состоящий из 3-х произвольных элементов li
Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
Создать кнопку, которая будет удалять первый элемент из созданного списка
Создать кнопку, при клике на которую ей добавляется класс “click”
*/

//todo


const listEls = document.querySelector('ul');
const newListEl = document.createElement('li');
const buttonAddListEl = document.querySelector('.button-list-add');
const buttonRemoveListEl = document.querySelector('.button-list-del');
newListEl.textContent = 'новый элемент списка';

function addListElement() {
    const newListEl = document.createElement('li');
    newListEl.textContent = 'новый элемент списка';
    listEls.appendChild(newListEl);
}

function removeFirstListElement() {
    listEls.removeChild(listEls.childNodes[0]);
}

buttonAddListEl.addEventListener('click', addListElement);
buttonRemoveListEl.addEventListener('click', removeFirstListElement);


const buttonAddclassEl = document.querySelector('.button-add-class');
buttonAddclassEl.addEventListener('click', function (e) {
    console.log(buttonAddclassEl.classList);
    buttonAddclassEl.classList.add('click');
    console.log(buttonAddclassEl.classList);
});

/*
Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

const divContentEl = document.querySelector('.content');
const sendButtonEL = document.createElement('button');
divContentEl.appendChild(sendButtonEL);
sendButtonEL.textContent = 'Отправить';



sendButtonEL.addEventListener('click', function (e) {
    sendButtonEL.textContent = 'Текст отправлен'
});




