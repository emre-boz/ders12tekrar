function Gorsel({gorsel}){

    return (
<div>
    <img style={{width:"100px"}}src={gorsel.download_url} alt="" />
    <h2>{gorsel.author}</h2>
</div>
    );
}

export default Gorsel;