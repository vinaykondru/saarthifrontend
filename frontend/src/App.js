import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Albums from './pages/Albums'
import Users from './pages/Users';
import Photos from './pages/Photos';
import Menu from "../src/data.js";
import Sample from './Sample';
function App() {
  
  return (
    <>
    <Sample data={Menu} />
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Users />} />
       <Route path='/albums/:id' element={<Albums />} />
       <Route path='/photos/:albumId' element={<Photos />} />
       
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
