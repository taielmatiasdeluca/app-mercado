import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";


function logout(){
    console.log('hola soy logout')
}

function Header(props) {

    const navigate = useNavigate();

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
            <Link to="/">
                <div className="logo">
                    App Mercado
                </div>
            </Link>
            <form className="seacher"  onSubmit={handleSearch}>
                
                <input type="text" placeholder='Buscar Productos' value={search} onChange={e=>{setSearch(e.target.value)}} />
                
                <span className="material-symbols-outlined" onClick={handleSearch} >
                    search
                </span>
              
            </form>
            <div className="controls">
                {props?.logged && (
                    <span onClick={logout()} className="material-symbols-outlined">
                        logout
                    </span>
                )}
                {!props?.logged && (
                    <Link to="/login">
                        <span  className="material-symbols-outlined">
                            login
                        </span>
                    </Link>
                    
                )}
                <span className="material-symbols-outlined" onClick={()=>{toggleCart()}
                    
                }>
                    shopping_cart
                </span>
                    

            </div>
        </header>
        
        <div id="carrito" className={cart}>
            <h1>Soy carrito re capo</h1>
        </div>
        
       
        </>
    );
  }
  
export default Header;
  