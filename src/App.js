
//Global css
import './css/main.css';
import './css/variables.css';

//React Imports
import { Routes,Route,BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";


//Components
import Landing from './components/Landing/Landing';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Search from './components/Search/Search';
import Activate from './components/Activate/Activate';
import Block from './components/Block/Block';
import New from './components/New/New';

function App() {
  let userLogged = false;

  
  return (
   
    <BrowserRouter >
      <Header  />
      <Routes  >
        <Route exact  path="" element={<Landing />} />

        <Route  path="*" element={<NotFound />} />
        <Route  path="/activate/*" element={<Activate/>} />
        <Route  path="/block/*" element={<Block/>} />

        <Route  path="/login" element={<Login  />} />
        <Route  path="/register" element={<Register  />} />
        <Route  path="/search" element={<Search/>} />
        <Route  path="/new" element={<New/>} />
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
