import { useFetch } from "../hooks/useFetch";
import  Redirect, { Navigate } from 'react-router-dom'

function Activate() {
    //From pathname divided it by / then get the last and then make it string
    const token = (window.location.pathname).split('/').slice(-1)[0]
    const {data} = useFetch(`https://ecommerce.taieldeluca.com.ar/api/user/activate/${token}`);
    return <Navigate to='/login?activate=success' />
  }
  
export default Activate;
  