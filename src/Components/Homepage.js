import React, { Component, useEffect } from 'react'
import Carousel from './Carousel';
import Events from './Events';
import './homecss.css'
import secretary from './secretary.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import RaushanSwaraj from './AlumniImages/RaushanSwaraj.jpeg'
// class Homepage extends React.Component {
// render() {
const Homepage = () => {
    useEffect(() => {
        Aos.init({duration: 2000 , once: true , offset:0 ,easing : 'ease-in-sine' });
    }, []);
    return (
        <div>
            <Carousel />
            <Events />
            <div className='aimbox'>
                <h1 className='topic-header heading' >VISION & MISSION </h1>
                <p className='vis-para' >
                    The main Vision and Mission of the Association is to “Giving Back” to Alma Mater. Our aim is to bring all alumnus into one single network and help them connect with one another and with the Institute to join hands with it to foster and enhance it's academic pursuit of  knowledge.
                </p>
                <p className="vis-para">
                    Association aims to link all school alumnus together to develop synergistic plans to help and support all  students, alumni and society as a whole to achieve its vision, and to enable our alumnus add value to the society
                </p>
                <h1 className='topic-header heading'>ABOUT THE ASSOCIATION </h1>
                <div className="president" data-aos="fade-right">
                    <h2 className='sub-header' >PRESIDENT </h2>
                    <img id='presidentImage' src={secretary} alt="" />
                    <p id="ptext" >
                        <br />
                        <h4 className='post-text'>ROBIN  </h4>
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
                <div className="vice-president" data-aos ="fade-left">
                    <h2 className='sub-header'>VICE-PRESIDENT</h2>
                    <img id='vice-presidentImage' src={secretary} alt="" />
                    <p id="vptext" >
                        <br />
                        <h4 className='post-text'>UTKARSH </h4>
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
                <div className="secretary " data-aos ="fade-right">
                    <h2 className='sub-header'> SECRETARY </h2>
                    <img id='secretary-Image' src={secretary} alt="" />
                    <p id="vptext" >
                        <br />
                        <h4 className='post-text'>UTKARSH </h4>
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
                <div className="secretary " data-aos ="fade-left">
                    <h2 className='sub-header'> VICE-SECRETARY </h2>
                    <img id='secretary-Image' src={RaushanSwaraj} alt="" />
                    <p id="vptext" >
                        <br />
                        <h4 className='post-text'>RAUSHAN SWARAJ</h4>
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
                <div className="secretary " data-aos ="fade-right">
                    <h2 className='sub-header'> TREASURER </h2>
                    <img id='secretary-Image' src={secretary} alt="" />
                    <p id="vptext" >
                        <br />
                        <h4 className='post-text'>UTKARSH </h4>
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;