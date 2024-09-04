
const urlApi = 'https://yesno.wtf/api'
const imgEl = document.querySelector('.image');
const pEl = document.querySelector('p');



async function getDataFromApi(url) {
    let response = await fetch(url);
    let data = await response.json();
    pEl.textContent = data.answer;
    imgEl.src = data.image;
}

getDataFromApi(urlApi);











