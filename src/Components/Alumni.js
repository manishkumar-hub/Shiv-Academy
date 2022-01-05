import React, { PureComponent } from 'react'
import Alumnicard from './Alumnicard';
import manish from './manish.jpg'
import ashish from './ashishsharma.jpeg'
import vikashraj from './vikashkumarraj.jpeg'
import ashwini from './ashwinisingh.jpeg'
class Alumni extends React.Component {
    render() {
        return <div>
            <h1 className='heading' id='alumhead'>ALUMNI</h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                    <Alumnicard name={'Manish kumar pandit' } description={<> B-tech in CSE <br/> NIT Sikkim</>} yos={'2009-17'} linkedinurl={"fd"} instaurl={"df"} mailurl={"manishkumarpandit12@gmail.com"} ImageFileName={manish} />
                    </div>
                    <div class="col">
                        
                    <Alumnicard name={'Vikash Kumar Raj'} description={<> MBBS <br/> AIIMS Kalyani </>} yos={'2008-17'} linkedinurl={'a'} instaurl={"d"} mailurl={'d'} ImageFileName={vikashraj} />
                    </div>
                    <div class="col">
                    <Alumnicard name={'Ashish Sharma'} description={<>B-tech in ECE <br/> MNIT Allahabad  </>} yos={'2008-17'} linkedinurl={'a'} instaurl={"d"} mailurl={'d'} ImageFileName={ashish} />
                    </div>
                  
                </div>
                <div class="row">
                    <div class="col">
                    <Alumnicard name={'Ashwini Singh'} description={<>B-tech in CE<br/> NIT Meghalaya </>} yos={'2008-17'} linkedinurl={'a'} instaurl={"d"} mailurl={'d'} ImageFileName={ashwini} />
                    </div>
                    <div class="col">
                        
                 
                    </div>
                    <div class="col">
                 
                    </div>
                  
                </div>
            </div>
            {/* <table>
                <tr>
                    <td>
                     
                    </td>
                    <td>
                     
                    </td>
                    <td>
                     
                    </td>
                </tr>
                <tr>
                    <td>
                     
                    </td>
                    <td>
                     
                    </td>
                    <td>
                     
                    </td>
                </tr>
            </table> */}
            {/* <Alumnicard/> */}
        </div>;
    }
}

export default Alumni;