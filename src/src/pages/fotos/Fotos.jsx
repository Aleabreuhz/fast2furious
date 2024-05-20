import fotos from "../../models/fotos/fotos"
function Fotos() {
    return (
        <>
       
            
            {
        fotos.map((fotos, index)=>(
            <img key={index} src={`/fotos/${fotos.src}`} alt="si"/>
        ))
    }
    
        </>
    )

}

export default Fotos