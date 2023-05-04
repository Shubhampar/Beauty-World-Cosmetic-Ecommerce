import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Skincare from './Components/Skincare';
import Makeup from './Components/Makeup';


ReactDOM.render(
  <Router>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/skincare' element={<Skincare/>}/>
        <Route path='/makeup' element={<Makeup/>}/>
    </Routes>
  </Router>
   
);


