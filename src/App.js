import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact/>
        <Route component={NasaPhoto} path="/nasaAPOD"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
