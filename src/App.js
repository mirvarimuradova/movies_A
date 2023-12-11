import React from 'react';
import './App.css';
import Movies from './Components/Movies'
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import ListDetail from './Components/ListDetail';
function App() {

  return (

    <div className="App">
   
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/ListDetail' element={<ListDetail/>}/>
        <Route path='/details/:id' element={<Details/>}/>
          
        <Route/>
        <Route/>
          
        <Route/>
      </Routes>
     
    </div>
  );
}

export default App;
