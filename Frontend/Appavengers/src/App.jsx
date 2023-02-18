import logo from './logo.svg';
import './App.css';
import {Allroutes} from "./Components/Routes/Allroutes";
import Footer from "./Components/Footer"
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
