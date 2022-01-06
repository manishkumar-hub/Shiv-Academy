import React, { PureComponent } from 'react'
import './footerstyle.css'
import { Link } from 'react-router-dom'
class Footer extends React.Component {
    render() { 
        return <div>
            <div className='footerTop' >
                <table className='table'>
                    <tr>
                        <td>

                <h3 className='text uptext' id='schoolname'>Shiv Acdemy</h3>
                <h5 className='text uptext' id='schooladd'>Ramkola Taraiya, Saran- 841424</h5>
                        </td>
                        <td>

                <h6 className='text' >
                <Link to="/"><h5 className='linktext'>Home</h5></Link>
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