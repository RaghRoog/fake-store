import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Nav() {

    const navigate = useNavigate()

    let [catagoriesClicked, setCategoriesClicked] = useState(false)

    function changeDisplay(element){
        let elToDisplay = document.querySelector(`.${element}`)
        if(catagoriesClicked == false){
            elToDisplay.style.display = 'block'
            setCategoriesClicked(true)
        }else{
            elToDisplay.style.display = 'none'
            setCategoriesClicked(false)
        }
    }

    function setCategory(category){
        localStorage.setItem('category', category)
        navigate(`/categories/${category}`)
        window.location.reload()
    }

    return(
        <div className="nav">
            <div onClick={()=>changeDisplay('categories-container')} className="categories">Categories
                <div className="categories-container">
                    <div onClick={()=>setCategory('smartphones')} className="category">Smartphones</div>
                    <div onClick={()=>setCategory('laptops')} className="category">Laptops</div>
                    <div onClick={()=>setCategory('fragrances')} className="category">Fragrances</div>
                    <div onClick={()=>setCategory('skincare')} className="category">Skincare</div>
                    <div onClick={()=>setCategory('groceries')} className="category">Groceries</div>
                    <div onClick={()=>setCategory('home-decoration')} className="category">Home decoration</div>
                </div>
            </div>
            <Link to='/'><p className="name">FakeStore</p></Link>
            <div className="account-and-cart">
                <img src="/imgs/account.svg" alt="account" />
                <img src="/imgs/cart.svg" alt="cart" />
            </div>
        </div>
    )
}