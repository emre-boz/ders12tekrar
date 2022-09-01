import { useEffect, useState } from "react";

function HemenDeneme1(){
    console.log("büyükşehir çalışıyor");

    const [karar,kararVer]=useState("MUTSUZLUK");
    const [kacSavas,kacSavasMi]=useState("KAÇ");
    const [denemeYazisi,denemeYazisiGuncelle]=useState("markus");

    const denemeConsole=()=>{
        console.log("deneme console log çalıştı");
    };

    //denemeConsole();

    useEffect(denemeConsole,[denemeYazisi]);
    




    return (
        <>
        <h1 style={{color:"red"}}>HEMEN DENEME STRIKE BACK</h1>
        <div style={
            {
                color:"white",
                width: "100px",
                height:"100px",
                backgroundColor:"black"
                

            }
        }>
<p>{new Date().getSeconds()}</p>
        </div>
        <div>sende yaz yaz yaz denemeyi yaz: {denemeYazisi}</div>
        <div>
            <h1>Mutluluk butonu</h1>
            <button onClick={()=>{kararVer("MUTLULUK")}}>karar ver</button>
            <h1>Bu karara saygı duy: {karar}</h1>
            
        </div>
        <div>
            <h3>Kaç ya da savaş kararı:</h3>
            <h1>{kacSavas}</h1>
        </div>
        </>
    )

}

export default HemenDeneme1;