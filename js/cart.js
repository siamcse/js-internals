const $ = (id) => document.getElementById(id);
const getValueById = (id) =>{
    const inputField = $(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () =>{
    const product = getValueById('product-field');
    const quantity = getValueById('quantity-field');
    // localStorage.setItem(product,quantity);
    saveItemToLS(product,quantity);
    showCartToDisplay(product,quantity);
}
//get shopping cart
const getShoppingCartFromLS = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}
//save item to local storage
const saveItemToLS = (product,quantity) =>{
    const cart = getShoppingCartFromLS();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const showCartToDisplay = (product,quantity) =>{
    const cartContainer = $('cart-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    cartContainer.appendChild(li);
}
const displaySavedCart = () =>{
    const cart = getShoppingCartFromLS();
    for(const product in cart){
        const quantity = cart[product];
        showCartToDisplay(product,quantity);
    }
}
displaySavedCart();