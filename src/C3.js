import React from "react";

function C3(props){
    console.log("C3 çalıştı");
    return(
        <p>
            Ben C3 
            {props.children}
        </p>
    )
}

export default React.memo(C3);