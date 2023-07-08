// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";
import Newzletter from './component/Newzletter';
import Cards from './component/Cards';
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newzletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
