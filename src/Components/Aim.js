import React, { PureComponent } from 'react'
import './Aimstyle.css'
class Aim extends React.Component {
    render() { 
        return <div>
            <h1 className='heading'>
                AIM & OBJECTIVES
            </h1>
            <p className='list'>
                <ul>
                    <li> To form an Alumni network of all students who have passed out from our school </li>
                    <li>
                    To create a sense of brotherhood, co-operation, mutual harmony, love and affection amongst the members of Association.
                    </li>
                    <li>
                    To conduct various programs for the Alumni, like get-togethers, fellowship, sports, cultural programs, with an objective to bring together all the students of school and promote fellowship amongst them and their families.
                    </li>
                    <li>
                    To undertake different activities in or outside School premises, for the benefit of School students and members like career counseling, medical checkup camp, and other similar programs as per the decision of the executive body
                    </li>
                    <li>
                    To conduct academic meets such as Conferences, Convocations, Workshop, Seminars  on various subjects.
                    </li>
                    <li>
                    To collect, publish and distribute such information as may be useful to members of the Association.
                    </li>
                    <li>To provide legal and medical aid, social economic help and assistance to the needy alumni members.</li>
                </ul>
            </p>
        </div>;
    }
}
 
export default Aim;