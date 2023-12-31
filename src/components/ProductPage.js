import { useEffect, useState } from "react"
import getData from "../functions/getData"
import displayCart from "../functions/displayCart"

export default function ProductPage({ getCart }) {

    let [product, setProduct] = useState({})
    let [imgs, setImgs] = useState([])
    let [quantity, setQuantity] = useState(1)

    useEffect(()=>{
        getData(`https://dummyjson.com/products/${localStorage.getItem('productid')}`)
         .then(res => {
            setProduct(res)
            setImgs(res.images)
         })
    }, [])

    //slides
    let [slideIndex, setSlideIndex] = useState(1)

    function indexUp() {
        if(slideIndex < imgs.length){
            setSlideIndex(slideIndex+1)
        }
    }

    function indexDown() {
        if(slideIndex > 1){
            setSlideIndex(slideIndex-1)
        }
    }

    function addToCart(id, name, price, img, quantity) {
        let cartItem = {
            id: id,
            name: name,
            price: price,
            img: img,
            quantity: quantity
        }
        let currentCart = JSON.parse(localStorage.getItem('cart'))
        if(currentCart.some(obj => obj.id == product.id)){
            for(let i = 0; i < currentCart.length; i++){
                if(currentCart[i].id === product.id){
                    currentCart[i].quantity += quantity
                }
            }
            getCart(currentCart)
        }else{
            currentCart.push(cartItem)
            getCart(currentCart)
        }
    }

    return(
        <div className="product-page">
            <div className="slides">
                <a className="prev" onClick={indexDown}>&#10094;</a>
                <div className="imgs-container">
                    {imgs.map((item, index) => (
                        <img className="slide" src={item} key={index} 
                        style={{ display: index === slideIndex - 1 ? 'block' : 'none' }}/>
                    ))}
                </div>
                <a className="next" onClick={indexUp}>&#10095;</a>
            </div>
            <div className="product-info">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-desc">{product.description}</p>
                <p className="price">Price: ${product.price}</p>
                <p className="stock" style={{color: product.stock > 1 ? 'rgb(174, 240, 41)' : 'red'}}>
                    {product.stock > 1 ? 'In stock' : 'Out of stock'}
                    </p>
                <div className="buttons-container">
                    <div className="btns-container">
                        <div className="top">
                            <button onClick={()=>{
                                if(quantity>1){
                                    setQuantity(quantity-=1)
                                }
                            }}>-</button>
                            <div>{quantity}</div>
                            <button onClick={()=>setQuantity(quantity+=1)}>+</button>
                        </div>
                        <div className="bottom">
                            <button>Buy now</button>
                            <button onClick={()=>{
                                displayCart(true)
                                addToCart(product.id, product.title, product.price, product.thumbnail, quantity)
                                }}>To cart</button>
                        </div>
                        <button onClick={()=>localStorage.removeItem('cart')}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}