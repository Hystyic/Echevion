
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import catto from './cattt.png';
// import SearchBar from './SearchBar';
// import Discover from './discover';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <button><img src={catto} alt='' /></button>
//       </div>
//       <div className="navbar-search">
//         <SearchBar />
//       </div>
//       <div className="navbar-links">
//         <ul>
//           <li><a href="#">Discover</a></li>
//           <li><a href="#">Following</a></li>
//           <li><a href="#">Profile</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Navbar />
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

