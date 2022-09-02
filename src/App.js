import { useEffect, useState } from "react";
import Kitap from "./Kitap";
import './App.css';

function App(){
    
    const [veri, veriGuncelle]=useState(null);


    useEffect(()=>{
        const kitaplariCek=async ()=>{
            const response= await fetch("kitaplar.json");
            const kitaplar=await response.json();
    
            veriGuncelle(kitaplar);
        }

        kitaplariCek();
        
    },[]);

    console.log("app render oldu");


    


    return (
        <>
        <p>kitaplar </p>
        <div className="kitap-liste">
          
        {/* {veri&&veri.kitaplar.map(kitap=><p key={kitap.no}>{kitap.ad}</p>)} */}
        {veri&&veri.kitaplar.map(kitap=><Kitap key={kitap.no} kitap={kitap}/>)}
        </div>
        </>
    )
}

export default App;