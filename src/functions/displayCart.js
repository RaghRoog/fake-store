
export default function displayCart(isToCartBtn) {
    let cart = document.querySelector('.cart')
    let cartStyleDisplay = window.getComputedStyle(cart).getPropertyValue('display')
    if(isToCartBtn){
        cart.style.display = 'flex'
    }else if(!isToCartBtn && cartStyleDisplay == 'flex'){
        cart.style.display = 'none'
    }else{
        cart.style.display = 'flex'
    }
}