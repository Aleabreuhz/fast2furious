import Footer from "../../components/commons/Footer";
import Header from "../../components/commons/Header";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./Ubicaciones.css";


const markersData = [
    { position: [40.7128, -74.0060], label: "New York" },
    { position: [34.0522, -118.2437], label: "Los Angeles" },
    { position: [41.8781, -87.6298], label: "Chicago" },
    // Añade más marcadores según sea necesario
];


function FitBounds({ markers }) {
    const map = useMap();
    const markersRef = useRef([]);

    useEffect(() => {
        if (markers.length > 0) {
            const bounds = new L.LatLngBounds(markers.map(marker => marker.position));
            map.fitBounds(bounds);
        }
    }, [markers, map]);

    return null;
}

function Ubicaciones() {

    const [markers] = useState(markersData);


    return (
        <>
            <div className="main-ubi">
                <Header />
                <div className="locations-principal">
                    <div className="locations-content">
                        <div className="locations-text">
                            <h3>Ubicaciones</h3>
                            <br />
                            <h3>Encuentra los lugares donde Fast and Furious ha sido grabada</h3>
                        </div>
                        <MapContainer className="locations-map-container" center={[40.7128, -74.0060]} zoom={5} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[28.141271248426936, -15.591366021889435]}>
                                <Popup>
                                    - Gran Canaria, Puente de silva- <br /> -La escena del puente de Silva se ha convertido en una de las más icónicas de la franquicia "Fast and Furious", recordada por su espectacularidad y su capacidad para mantener la adrenalina alta en todo momento. <br /> <a href="/silva"><img src="..\fotos\silva.jpg" alt="hola" /></a>
                                </Popup>
                            </Marker>
                            <Marker position={[35.66025723567971, 139.70008608890763]}>
                                <Popup>
                                    -Tokio - <br /> -Escenas como la de la plaza de Shibuya son inolvidables (aunque hubiera mucho de CGI) y, como curiosidad, la carrera final con D.K. no se grabó ni siquiera en Japón, se rodó en Azusa Canyon de California, Estados Unidos.<br /><a href="/tokio"> <img src="..\fotos\tokio.gif" alt="hola" /></a>
                                </Popup>
                            </Marker>
                            <Marker position={[-22.951234288937798, -43.21044964538697]}>
                                <Popup>
                                    -Rio de Janeiro - <br /> -Aunque hay escenas en diversos escenarios es Río de Janeiro el principal, con persecuciones a pie en la favelas y una escena espectacular con el robo de la caja fuerte en las calles de la ciudad.<br /> <a href="/rio"><img src="..\fotos\brazil.gif" alt="hola" /></a>
                                </Popup>
                            </Marker>
                            <Marker position={[24.463070773661638, 54.320232946552395]}>
                                <Popup>
                                    -Etihad Towers - <br /> -Posiblemente una de las mayores idas de olla que ha protagonizado un coche en el celuloide: saltar de una a otra de las Etihad Towers en un Lykan Hypersport con la carrocería hecha de oro macizo.

                                    <br /> <a href="/abudbi"><img src="..\fotos\abuDhabi.gif" alt="hola" /></a>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Ubicaciones;