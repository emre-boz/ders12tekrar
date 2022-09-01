import { useEffect } from "react";

function C1(){


    useEffect(()=>{
        console.log("C1 useEffect çalıştı");

        return ()=>{
            console.log("C1 unmount oldu");
        }

    })
return(
    <p>
        Ben C1
    </p>
)
}

export default C1;