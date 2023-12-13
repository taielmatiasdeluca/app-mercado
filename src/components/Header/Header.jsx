import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import logo from '../../static/images/cart_white.svg'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



function Header(props) {
 
    

    const navigate = useNavigate();

    async function Logout(){
        localStorage.setItem("logged", false);
        const response = await fetch('https://ecommerce.taieldeluca.com.ar/api/user/logout');
        const data = await response.json();
        console.log(data);
        navigate('/login')
    }

    if(!localStorage.getItem('logged')){
        localStorage.setItem("logged", false);

    }
    

    const [cart,openCart] = useState('collapsed');

    const [search,setSearch] = useState('');

    const toggleCart = () =>{
        if(cart == 'collapsed'){
            openCart('');
        }
        else{
            openCart('collapsed');
        }
    }   

    const handleSearch =(e) => {
        e.preventDefault();
        navigate('/search/'+search);
    }

   


    return (
        <>
        <header>
            <Tooltip id="tooltip_header" />
            <Link to="/">
                <img src={logo} className="logo" alt="" />
            </Link>
            <form className="seacher"  onSubmit={handleSearch}>
                
                <input type="text" placeholder='Buscar Productos' value={search} onChange={e=>{setSearch(e.target.value)}} />
                
                <span className="material-symbols-outlined" onClick={handleSearch} >
                    search
                </span>
              
            </form>
            <div className="controls">
                
                {(localStorage.getItem("logged") == 'false') && (
                    <Link to="/login">
                        <span  className="material-symbols-outlined" data-tooltip-id="tooltip_header" data-tooltip-content="Iniciar Sesion" >
                            login
                        </span>
                    </Link>
                    
                )}
                <span className="material-symbols-outlined" data-tooltip-id="tooltip_header" data-tooltip-content="Carrito" onClick={()=>{toggleCart()}}>
                    shopping_cart
                </span>
                {(localStorage.getItem("logged") == 'true') && (
                    <>
                        <Link to="/new">
                            <span className="material-symbols-outlined" data-tooltip-id="tooltip_header" data-tooltip-content="Nueva Publicacion">
                                add
                            </span>
                        </Link>
                    
                        <span onClick={Logout} className="material-symbols-outlined" data-tooltip-id="tooltip_header" data-tooltip-content="Cerrar Sesion">
                            logout
                        </span>
                       
                    </>
                )}
                    

            </div>
        </header>
        
        <div id="carrito" className={cart}>
            <h1>Soy carrito re capo</h1>
        </div>
        
       
        </>
    );
  }
  
export default Header;
  