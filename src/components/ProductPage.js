import { useEffect, useState } from "react"
import getData from "../functions/getData"

export default function ProductPage() {

    let [product, setProduct] = useState({})
    let [imgs, setImgs] = useState([])

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

    return(
        <div className="product-page">
            <div className="product-info">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-desc">{product.description}</p>
                <p className="price">${product.price}</p>
                <div className="buttons-container">
                    <div className="btns-container">
                        <div className="top">
                            <button>-</button>
                            <div>1</div>
                            <button>+</button>
                        </div>
                        <div className="bottom">
                            <button>Buy now</button>
                            <button>To cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgs-container">
                {imgs.map((item, index) => (
                    <img className="slide" src={item} key={index} 
                     style={{ display: index === slideIndex - 1 ? 'block' : 'none' }}/>
                ))}
                <a className="next" onClick={indexUp}>&#10095;</a>
                <a className="prev" onClick={indexDown}>&#10094;</a>
            </div>
        </div>
    )
}