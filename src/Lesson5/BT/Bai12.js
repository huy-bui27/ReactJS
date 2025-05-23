import React, {useState} from 'react';
import Display12 from "./Display12";


function Bai12() {
    const product = ['Samsung', 'Dell', 'Sony', 'Canon'];
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = product.filter((product) => product.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <Display12 onSearch={setSearchTerm}/>
            <ul>
                {filteredProducts.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    )
}

export default Bai12;