import React  from "react";

function NavBar({links}){
    return(
        <nav style={
            {
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                padding: '10px',
                backgroundColor:'black',
            }
        }>{links.map((link,index)=>(<a key={index}
                                       href={`#${link.toLocaleLowerCase().replace('','-')}`}
                                       style={{color:'#fff',textDecoration:'none'}}>{link}</a>))} </nav>
    );
}
export default NavBar ;