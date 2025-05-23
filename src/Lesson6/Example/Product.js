import {useState} from "react";
import ProductItem from "./ProductItem";

function Product() {
    let [products, setProducts] = useState([
        {id: 1, name: 'Iphone', votes: 0,},
        {id: 2, name: 'SamSung', votes: 0,},
        {id: 3, name: 'ViVo', votes: 0,},
        {id: 4, name: 'Oppo', votes: 0,},
        {id: 5, name: 'LG', votes: 0,}
    ])
    const handleVote = (id) => {
        setProducts(
            (prev) => prev.map(
                (product) => product.id === id ? {...product, votes: product.votes + 1} : product
            ),
        );
    }
    return (
        <div>
            <h1>Bình chọn sản phẩm</h1>
            <ProductItem onVote={handleVote} products={products}/>
        </div>
    )
}

export default Product;