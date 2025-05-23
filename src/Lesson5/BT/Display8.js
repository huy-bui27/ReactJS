import React from 'react';

function ImageSelector({onImageSelect}) {

    return (
        <div>
            <button onClick={() => onImageSelect('A')}>Chọn ảnh A</button>
            <button onClick={() => onImageSelect('B')}>Chọn ảnh B</button>
            <button onClick={() => onImageSelect('C')}>Chọn ảnh C</button>
        </div>
    )
}

export default ImageSelector;