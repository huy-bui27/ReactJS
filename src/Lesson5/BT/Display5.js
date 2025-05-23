import React from 'react';

function ProductButton({name, onSelect}) {
    const handleClick = () => {
        onSelect(name);
    }
    return (
        <button onClick={handleClick}>{name}</button>
    );
}

function ProductList() {
    const products = ['Laptop', 'Phone', 'Tablet'];
    const handleProductSelect = (selectedProduct) => {
        alert(`Sản phẩn được chọn:${selectedProduct}`);
    }
    return (
        <div>
            <h2>Danh sách sản phẩm:</h2>
            {products.map((product, index) => (
                <ProductButton
                    key={index}
                    name={product}
                    onSelect={handleProductSelect}/>
            ))}
        </div>
    );
}

export default ProductList;