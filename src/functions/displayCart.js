
export default function displayCart(isToCartBtn) {
    let cart = document.querySelector('.cart')
    let cartStyleDisplay = window.getComputedStyle(cart).getPropertyValue('display')
    if(isToCartBtn){
        cart.style.display = 'block'
    }else if(!isToCartBtn && cartStyleDisplay == 'block'){
        cart.style.display = 'none'
    }else{
        cart.style.display = 'block'
    }
}