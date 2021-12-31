import './App.css';
import About from './Components/About';
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
      <About/>
      <Directmessage/>
      <Alumni/>
      <Footer/>
    </div>
  );
}

export default App;
