import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import getData from '../functions/getData'

export default function CategoryPage() {

    let [products, setProducts] = useState([])

    useEffect(() => {
        getData(`https://dummyjson.com/products/category/${localStorage.getItem('category')}`)
         .then(result => {
            setProducts(result.products)
            console.log(result)
        })
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
            <div className="products-container">
                {products.map(item => ProductCard(item))}
            </div>
        </div>
    )
}