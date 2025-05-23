function InputBox({handleSearch}) {
    return (
        <div>
            <input type="text" placeholder="Type name search..." onChange={(e) => handleSearch(e.target.value)}/>
        </div>
    )

}

export default InputBox;