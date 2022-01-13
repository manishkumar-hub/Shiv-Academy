import React, { PureComponent } from 'react'
import './App.css';
import About from './Components/About';
import Aim from './Components/Aim';
import Alumni from './Components/Alumni';
import Directmessage from './Components/DirectMesage';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Events from './Components/Events';
import Gallery from './Components/Gallery';
class App extends React.Component {
  render() {
    return <div>
            <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
             <Homepage/>
          </Route>
          <Route exact path="/about">
             <About/>
          </Route>
          <Route exact path="/dmsg">
             <Directmessage/>
          </Route>
          <Route exact path="/alumn">
             <Alumni/>
          </Route>
          <Route exact path="/gallery">
             <Gallery/>
          </Route>
          <Route exact path="/aim">
             <Aim/>
          </Route>

        </Switch>
        <Footer/>
      </Router>   
      {/* <Navbar/>
       <Homepage/>
       <Aim/>
      <About/>
      <Directmessage/>
      <Alumni/> */}
    </div>;
  }
}

export default App;