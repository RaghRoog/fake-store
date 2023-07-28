import { Link } from "react-router-dom";

export default function ProductCard(item) {

    let setProductID = () => {
        localStorage.setItem('productid', item.id)
    }

    return(
        <Link onClick={setProductID} to={`/product/${item.id}`} key={item.id}>
            <div className="product-card">
                <div className="img-container">
                    <img src={item.thumbnail} alt="product image" />
                </div>
                <div className="product-info">
                    <div className="producer">{item.brand}</div>
                    <div className="name">{item.title}</div>
                    <div className="price">${item.price}</div>
                </div>
            </div>
        </Link>
    )
}