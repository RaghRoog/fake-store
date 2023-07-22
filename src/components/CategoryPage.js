import { useEffect } from "react"

export default function CategoryPage() {

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${localStorage.getItem('category')}`)
        .then(res => res.json())
        .then(console.log);
    }, [])

    return(
        <div className="category-page">
            <h1 className="cat-name">{localStorage.getItem('category')}</h1>
            <div className="filters-container"></div>
            <div className="products-container"></div>
        </div>
    )
}