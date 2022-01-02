import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import school from './IMG20211219131720.jpg'
import school from './IMG20211219131717.jpg'
import './aboutstyle.css'
class About extends React.Component {
    render() {
        return <div className='about'>
            <h1 className='heading' >ABOUT THE SCHOOL</h1>
            <p className="aboutPara">
                <img id='schoolimg' src={school} alt="" />
                <b> Shiv Academy</b> is one of the largest educational institution of the region for providing education service to students.It provides "a best way to excellence" and supports in everything anytime. It has been doing our best in this industry since 2005 to promote a student in all respects. It have full support of best faculties from the industry as well as we have the best technique of teaching. Teachers are devoted to providing excellent individual counselling on the complete requirements of the student. The teachers /faculties of the organization are highly qualified and well equipped for their respective subjects and are capable of inspiring confidence in the students and to get the best out of them.
                The school aims at giving your child quality care and guidance and prepares the child to enter a regular formal school. 
                <p>
                Within the group, all students are supported in developing their potential at their own pace. Our regular planning sessions enable us to provide a wealth of experience from which your child can build and expand their knowledge and skills. Records of Progress will be maintained for each student attending school. The key areas in which progress is expected to be made are: Personal, Social and Emotional Development Communication, Language and Literacy Mathematical Development Knowledge and Understanding of the World- Physical Development
                </p>
            </p>
            {/* <img id='schoolimg' src={school} alt="" /> */}
        </div>;
    }
}

export default About;