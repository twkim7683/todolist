import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//import GoalItemList from './components/GoalItemList.js';
import MainPage from './components/MainPage';
import CreatePage from './components/CreatePage';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/create' element={ <CreatePage />} />
        <Route exact path='/update' element={ <UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
