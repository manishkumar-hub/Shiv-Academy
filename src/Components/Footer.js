import React, { PureComponent } from 'react'
import './footerstyle.css'
import { Link } from 'react-router-dom'
class Footer extends React.Component {
    render() { 
        return <div>
            <div className='footerTop' >
                <h3 className='text uptext' id='schoolname'>Shiv Acdemy</h3>
                <h5 className='text uptext' id='schooladd'>Ramkola Taraiya, Saran- 841424</h5>
                <h6 className='text' >
                <Link to="/"><h5 className='linktext'>Home</h5></Link>
                    {/* <a className='linktext' href="">Home</a> */}
                    {/* <a className='linktext' href="">Aim & Objectives</a> */}
                    {/* <a className='linktext' href="">Contact Us</a>
                    <a className='linktext' href="">Privacy Policy </a> */}
                </h6>
                <h2></h2>
            </div>
            <div className="footerBottom">
                <h6 className='text'>Website managed and hosted by Alumni association</h6>
                <h6></h6>
            </div>
        </div>;
    }
}
 
export default Footer;