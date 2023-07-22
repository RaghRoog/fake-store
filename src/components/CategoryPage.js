import { useEffect } from "react"

export default function CategoryPage({ categ }) {

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categ}`)
        .then(res => res.json())
        .then(console.log);
    }, [])

    return(
        <div className="category-page">
            <h1 className="cat-name">{categ}</h1>
            <div className="filters-container"></div>
            <div className="products-container"></div>
        </div>
    )
}