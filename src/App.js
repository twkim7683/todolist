import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//import GoalItemList from './components/GoalItemList.js';
import MainPage from './components/MainPage';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/update' element={ <UpdatePage />} />
        <Route exact path='/update' element={ <div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
