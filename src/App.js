import React from "react";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";

function App(){
    const [acKapa,acKapaDegistir]=React.useState(false);

console.log("app çalıştı");


    return(
        
<>
<C1 isim="Ahmet" soyisim="Yıldız"/>
<C2 isim="Leyla" soyisim="Başak" sevdigiRenkler={{kirmizi:true, ensevdigi:"mahmutrengi"}}/>
<C3 isim="Buket">
    <h2>C4 child component</h2>
    <C4 isim="Beyza"/>
</C3>
</>
    );
}
export default App;