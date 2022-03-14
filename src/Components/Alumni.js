import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Alumnicard from './Alumnicard';
import manish from './AlumniImages/manish.jpg'
import ashish from './AlumniImages/ashishsharma.jpeg'
import vikashraj from './AlumniImages/vikashkumarraj.jpeg'
import ashwini from './AlumniImages/ashwinisingh.jpeg'
import SujeetSharma from './AlumniImages/SujeetSharma.jpeg'
import RaushanSwaraj from './AlumniImages/RaushanSwaraj.jpeg'
import Riteshkumarsingh from './AlumniImages/RiteshKumarSingh.jpeg'
import RobinKumarGupta from './AlumniImages/RobinKumarGupta.jpg'
// class Alumni extends React.Component {
// render() {
const Alumni = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true, offset: 0, easing: 'ease-in-sine' });
    }, []);
    return (
        <div>
            <h1 className='heading' id='alumhead'>ALUMNI</h1>
            <div className="container">
                <div className="row" >
                <div className="col-md-4" data-aos="fade-right" >
                        <Alumnicard name={'Robin Kumar Gupta'} description={<> SDE @Knimbus <br /> B-tech in CSE, LPU </>} yos={'2006-15'} linkedinurl={''} instaurl={"d"} mailurl={'d'} ImageFileName={RobinKumarGupta} />
                    </div>
                    <div className="col-md-4" data-aos="fade-right" >
                        <Alumnicard name={'Vikash Kumar Raj'} description={<> MBBS <br /> AIIMS Kalyani </>} yos={'2008-17'} linkedinurl={'a'} instaurl={"d"} mailurl={'d'} ImageFileName={vikashraj} />
                    </div>
                    <div className="col" data-aos="fade-right" >
                        <Alumnicard name={'Ritesh Kumar Singh'} description={<> MBBS <br /> AIIMS Patna </>} yos={'2006-15'} linkedinurl={'a'} instaurl={"d"} mailurl={'d'} ImageFileName={Riteshkumarsingh} />
                    </div>
                    <div className="col-md-4" data-aos="fade-right" >
                        <Alumnicard name={'Ashish Sharma'} description={<>B-tech in ECE <br /> MNNIT Allahabad  </>} yos={'2008-17'} linkedinurl={'a'} instaurl={"d"} mailurl={'d'} ImageFileName={ashish} />
                    </div>
                <div className="col-md-4" data-aos="fade-right">
                        <Alumnicard name={'Manish kumar pandit'} description={<> B-tech in CSE <br /> NIT Sikkim</>} yos={'2009-17'} linkedinurl={"https://www.linkedin.com/in/manish-kumar-pandit-092107214"} instaurl={"df"} mailurl={"manishkumarpandit12@gmail.com"} ImageFileName={manish} />

                    </div>
                {/* <div className="row"> */}
                    <div className="col-md-4" data-aos="fade-right">
                        <Alumnicard name={'Ashwini Singh'} description={<>B-tech in CE<br /> NIT Meghalaya </>} yos={'2006-17'} linkedinurl={'a'} instaurl={"d"} mailurl={'d'} ImageFileName={ashwini} />
                    </div>
                    <div className="col-md-4" data-aos="fade-right" >
                        <Alumnicard name={'Sujeet Kumar Sharma'} description={<>B-tech in CSE<br /> Lovely Proffesional University </>} yos={'2006-17'} linkedinurl={'https://www.linkedin.com/in/sujeet-kumar-sharma-1494231b7'} instaurl={"d"} mailurl={'sks9097692531@gmail.com'} ImageFileName={SujeetSharma} />
                    </div>
                    <div className="col-md-4" data-aos="fade-right">
                        <Alumnicard name={'Raushan Swaraj'} description={<>Delhi University </>} yos={'2006-17'} linkedinurl={''} instaurl={""} mailurl={''} ImageFileName={RaushanSwaraj} />
                    </div>
                    
                </div>
                {/* </div> */}
            </div>

        </div>);
}

export default Alumni;