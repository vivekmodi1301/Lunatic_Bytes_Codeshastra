import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from './Components/Login/Login';
import './index.css'
import SignUp from './Components/Signup/SignUp';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      {/* <App /> */}
      {/* <Login/> */}
      <div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      ></Toaster>
    </div>

      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/home' element={<App />} />
         
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>

      </BrowserRouter>
      
    </GlobalProvider>
  </React.StrictMode>
);

