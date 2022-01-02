import './App.css';
import About from './Components/About';
import Aim from './Components/Aim';
import Alumni from './Components/Alumni';
import Alumnicard from './Components/Alumnicard';
import Directmessage from './Components/DirectMesage';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Homepage/>
       <Aim/>
      <About/>
      <Directmessage/>
      <Alumni/>
      <Footer/>
    </div>
  );
}

export default App;
