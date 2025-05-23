import {useState} from "react";
import InputBox from "./InputBox";
import SearchBar from "./SearchBar";

function User() {
    const users = ["Truong Hoang Nam", "Trn Dinh Hai", "Bui Quang Huy", "Tran Duc Duong"];
    const [keyword, setKeyword] = useState("");
    const handleSearch = (value) => {
        setKeyword(value);
    }
    const filterUserSearch = keyword ? users.filter(user => user.toLowerCase().includes(keyword.toLowerCase())) : users;
    return (
        <div>
            <InputBox handleSearch={handleSearch}/>
            <SearchBar users={filterUserSearch}/>
        </div>
    )
}

export default User;