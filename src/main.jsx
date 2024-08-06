import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css' 
import ProfileCard from './components/User-Profile -Card/ProfileCard.jsx' ;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileCard Name = "Ankur" email  = "changaniankur100@gmail.com" age = "17" skill= " Passionate Front And  Developer | Expert in HTML5, CSS3, Javascript, Media Query, SASS, jQuery, Bootstrap, Tailwind CSS, C, C++," 
Address = "surat , gujarat"/> 
  </React.StrictMode>,
)
