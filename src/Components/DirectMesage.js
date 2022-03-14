import React, { Component } from 'react';
import lamp from './lamp.jpeg'
import './dmessg.css'
class Directmessage extends React.Component {
    render() { 
        return <div>
            <h1 className='heading' id='dheader'>
                MESSAGE FROM THE DIRECTOR
            </h1>
            <img id='d-image' src={lamp} alt="" />
            <p id='dmsg'>
                <blockquote>
                    <b>
                        "It must be remembered that the purpose of education is not to fill the minds of students with fact... It is to teach them to think, if it is possible, and always to think for themselves. <br /> &emsp; &emsp; &emsp; &emsp; "-Robert Hutchins "
                        </b>  
                </blockquote>
                <p>The success of an institution is ensured by delivering an enriching and structured curriculum and a constant
focus on student welfare that concentrates on the positive recognition of each child's achievement</p>
<p> At the same time, students too should be committed, disciplined and confident with unbounded trust in God.
</p>
<br />
</p>
<p className='D-name'>
  <h3>Mr. Rajessh Kumar Singh</h3>
  <h4>Founder Director</h4>
  <h4>Shiv Academy </h4>
  <h5>Ramkola , Taraiya , Saran</h5>
</p>
                {/* The school aims at giving your child quality care and guidance and prepares the child to enter a regular formal school. Our aim is to  provide a safe, secure and stimulating environment ,to encourage each child to reach and fulfill his/her individual potential,to build and maintain your child's confidence in happy and caring surrounding,to ensure equal opportunity for all children,to create a partnership with parents and to help, support and enhance the development of each child, Individual care and attention by committed and professional staff, Lots of fun, play and friendship with other children and adults.The school aims at giving your child quality  */}
           
        </div>;
    }
}
 
export default Directmessage;