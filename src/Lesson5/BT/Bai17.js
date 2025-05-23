import React, {useState} from "react";
import Display17 from "./Display17";

function Bai17() {
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    const handleHobbiesChange = (hobby, checked) => {
        setSelectedHobbies((prev) =>
            checked ? [...prev, hobby] : prev.filter((h) => h !== hobby)
        );
    };
    return (
        <div>
            <h2>Chọn sở thích</h2>
            <Display17 onHobbiesChange={handleHobbiesChange}/>
            <h3>Sở thích đã chọn:</h3>
            <p>{selectedHobbies.length > 0 ? selectedHobbies.join(', ') : 'Chưa chọn'}</p>
        </div>
    )
}

export default Bai17;