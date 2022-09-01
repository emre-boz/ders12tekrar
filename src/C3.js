import React from "react";
//children bir obje olarak gönderiliyor non-primitive olunca memo olsa bile bir işe yaramıyor olay daha çok ram de adres verilmesi ile ilgili
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