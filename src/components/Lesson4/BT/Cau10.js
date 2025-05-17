import React  from "react";
import NavBar from "./ShowMessage10";

function Cau10(){
const links = ['Home','About','Service','Contact']
    return(
        <div>
           <NavBar links={links}/>
            <h1>Welcome webpage</h1>
        </div>
    )
}
export default Cau10;