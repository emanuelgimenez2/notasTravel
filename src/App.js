
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contenedor from "./components/Contenedor/Contenedor"
import HeaderVista from './components/HeaderVista/HeaderVista';



function App() {

  return (
    <div className="App">
      <HeaderVista/> 
      <Header />
      <Contenedor />
      <Footer />
    </div>
  );
}

export default App;
