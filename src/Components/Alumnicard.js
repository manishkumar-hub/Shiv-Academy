import React, { Component } from 'react';
import manish from './manish.jpg'
import vikashraj from './vikashkumarraj.jpeg'
import './cardstyle.css'
import insta from './insta.jpg'
import linkedin from './linkedin.png'
import mail from './gmail.png'
class Alumnicard extends React.Component {
    render() {
        let {name,description,yos,linkedinurl,instaurl,mailurl,ImageFileName }= this.props ;
        return <div>
            <div class="card mb-3" style={{ width: "8rem" },{ borderBlockColor: 'black' }, { borderBlockStyle: 'groove' }, {    borderWidth: '5px' }, { borderRadius: '20px' }} >
                <div class="row g-0">
                    <div class="col-md-4" id='imgcls'>
                        {/* let i = './manish.jpg'  */}
                        <img src={ImageFileName} class="img-fluid " id='img' alt="..." />
                    </div>
                    <div class="col-md-8" id='cardtext'>
                            <div class="card-body">
                                <h5 class="card-title">{name} </h5>
                                <p class="card-text">
                                    <h6>{description}</h6>
                                    <h6>Year of Schooling : {yos} </h6>
                                </p>
                                <p class="card-text"><small class="text-muted">Social handles: </small></p>
                                <a href={linkedinurl}>
                                <img className='logo' src={linkedin} alt="" />
                                </a>
                                <a href={instaurl}>
                                <img className='logo' src={insta} alt="" />
                                </a>
                                <a href={'mailto:'+mailurl}>
                                <img className='logo' src={mail} alt="" />

                                </a>
                                {/* <img className='logo' src={linkedin} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

            export default Alumnicard;