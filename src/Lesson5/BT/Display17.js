import React from "react";

function Display17({onHobbiesChange}) {
    const hobbiesList = ['Đọc sách', 'Xem phim', 'Du lịch', 'Chơi game', "Tập gym"];
    const handleChange = (e) => {
        const {value, checked} = e.target;
        onHobbiesChange(value, checked);
    }
    return (
        <div>
            {hobbiesList.map((hobby) => (
                <label key={hobby}>
                    <input type="checkbox" value={hobby} onChange={handleChange}/>{hobby}
                </label>
            ))}
        </div>
    )
}

export default Display17;