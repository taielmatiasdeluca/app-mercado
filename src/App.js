
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


function App() {
  let userLogged = false;
  return (
   
    <BrowserRouter >
      <Header logged={userLogged} />
      <Routes  >
        <Route exact  path="" element={<Landing />} />
        <Route  path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
