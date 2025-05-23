import MenuItem from "./MenuItem";

function MenuList({items, selectedItem, onSelect}) {
    return (
        <div>
            {items.map((item) => (
                <MenuItem
                    key={item}
                    label={item}
                    onSelect={onSelect}
                    isActive={item === selectedItem}
                />
            ))}
        </div>
    )
}

export default MenuList;