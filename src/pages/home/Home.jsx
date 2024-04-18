import Footer from "../../components/commons/Footer";
import Header from "../../components/commons/Header";
import Fotos from "../fotos/Fotos";

import './Home.css'
function Home () {
    return (
        <>
            <Header/>
            <div className="homeContent">
                <Fotos/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;