import { useState } from "react"

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
                    <div className="category">Smartphones</div>
                    <div className="category">Laptops</div>
                    <div className="category">Fragrances</div>
                    <div className="category">Skincare</div>
                    <div className="category">Groceries</div>
                    <div className="category">Home decoration</div>
                </div>
            </div>
            <p className="name">FakeStore</p>
            <div className="account">Account</div>
        </div>
    )
}