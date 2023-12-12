import './Login.css';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import ReactLoading from 'react-loading';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


function Login(props){
    const navigate = useNavigate();

    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const [loading,setLoading] = useState(false);

    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)


   

    const handleForm = async (e)=>{
        e.preventDefault();
        const data = new FormData(document.getElementById('main__form'));
        const email = data.get('email');
        

        if(!validateEmail(email)){
            setError('Ingrese un email valido');
            return;
        }
        setLoading(true);
        const response = await fetch('https://ecommerce.taieldeluca.com.ar/api/user/login',{
            method:'post',
            body:data
        });

        const info = await response.json();
        
        if(info.errno == 400){
            localStorage.setItem("logged", true);
            navigate('/');
        }
        else{
            setSuccess('');  
            setError(info.error); 


        }
        setLoading(false);

        
        



        

    }
    return (
        <div id="login" className='section'>
            <form id='main__form' onSubmit={handleForm}>
                <h1>Iniciar Sesion</h1>
                
                <div className="success">
                    {queryParameters.get('activate') && (
                        <>
                        Se activo con exito ahora debe iniciar sesion
                        </>

                    )}

                    {success}

                </div>
                <div className="error">
                    {error}
                </div>

                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder='Ingrese Email'/>

                <label htmlFor="password">Contraseña</label>
                <input type="password" name='password' placeholder='Ingrese Contraseña'/>

                <a onClick={handleForm} className='formButton'>
                    {loading && (
                        <ReactLoading type='bubbles' className='loading' color="#fff" />
                    )}
                    {!loading && (
                        <>
                        Iniciar Sesion
                        </>
                    )}

                </a>

                <Link to="/register">
                    ¿Aun no tienes una cuenta? Crea una
                </Link>
                


            </form>
        </div>
    );
}

export default Login;