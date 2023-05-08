import React from 'react';
import { Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Makeup from './pages/Makeup/Makeup';
import Skincare from './pages/Skincare/Skincare'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Makeup" exact>
          <Makeup/>
        </Route>
        <Route path="/Skincare" exact>
          <Skincare/>
        </Route>
    </main>
   </Router>
  );
}

export default App;
