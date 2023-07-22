
export default function CategoryPage({ categ }) {

    

    return(
        <div className="category-page">
            <h1 className="cat-name">{categ}</h1>
            <div className="filters-container"></div>
            <div className="products-container"></div>
        </div>
    )
}