import './New.css';
import { useState , useEffect } from 'react';
import { AnimateOnChange , AnimateGroup } from 'react-animation'
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import {useFetch} from '../hooks/useFetch';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function New() {

 
  const [openModal, setOpenModal] = useState(false);
  const [information,setInformation] = useState([]);
  const [DLValue,setDLValue] = useState('');

  let  {data:caracteristicas} = useFetch("http://ecommerce.taieldeluca.com.ar/api/info/get")
 
  function handleItem(e){
    const newData = {id:e.id,name:e.value}
    
    if(information.find(item => item.id == newData.id)){
      console.log('capo');

      NotificationManager.error('Esa caracteristica ya ha sido ingresada', 'Error', 5000, () => {
      
      });
    }
    else{
      setInformation([...information,newData])
    }
  }

  return (
      <>
      <NotificationContainer></NotificationContainer>
      <AnimateOnChange>
        <div id="modal" className={!openModal && "modalHidden"}>
          <div id="closer" className="button">
          <span className="material-symbols-outlined" onClick={() => setOpenModal(!openModal)}>
           close
          </span>
          </div>

        </div>
      </AnimateOnChange>

   
      <div className="new">
      <div className="title">
        <h1>Crear una publicacion</h1>
      </div>
      
     
      <div className="details">
        <h2>
          Datos del producto
        </h2>
        <a className='buttonA' onClick={() => setOpenModal(!openModal)} >¡Buscar entre productos ya cargados!</a>


        <form onSubmit={(e)=>{e.preventDefault();}} >   
          <div className="item">
            <label htmlFor="">
              Titulo
            </label>
            <input type="text" name='titulo' />
          </div>
          <div className="item">
            <label htmlFor="">
              Descripcion
            </label>
            <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
          </div>
        </form>

        
        <h2>Mas Datos</h2>
      
        <form onSubmit={(e)=>{e.preventDefault();}} className="information">
          <div className="item datalist_container">
            {caracteristicas && (
              <DatalistInput
                placeholder="Marca"
                label="Agregar mas datos"
                className='datalist'
                value={DLValue}
                

                
                
                
                onSelect={(item) => {
                  handleItem(item)
                  setDLValue('');
                  console.log(DLValue)
                  
                
                  
                }}

                items={caracteristicas.map(item=>{
                  return {id:item.idInfo,value:item.info}
                })}
              />
            )}
            <button>Agregar</button>
          </div>

          <AnimateOnChange animation="slideIn" >
            {information.map(item=>{
                return <div key={item.id} className="item">
                    <label htmlFor="">{item.name}</label>
                    <input type="text" name="" id=""  />


                  </div>
            })}
          </AnimateOnChange>
        </form>
      


      </div>
      
      </div>
      </>
  );
}
  
export default New;
  