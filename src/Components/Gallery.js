import React, { Component } from 'react';
import img1 from './Gallery/img1.jpeg'
import img2 from './Gallery/img2.jpeg'
import img3 from './Gallery/img3.jpeg'
import img4 from './Gallery/img4.jpeg'
import img5 from './Gallery/img5.jpeg'
import './gallerystyle.css'
class Gallery extends React.Component {
    render() { 
        return <div>
            <div className="container">
                <h2 className='heading'>ALUMNI REUNION 2021</h2>
                <div className="row">
                    <div className="col">
                    <img className='image' src={img3} alt="" />      
                    </div>
                    <div className="col">
                    <img className='image' src={img4} alt="" />
                    </div>
                    <div className="col">
                    <img className='image' src={img1} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <img className='image' src={img2} alt="" />
                    </div>
                    <div className="col">
                    <img className='image' src={img5} alt="" />
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default Gallery;