import { useFetch } from "../hooks/useFetch";
import  { Navigate } from 'react-router-dom'

function Block() {
    //From pathname divided it by / then get the last and then make it string
    const token = (window.location.pathname).split('/').slice(-1)[0]
    const {data} = useFetch(`https://ecommerce.taieldeluca.com.ar/api/user/activate/${token}`);
    return <Navigate to='/login?activate=success' />
}
  
export default Block;
  