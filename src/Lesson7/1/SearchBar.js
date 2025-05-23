function SearchBar({users}) {
    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar;