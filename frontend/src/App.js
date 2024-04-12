import './App.css';
// import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Categories from './Pages/Categories';
import Search from './Pages/Search';

import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/aboutus' element={<Home/>}/>
              <Route path='/categories' element={<Categories/>}/>
              <Route path='/contactus' element={<Home/>}/>
              <Route path='/search/:query' element={<Search/>}/>
              <Route path='/product' element={<Home/>}/>
              <Route path='/cart' element={<Home/>}/>
              <Route path='/wishlist' element={<Home/>}/>
              <Route path='/login' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
