const productData = JSON.parse(jsonData);
const categoriesData = JSON.parse(categories);
const productBox = document.querySelector('.product-box');
const UlEls = document.querySelector('.categories__links');


for (const key in categoriesData) {
    const liEl = document.createElement('li');
    liEl.textContent = categoriesData[key];
    UlEls.appendChild(liEl);

}

for (const key in productData) {

    const productEl = document.createElement('div');
    productEl.classList.add('product__item');

    // title

    const productNameEl = document.createElement('p');
    productNameEl.classList.add('.product__title');
    productNameEl.textContent = productData[key].title;

    //image

    const productImgEl = document.createElement('img');
    productImgEl.classList.add('product__image');
    productImgEl.src = productData[key].image;

    //description

    // const productDesEl = document.createElement('p');
    // productDesEl.classList.add('product__desc');
    // productDesEl.textContent = productData[key].description;

    //price

    const productPriceEl = document.createElement('h3');
    productPriceEl.classList.add('product__price');
    productPriceEl.textContent = productData[key].price + ' $';


    //add to cart
    const cartBtn = document.createElement('button');
    cartBtn.classList.add('button__addcart');
    cartBtn.textContent = 'Add to cart';

    //rate todo
    const rateEl = document.createElement('p');
    rateEl.classList.add('rate');
    rateEl.textContent = productData[key].rating.rate;

    //votes (count) todo
    const votesCountEL = document.createElement('p');
    votesCountEL.classList.add('votes');
    votesCountEL.textContent = productData[key].rating.count;


    productBox.appendChild(productEl);
    productEl.appendChild(productImgEl);
    productEl.appendChild(productPriceEl);
    productEl.appendChild(productNameEl);
    productEl.appendChild(cartBtn);
    //productEl.appendChild(productDesEl);        //description

};



//categories

function renderCategories(category) {
    if (productData[key].category = category) {
        // вывод товаров с данной категрией
        //
    }
}

function renderAllcategories() {
    //вывод всех товаров ()
}


