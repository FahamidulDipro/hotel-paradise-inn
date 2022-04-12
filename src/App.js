import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Rooms from "./components/Rooms/Rooms";
import CheckOut from "./components/CheckOut/CheckOut";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

import { createContext } from "react";
import useLoadData from "./useLoadData";
import Room from "./components/Room/Room";

export const LoadHotelsContext = createContext();

function App() {
  const [hotels] = useLoadData();
  return (
    <LoadHotelsContext.Provider value={hotels}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/rooms" element={<Rooms></Rooms>}></Route>
          <Route
            path="/checkout/:roomId"
            element={<CheckOut></CheckOut>}
          ></Route>

          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </LoadHotelsContext.Provider>
  );
}

export default App;
