import Footer from "../../components/commons/Footer";
import Header from "../../components/commons/Header";
import MainSlider from "../../components/commons/MainSlider";
import './Home.css'


function Home() {



  return (
    <>
      <div className="main-page">
        <Header />
        <MainSlider />
        <Footer />
      </div>
    </>
  )
}

export default Home;