import { useState } from "react"
import { Link } from "react-router-dom"

export default function Nav() {

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
                    <Link to='/categories/smartphones'><div className="category">Smartphones</div></Link>
                    <Link to='/categories/laptops'><div className="category">Laptops</div></Link>
                    <Link to='/categories/fragrances'><div className="category">Fragrances</div></Link>
                    <Link to='/categories/skincare'><div className="category">Skincare</div></Link>
                    <Link to='/categories/groceries'><div className="category">Groceries</div></Link>
                    <Link to='/categories/home-decoration'><div className="category">Home decoration</div></Link>
                </div>
            </div>
            <Link to='/'><p className="name">FakeStore</p></Link>
            <div className="account">Account</div>
        </div>
    )
}