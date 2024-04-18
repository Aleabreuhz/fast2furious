import fotos from "../../models/fotos/fotos"
function Fotos() {
    return (
        <>
        <div className="fotos-cont">
            <p>Foto</p>
            {
        Fotos.map((Fotos)=>(
            <img src={`/fotos/${fotos.src}`} alt="si"/>
        ))
    }
    </div>
        </>
    )

}

export default Fotos