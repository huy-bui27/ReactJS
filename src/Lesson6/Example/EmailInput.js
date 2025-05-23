function EmailInput({onChangeEmail, email}) {
    return (
        <div>
            <input type="email" value={email} placeholder="Nhập email của bạn"
                   onChange={(e) => onChangeEmail(e.target.value)}/>
        </div>
    )
}

export default EmailInput;