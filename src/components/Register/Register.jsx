import './Register.css';
import { Link } from 'react-router-dom';

function Register(props){
    const handleForm = (e)=>{
        

    }
    return (
        <div id="register">
            <form onSubmit={handleForm()}>
                <h1>Registrarse</h1>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder='Ingrese Email'/>

                <label htmlFor="password">Contraseña</label>
                <input type="text" name='password' placeholder='Ingrese Contrasea'/>

                <label htmlFor="password">Contraseña</label>
                <input type="text" name='password' placeholder='Ingrese Contrasea'/>

                <input type="submit" value="Iniciar Sesion" />

                <Link to="/register">
                    ¿Aun no tienes una cuenta? Crea una
                </Link>
                


            </form>
        </div>
    );
}

export default Register;