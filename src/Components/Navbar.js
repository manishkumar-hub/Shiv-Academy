import React, { Component } from 'react'
import logo from './schoollogo.jpeg'
import './navstyle.css'
class Navbar extends React.Component {
    render() {
        return <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}

            {/* </nav> */}
            <nav className="navbar navbar-expand-lg  navbar-light bg-light" id='nav'>
                <div className="container-fluid" >
                    <div className="heading container-fluid" id='contfl'>
                        <table>
                            <tr>
                                <td>
                                    <img className="logo-image" src={logo} alt="logo" />
                                </td>
                                <td>
                                    <a className="navbar-brand" href="#"><h1 id='schoolheader'>   SHIV  ACADEMY  </h1><h4 id='alumniheader'>Alumni Portal </h4></a>

                                </td>
                            </tr>
                        </table>
                            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                        <table className="navbar-inverse" id='td1'>
                            <tr className='trnav' >
                                <td ></td>
                                <div id="row2">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul id='navrow' className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#"><h5 className='navbutn'>Home</h5></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><h5 className='navbutn'>About</h5></a>
                                            </li>
                                            {/* <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <h5 className='navbutn'>Home</h5>
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li> */}
                                            <li className="nav-item">
                                                <a className="nav-link disabled"><h5 className='navbutn'>Message From the Director </h5></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link disabled"><h5 className='navbutn'>Alumni's </h5></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link disabled"><h5 className='navbutn'>Gallery </h5></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </tr>
                        </table>
                    </div>
                </div>
            </nav>
            {}
        </div>;
    }
}

export default Navbar;