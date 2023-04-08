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
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import Speechly from './Components/Speechly/Speechly';
import ImageToText from './ocr/ImageToText';
import StudentLoan from './Components/StudentLoan/StudentLoan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
    <Provider>
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
          <Route exact path='/speechly' element={<Speechly />} />
          <Route exact path='/imagetotext' element={<ImageToText />} />
          <Route exact path='/loanmanagement' element={<StudentLoan />} />
         
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>

      </BrowserRouter>
      
    </GlobalProvider>
    </Provider>
    </SpeechProvider>
  </React.StrictMode>
);

