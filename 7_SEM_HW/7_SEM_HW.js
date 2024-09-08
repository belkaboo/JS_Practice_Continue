const prodData = JSON.parse(data);
const itemCOntentEl = document.querySelector('.items-content');

prodData.forEach(currentItem => {
    itemCOntentEl.insertAdjacentHTML('beforeend',
        `
        <div class="item"><img class="item-img" src=${currentItem.img} alt="photo">
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
