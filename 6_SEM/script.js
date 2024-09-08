const productsData = JSON.parse(jsonData);
const cartBoxEl = document.querySelector('.cart-box');
const totalPriceEL = document.querySelector('.color__total');
let totalPrice = 0;

//page render
productsData.forEach(item => {

    totalPrice += item.price;
    totalPriceEL.textContent = `$${totalPrice}`;

    // new item
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');


    //image
    const itemImgEl = document.createElement('img');
    itemImgEl.classList.add('item__image');
    itemImgEl.src = item.image;

    const itemContenDivEl = document.createElement('div');
    itemContenDivEl.classList.add('item__content');


    //delete items
    const deleteEl = document.createElement('div');
    deleteEl.classList.add('icon__close');
    const deleteImg = document.createElement('img');
    deleteImg.classList.add('icon');
    deleteImg.src = 'img/Vector_close.svg';

    //item content
    const h3Heading = document.createElement('h3');
    h3Heading.classList.add('item__heading');
    h3Heading.textContent = item.name;

    const itemPrice = document.createElement('p');
    const itemPriceCount = document.createElement('span');
    itemPrice.classList.add('item__price');
    itemPriceCount.classList.add('color__price');
    itemPrice.textContent = 'Price: ';
    itemPriceCount.textContent = `$${item.price}`;

    const itemColor = document.createElement('p');
    itemColor.classList.add('item__color');
    itemColor.textContent = `Color: ${item.color}`;

    const itemSize = document.createElement('p');
    itemSize.classList.add('item__size');
    itemSize.textContent = `Size: ${item.size}`;

    const itemQuantity = document.createElement('div');
    const quantityInput = document.createElement('input');
    itemQuantity.classList.add('item__quantity');
    itemQuantity.textContent = 'Quantity: ';
    quantityInput.classList.add('item__input');
    quantityInput.type = 'text';
    quantityInput.setAttribute('value', 1);



    //append
    cartBoxEl.appendChild(itemEl);
    itemEl.appendChild(itemImgEl);
    itemEl.appendChild(itemContenDivEl);
    itemContenDivEl.appendChild(h3Heading);
    itemContenDivEl.appendChild(itemPrice);
    itemPrice.appendChild(itemPriceCount);
    itemContenDivEl.appendChild(itemColor);
    itemContenDivEl.appendChild(itemSize);
    itemContenDivEl.appendChild(itemQuantity);
    itemQuantity.appendChild(quantityInput);
    itemEl.appendChild(deleteEl);
    deleteEl.appendChild(deleteImg);




});

// добавлять класс к item класс с номером id(добавить в data id), обработчик на крестик => удалять 
