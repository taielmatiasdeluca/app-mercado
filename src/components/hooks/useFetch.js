import { useState, useEffect } from 'react';


export function useFetch(url,context){
    const [data,setData] = useState(null);

    const getFetch = async () =>{

        fetch(url,context)
        .then((response) => response.json())
        .then(data=>setData(data))
    }

    useEffect(()=>{
        getFetch();
    },[url]);

    return {data};    
}