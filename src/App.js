import { useEffect, useState } from "react";
import C1 from "./C1";

 function App(){

const[acKapa,acKapaDegistir]=useState(false);
const[isim,isimDegistir]=useState("");


const sonraCalis= ()=>{
    //bu kodlar render tamamen bittikten sonra çalışacak.
    console.log("sonra çalış tekrar aktif oldu");
    setTimeout(()=>{
        let saniye= new Date().getSeconds();
        document.body.style.backgroundColor=saniye%2==0?"red":"blue";
    },3000)
    return ()=>{
        console.log("APP onmount oldu");
    }
}

//useeffect(sonracalis[])//sadece ilk render sonrasında çalışır
useEffect(sonraCalis,[isim]);
//ikinci parametrede belirtilen prop veya state güncellendiğinde callback çalışır
    

 
return (
        <div>
            app render edildi. {new Date().getSeconds()}

            {acKapa && <C1 />}
        </div>
    )

 }

 export default App;