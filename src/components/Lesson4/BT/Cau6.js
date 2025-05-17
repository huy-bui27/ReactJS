import React  from "react";
import LoginStatus  from "./ShowMessage6";

function Cau5(){
    return(
        <div>
        <LoginStatus isLoggedIn={true}/>
        <LoginStatus isLoggedIn={false}/>
        </div>
    )
}
export default Cau5;