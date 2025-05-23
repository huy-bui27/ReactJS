import React, {useState} from 'react';
import ImageSelector from "./Display8";

function Bai8() {
    const [selectedImage, setSelectedImage] = useState(null);

    const imageUrls = {
        A: 'https://via.placeholder.com/200?text=Ảnh+A',
        B: 'https://via.placeholder.com/200?text=Ảnh+B',
        C: 'https://via.placeholder.com/200?text=Ảnh+C',
    };
    return (
        <div>
            <ImageSelector onImageSelect={setSelectedImage}/>
            {selectedImage ? (
                <img src={imageUrls[selectedImage]} alt={`Ảnh ${selectedImage}`}/>
            ) : (
                <p>Chọn một ảnh</p>
            )}
        </div>
    );
}

export default ImageSelector;