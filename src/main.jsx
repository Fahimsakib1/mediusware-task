import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/assets/scss/App.scss';
import {BrowserRouter} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
          <Toaster></Toaster>
      </BrowserRouter>
  </React.StrictMode>
)
