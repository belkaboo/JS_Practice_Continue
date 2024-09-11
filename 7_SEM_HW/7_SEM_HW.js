
const prodData = JSON.parse(data);
const itemCOntentEl = document.querySelector('.items-content');
document.addEventListener("DOMContentLoaded", renderProdItems);


function renderProdItems() {
    prodData.forEach(currentItem => {
        itemCOntentEl.insertAdjacentHTML('beforeend',
            `
        <div class="item" data-id="${currentItem.id}">
            <img class="item-img" src=${currentItem.img} alt="photo">
            <h4 class="subject">${currentItem.title}</h4>
            <p class="desc">${currentItem.description}</p>
            <p class="price">$${(currentItem.price).toFixed(2)}</p>
            <div class="add-to-cart-btn">
                <img src="img/cart.svg" alt="action">
                    Add to Cart
            </div>
        </div>
        `
        )
    });
}

/// корзина
const cartSectionEl = document.querySelector('.cart');
const cartBoxEl = cartSectionEl.querySelector('.cart-box');

let cartItems = [];

document.body.addEventListener('click', e => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productToAdd = {
            id: e.target.parentElement.getAttribute('data-id'),
            title: e.target.parentElement.querySelector('.subject').textContent,
            img: e.target.parentElement.querySelector('.item-img').src.slice(-16), //костыль, чтоб убрать абсолютный путь
            price: parseFloat(e.target.parentElement.querySelector('.price').textContent.replace('$', '')),
            quantity: 1,
        };

        const itemExist = cartItems.find(item => item.id === productToAdd.id);
        (!itemExist) ? cartItems.push(productToAdd) : itemExist.quantity++;

        cartBoxEl.innerHTML = '';
        renderCartItems(cartItems);
    }

    // console.log(cartItems); // для проверки правильно ли формирует

    if (e.target.classList.contains('cart-icon')) {
        const idToDel = e.target.parentElement.parentElement.getAttribute('data-id');
        deleteCartItems(cartItems, idToDel);
        cartBoxEl.innerHTML = '';
        renderCartItems(cartItems)
    }
});


function renderCartItems(items) {
    cartItems.length > 0 ? cartSectionEl.style.display = 'block' : cartSectionEl.style.display = 'none';

    items.forEach(currentItem => {
        cartBoxEl.insertAdjacentHTML('beforeend',
            `
            <div class="cart__item" data-id="${currentItem.id}">
                <img src=${currentItem.img} class="cart-item__image" alt="no image">
                <div class="cart-item__content">
                    <h3 class="cart-item__heading">${currentItem.title}</h3>
                    <p class="cart-item__price">Price: <span class="cart-color__price">$${currentItem.price}</span></p>
                    <p class="cart-item__color">Color: Red</p>
                    <p class="cart-item__size">Size: Xl</p>
                    <div class="cart-item__quantity">Quantity: <input class="cart-item__input" type="text" value="${currentItem.quantity}">
                    </div>
                </div>
                <div class="cart-icon__close">
                    <img class="cart-icon" src="img/Vector_close.svg" alt="">
                </div>

            </div>

            `
        )
    });
}

function deleteCartItems(items, id) {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
}


