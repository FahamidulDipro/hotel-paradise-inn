import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import CheckOut from './components/CheckOut/CheckOut';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
   <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/rooms' element={<Rooms></Rooms>}></Route>
     <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
   </Routes>
    </div>
  );
}

export default App;
