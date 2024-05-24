import './App.css';

//Component
import NavBar from './Component/NavBar';
import CrudApplication from './Component/CrudApplication';
import AllUser from './Component/AllUser';
import AddUser from './Component/AddUser';

import EditUser from './Component/EditUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<CrudApplication/>}></Route>
      <Route path="/addUser" element={<AddUser/>}></Route>
      <Route path="/allUser" element={<AllUser/>}></Route>
      <Route path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
