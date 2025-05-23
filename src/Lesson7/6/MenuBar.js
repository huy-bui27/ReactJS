import {useState} from "react";
import MenuList from "./MenuList";

function MenuBar() {
    const menuItems = ['Trang chu', 'Sam pham', 'Gioi thieu', 'Lien he'];
    const [selectedItem, setSelectedItem] = useState(menuItems[0]);
    const handleSelect = (item) => {
        setSelectedItem(item);
    };
    return (
        <div>
            <h2>Menu điều hướng</h2>
            <MenuList items={menuItems}
                      selectedItem={selectedItem}
                      onSelect={handleSelect}/>
            <div>
                <h3>Noi dung:{selectedItem}</h3>
                <p>Đây là nôi dung của {selectedItem}.</p>
            </div>
        </div>
    )
}

export default MenuBar;