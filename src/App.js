import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Home from './component/Home/Home';
import Feature from './component/featurecards/feature';
import Buy from './component/buy/Buy';
import Recommend from './component/recommedComponent/Recommend';
import Demmand from './component/ProjectDemand/Demmand';

function App() {
  return (
    <div className="Apps">
      <Navbar/>
      {/* <Header/> */}
      <Home/>
      <Feature/>
      <Buy/>
      <Recommend/>
      <Demmand/>
    </div>
  );
}

export default App;
