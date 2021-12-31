import React, { Component } from 'react'
import Carousel from './Carousel';
import './homecss.css'
import manish from './manish.jpg'
class Homepage extends React.Component {
    render() {
        return <div>
            <Carousel />
            <div className='aimbox'>
                <h1>Our Aim </h1>
                <ul className='list'>
                    <li>
                        <h5>ahdajdhfajd</h5>
                    </li>
                    <li>
                        <h5>
                            ahdjahjdhdja
                        </h5>
                    </li>
                </ul>
                <h1>ABOUT THE ASSOCIATION </h1>
                <div className="president">
                    <h2 >PRESIDENT </h2>
                    <img id='presidentImage' src={manish} alt="" />
                    <p id="ptext" >Contribute, Vote  Earn with public Grepper answers
                        Our goal is to provide you with the right answer for the specific coding spot you are in, we do this by using coder feedback from other folks who ran into your same coding problem. By contributing answers not only will you help other coders out, you can also earn by receiving donations from other thankful coders.    Our goal is to provide you with the right answer for the specific coding spot you are in, we do this by using coder feedback from other folks who ran into your same coding problem. By contributing answers not only will you help other coders out, you can also earn by receiving donations from other thankful coders. jg </p>
                </div>
                <div className="vice-president">
                    <h2>VICE-PRESIDENT</h2>
                    <img id='vice-presidentImage' src={manish} alt="" />
                    <p id="vptext" >Contribute, Vote  Earn with public Grepper answers
                        Our goal is to provide you with the right answer for the specific coding spot you are in, we do this by using coder feedback from other folks who ran into your same coding problem. By contributing answers not only will you help other coders out, you can also earn by receiving donations from other thankful coders.    Our goal is to provide you with the right answer for the specific coding spot you are in, we do this by using coder feedback from other folks who ran into your same coding problem. By contributing answers not only will you help other coders out, you can also earn by receiving donations from other thankful coders. fjio</p>
                </div>
                <div className="secretary">
                    <h2> SECRETARY </h2>
                    <img id='secretary-Image' src={manish} alt="" />
                    <p id="vptext" >Contribute, Vote  Earn with public Grepper answers
                        Our goal is to provide you with the right answer for the specific coding spot you are in, we do this by using coder feedback from other folks who ran into your same coding problem. By contributing answers not only will you help other coders out, you can also earn by receiving donations from other thankful coders.    Our goal is to provide you with the right answer for the specific coding spot you are in, we do this by using coder feedback from other folks who ran into your same coding problem. By contributing answers not only will you help other coders out, you can also earn by receiving donations from other thankful coders. fjio</p>
                </div>
            </div>
        </div>;
    }
}

export default Homepage;