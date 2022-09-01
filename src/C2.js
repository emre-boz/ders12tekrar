import {memo} from "react";

function C2(ozellikler){
    console.log("C2 çalıştı");
    const adSoyad=ozellikler.isim+' '+ozellikler.soyisim;
    return(
        <p>
            Ben C2 ad soyad: {adSoyad}
        
        </p>
    )
}

export default memo(C2);