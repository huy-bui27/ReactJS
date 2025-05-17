import React from 'react';

function InputField(props) {
    return (
        <div className="input-group-static">
            <input type={props.type} id={props.id}  />
        </div>
    );
}

export default InputField;