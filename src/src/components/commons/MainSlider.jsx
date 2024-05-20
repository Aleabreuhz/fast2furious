import React, { Component } from "react";
import Slider from "react-slick";
import fotos from "../../models/fotos/fotos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainSlider.css"


function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="container-main">
            <div className="info">
                <Slider {...settings}>
                    {
                        fotos.map((i) => (
                            <div className="info-container">
                                <div className="info-preview">
                                    <div className="info-image">
                                        <a href={i.link}><img src={`/fotos/${i.preview}`} alt="imagen no encontrada" /></a>
                                    </div>
                                </div>
                                <div className="info-text">
                                    <p className="info-title">{i.title}</p>
                                    <p className="info-content">{i.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div >
        </div >
    );
}

export default MainSlider;