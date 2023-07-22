import { useState } from "react"
import { Link } from "react-router-dom"

export default function Nav({ getCategory }) {

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

    return(
        <div className="nav">
            <div onClick={()=>changeDisplay('categories-container')} className="categories">Categories
                <div className="categories-container">
                    <Link to='/categories/smartphones'>
                        <div onClick={()=>getCategory('smartphones')} className="category">Smartphones</div>
                    </Link>
                    <Link to='/categories/laptops'>
                        <div onClick={()=>getCategory('laptops')} className="category">Laptops</div>
                    </Link>
                    <Link to='/categories/fragrances'>
                        <div onClick={()=>getCategory('fragrances')} className="category">Fragrances</div>
                    </Link>
                    <Link to='/categories/skincare'>
                        <div onClick={()=>getCategory('skincare')} className="category">Skincare</div>
                    </Link>
                    <Link to='/categories/groceries'>
                        <div onClick={()=>getCategory('groceries')} className="category">Groceries</div>
                    </Link>
                    <Link to='/categories/home-decoration'>
                        <div onClick={()=>getCategory('home decoration')} className="category">Home decoration</div>
                    </Link>
                </div>
            </div>
            <Link to='/'><p className="name">FakeStore</p></Link>
            <div className="account">Account</div>
        </div>
    )
}