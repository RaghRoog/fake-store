
export default function ProductCard(item) {

    return(
        <div className="product-card" key={item.id}>
            <div className="img-container">
                <img src={item.thumbnail} alt="product image" />
            </div>
            <div className="product-info">
                <div className="producer">{item.brand}</div>
                <div className="name">{item.title}</div>
                <div className="price">${item.price}</div>
            </div>
        </div>
    )
}