import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import "./ffRSS.css";
import locates from "../../models/ffRss";
import Header from "../../components/commons/Header";
import Footer from "../../components/commons/Footer";

function AbuDbi() {

    const currentNew = 3;

    return (
        <>
        <div className="ffRSS-page">
        <Header/>
        <div className="main-locates" >
          <div className="main-locates-content">
            {
              locates.map((l) => (
                <>
                  {l.key == currentNew ?
                    <div>
                      <div className="turn-back">
                        <a href="/ubicaciones"><h2><FontAwesomeIcon icon={faBackward} /> Atras</h2></a>
                      </div>
                      <h1>{l.title}</h1>
                      <p>{l.content}</p>
                      <br />
                      <div className="main-locates-preview">
                        <img src="..\fotos\abuDhabi.gif" alt={l.title} />
                      </div>
                    </div>
                    : ""}
                </>
              ))
            }
          </div>
        </div>
        <Footer />
        </div>
      </>
    )
  }
  
  export default AbuDbi;