import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import AddFlight from "./components/pages/AddFlight";
import MyFlight from "./components/pages/MyFlight";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add_flight' element={<AddFlight/>}/>
          <Route path='/my_flight' element={<MyFlight/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
