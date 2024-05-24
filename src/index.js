import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import SignUp from './components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = document.getElementById('root');
// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login />} />
//         <Route path='/home' element={<App />} />
//         <Route path='/signup' element={<SignUp />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   root
// );