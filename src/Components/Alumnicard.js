import React, { PureComponent } from 'react';
import manish from './manish.jpg'
import './cardstyle.css'
import insta from './insta.jpg'
import linkedin from './linkedin.png'
import mail from './gmail.png'
class Alumnicard extends React.Component {
    render() {
        return <div>
            <div class="card mb-3" style={{ width: "8rem" }, { borderBlockColor: 'black' }, { borderBlockStyle: 'groove' }, {    borderWidth: '5px' }, { borderRadius: '20px' }} >
                <div class="row g-0">
                    <div class="col-md-4" id='imgcls'>
                        <img src={manish} class="img-fluid " id='img' alt="..." />
                    </div>
                    <div class="col-md-8" id='cardtext'>
                            <div class="card-body">
                                <h5 class="card-title">Manish Kumar Pandit</h5>
                                <p class="card-text">
                                    <h6> 2nd year , B-tech in CSE from NIT Sikkim</h6>
                                    <h6>Year of Schooling :  2011-17 </h6>
                                </p>
                                <p class="card-text"><small class="text-muted">Social handles: </small></p>
                                <a href="">
                                <img className='logo' src={linkedin} alt="" />
                                </a>
                                <a href="">
                                <img className='logo' src={insta} alt="" />
                                </a>
                                <a href="mailto:manishkumarpandit12@gmail.com">
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