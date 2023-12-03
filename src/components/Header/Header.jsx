import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

function logout(){
    console.log('hola soy logout')
}

function Header(props) {
    const [cart,openCart] = useState('collapsed');

    const toggleCart = () =>{
        if(cart == 'collapsed'){
            openCart('');
        }
        else{
            openCart('collapsed');
        }
    }


    return (
        <>
        <header>
            <Link to="/">
                <div className="logo">
                    App Mercado
                </div>
            </Link>
            <div className="seacher">
                <input type="text" placeholder='Buscar Productos' />
                <span className="material-symbols-outlined">
                    search
                </span>
            </div>
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
  