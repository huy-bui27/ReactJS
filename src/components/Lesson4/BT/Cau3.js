import React  from "react";
import AgeDisplay from "./ShowMessage3";

function App(){

    return(
       <div>
           <AgeDisplay age={18}/>
           <AgeDisplay age={20}/>
       </div>
    )
}
export default App;