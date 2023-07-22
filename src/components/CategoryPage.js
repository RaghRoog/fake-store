import { useEffect, useState } from "react"

export default function CategoryPage() {

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${localStorage.getItem('category')}`)
        .then(res => res.json())
        .then(console.log);
        pageHeading()
    }, [])

    let [category, setCategory] = useState('')

    function pageHeading() {
        let category = localStorage.getItem('category')
        switch(category){
            case 'smartphones':
                setCategory('Smartphones')
                break
            case 'laptops':
                setCategory('Laptops')
                break
            case 'fragrances':
                setCategory('Fragrances')
                break
            case 'skincare':
                setCategory('Skincare')
                break
            case 'groceries':
                setCategory('Groceries')
                break
            case 'home-decoration':
                setCategory('Home decoration')
                break
        }
    }

    return(
        <div className="category-page">
            <h1 className="cat-name">{category}</h1>
            <div className="filters-container"></div>
            <div className="products-container"></div>
        </div>
    )
}