import React, { PureComponent } from 'react'
import Alumnicard from './Alumnicard';
class Alumni extends React.Component {
    render() {
        return <div>
            {/* <div className="col md-4">
                <Alumnicard/>
                <Alumnicard/>
                <Alumnicard/>
            </div> */}
            <div class="container">
                <div class="row">
                    <div class="col">
                    <Alumnicard/>
                    </div>
                    <div class="col">
                        
                    <Alumnicard/>
                    </div>
                    <div class="col">
                    <Alumnicard/>
                    </div>
                  
                </div>
                <div class="row">
                    <div class="col">
                    <Alumnicard/>
                    </div>
                    <div class="col">
                        
                    <Alumnicard/>
                    </div>
                    <div class="col">
                    <Alumnicard/>
                    </div>
                  
                </div>
            </div>
            {/* <table>
                <tr>
                    <td>
                        <Alumnicard/>
                    </td>
                    <td>
                        <Alumnicard/>
                    </td>
                    <td>
                        <Alumnicard/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Alumnicard/>
                    </td>
                    <td>
                        <Alumnicard/>
                    </td>
                    <td>
                        <Alumnicard/>
                    </td>
                </tr>
            </table> */}
            {/* <Alumnicard/> */}
        </div>;
    }
}

export default Alumni;