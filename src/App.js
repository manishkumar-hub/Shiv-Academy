import './App.css';
import Alumni from './Components/Alumni';
import Alumnicard from './Components/Alumnicard';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Homepage/>
      <Alumni/>
      {/* <AlumniCard/> */}
    </div>
  );
}

export default App;
