import React  from "react";
import Alert from "./ShowMessage9";

function Cau9(){

    return(
<div>
    <Alert type="success" message={"Thao tác thành công!"}/>
    <Alert type="warning" message={"Cảnh báo: Kiểm tra lại dữ liệu."}/>
    <Alert type="error" message={"Lỗi: Đã xảy ra sự cố."}/>
</div>
    )
}
export default Cau9;