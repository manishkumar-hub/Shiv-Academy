import React, { Component } from 'react'
import PropTypes from 'prop-types'
import school from './IMG20211219131720.jpg'
import './aboutstyle.css'
class About extends React.Component {
    render() {
        return <div className='about'>
            <h1>ABOUT THE SCHOOL</h1>
            <p className="aboutPara">
                Introduction
                The school aims at giving your child quality care and guidance and prepares the child to enter a regular formal school. To provide a safe, secure and stimulating environment. The safety of the children is of paramount importance to every staff member. To encourage each child to reach and fulfill his/her individual potential. To build and maintain your child's confidence in happy and caring surrounding. To ensure equal opportunity for all children. To create a partnership with parents. To help, support and enhance the development of each child, Individual care and attention by committed and professional staff, Lots of fun, play and friendship with other children and adults.
            </p>
            {/* <img id='schoolimg' src={school} alt="" /> */}
        </div>;
    }
}

export default About;