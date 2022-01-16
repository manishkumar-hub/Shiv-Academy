import React, { PureComponent } from 'react'
import './footerstyle.css'
import { Link } from 'react-router-dom'
import InstaLogo from  './InstaGreyLogo.jpg'
import GmailLogo from  './GmailGreyLogo.jpg'
class Footer extends React.Component {
    render() { 
        return <div>
            <div className='footerTop' >
                <table className='table'>
                    <tr>
                        <td>

                <h3 className='text uptext' id='schoolname'>Shiv Academy
                <h5 className='' id='schooladd'>Ramkola Taraiya, Saran- 841424
                <br/>
                <br/>
                Follow Us <br/>
                <a href="mailto:shiv@gmail.com">
                <img className='handleLogo' src={GmailLogo} alt="" />
                </a>
                <a href="https://www.instagram.com/_shiv_academy_/">
                <img className='handleLogo' src={InstaLogo} alt="" />
                </a>
                </h5>
                </h3>
                        </td>
                        <td>
                <h6 className='text ' >
                 <h4 className='linktext'>Site Links</h4>
                <Link to="/"><h5 className='linktext' >Home</h5></Link>
                <Link to="/aim"><h5 className='linktext'>Aim & Objectives</h5></Link>
                </h6>
                        </td>
                    </tr>
                </table>
                <div className="footerBottom">
                <h6 className='text'>Website managed and hosted by Alumni association</h6>
                <h6></h6>
            </div>
            </div>
        </div>;
    }
}
 
export default Footer;