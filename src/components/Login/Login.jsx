import './Login.css';
import { Link } from 'react-router-dom';

function Login(props){
    const handleForm = (e)=>{
        

    }
    return (
        <div id="login">
            <form onSubmit={handleForm()}>
                <h1>Iniciar Sesion</h1>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder='Ingrese Email'/>

                <label htmlFor="password">Contraseña</label>
                <input type="text" name='password' placeholder='Ingrese Contraseña'/>

                <input type="submit" value="Iniciar Sesion" />

                <Link to="/register">
                    ¿Aun no tienes una cuenta? Crea una
                </Link>
                


            </form>
        </div>
    );
}

export default Login;