import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import Main from './pages/Main';
const App = () => {
  return <CssVarsProvider>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  </CssVarsProvider>
}

export default App