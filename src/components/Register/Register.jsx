import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactLoading from 'react-loading';


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function Register(props){
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const [loading,setLoading] = useState(false);

    const handleForm = async (e)=>{
        e.preventDefault();
        const data = new FormData(document.getElementById('main__form'));
        const email = data.get('email');
        const password = data.get('password');
        const repeat_password = data.get('repeat_password');

        if(!validateEmail(email)){
            setError('Ingrese un email valido');
            return;
        }

        if(password !== repeat_password){
            setError('Las contraseñas no son iguales');
            return;
        }
        setLoading(true);
        const response = await fetch('https://ecommerce.taieldeluca.com.ar/api/user/register',{
            method:'post',
            body:data
        });
        const info = await response.json();
        if(info.errno == 400){
            setError(''); 
            setSuccess('Se registro! Verifique su casilla de correo electronico');  
        }
        else{
            setError(info.error);
            setSuccess('');  

        }
        setLoading(false);

        
    }
    
    return (
        <div id="register" className='section'>
            <form id='main__form' onSubmit={handleForm}>

                <h1>Registrarse</h1>
                <div className="error">
                    {error}
                </div>
                <div className="success">
                    {success}
                </div>

                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder='Ingrese Email'/>

                <label htmlFor="password">Contraseña</label>
                <input type="password" name='password' placeholder='Ingrese contraseña'/>

                <label htmlFor="password">Contraseña</label>
                <input type="password" name='repeat_password' placeholder='Repetir contraseña'/>

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

               


                <Link to="/login">
                    ¿Ya tienes una cuenta? Ingresa sesion
                </Link>
                


            </form>
        </div>
    );
}

export default Register;