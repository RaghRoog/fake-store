
export default function CartItem(item, getCart) {

    function changeQuantity(isPlus) {
        let currentCart = JSON.parse(localStorage.getItem('cart'))
        for(let i = 0; i < currentCart.length; i++){
            if(currentCart[i].id === item.id){
                if(isPlus){
                    currentCart[i].quantity += 1
                }else{
                    if(currentCart[i].quantity > 1){
                        currentCart[i].quantity -= 1
                    }else{
                        currentCart.splice(i, 1)
                    }
                }
            }
        }
        getCart(currentCart)
    }

    return(
        <div key={item.id} className="cart-item">
            <div className="item-img">
                <img src={item.img} alt="item image" />
            </div>
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.price}</p>
            <div className="quantity-controller">
                <button onClick={()=>changeQuantity(false)}>-</button>
                <p className="quantity-disp">{item.quantity}</p>
                <button onClick={()=>changeQuantity(true)}>+</button>
            </div>
        </div>
    )
}