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
  const [producto,setProducto] = useState('');

  let {data:productos} = useFetch("https://ecommerce.taieldeluca.com.ar/api/product/get")
  let  {data:caracteristicas} = useFetch("https://ecommerce.taieldeluca.com.ar/api/info/get")
  
  function handleItem(e){
    const newData = {id:e.id,name:e.value}
    console.log(information)
    console.log(newData)
    if(information.find(item => item.name == newData.name)){
      console.log('capo');
      NotificationManager.error('Esa caracteristica ya ha sido ingresada', 'Error', 5000, () => {
      
      });
    }
    else{
      setInformation([...information,newData])
    }
  }

  async function handleForm (event){
    event.preventDefault();
    const data = new FormData(document.getElementById('main__form'));
    const files =  document.getElementById('fileInput').files;
    for (let i = 0; i < files.length; i++) {
      data.append(files[i].name,files[i]);      
    }
    if(producto == ''){
      setProducto(document.getElementById('hidden__product').value)
    }
    
    const response = await fetch('https://ecommerce.taieldeluca.com.ar/api/publicacion/create',
    {
      method:'post',
      body:data,

    });
    console.log(await response.text())
      //const info = await response.json();
   
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
        

        <form onSubmit={handleForm} id='main__form' encType="multipart/form-data" > 
          <div className="item datalist_container">
            <input type="hidden" name="producto" id='hidden__product' value={producto}/>

            {productos && (
              <DatalistInput
                placeholder="Buscar entre productos ya ingresados"
                label="Producto"
                className='datalist'
                onSelect={(item) => {
                  setProducto(item.id);
                }}
                items={productos.map(item=>{
                  return {id:item.id,value:item.nombre}
                })}
              />
            )}
          </div>

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
          <div className="item">
            <label htmlFor="">
              Imagen
            </label>
            <input type="file" name="imagen" accept="image/*"  multiple id="fileInput" />
          </div>


          <div className="subtitle">
            <h2>
              Datos del producto
            </h2>
          </div>
        

      
          <div className="item datalist_container">
            {caracteristicas && (
              <DatalistInput
                placeholder="Marca"
                label="Agregar mas datos"
                className='datalist'
                value={DLValue}
                
                onChange={(e)=>{
                  setDLValue(e.target.value);
                }}
                onSelect={(item) => {
                  handleItem(item);
                  setDLValue(item.value);
                
                  
                
                  
                }}

                items={caracteristicas.map(item=>{
                  return {id:item.idInfo,value:item.info}
                })}
              />
            )}
            <button onClick={(event)=>{
              event.preventDefault();
              handleItem({id:DLValue,value:DLValue})
              }}>Agregar</button>
          </div>

          <AnimateOnChange animation="slideIn" >
            {information.map(item=>{
                return <div key={item.id} className="item">
                  
                    <label htmlFor="">
                      {item.name}
                      <span onClick={()=>{
                        setInformation(information.filter(((i)=>i.name != item.name)));
                      }} className="minus_item material-symbols-outlined">
                        remove
                      </span>
                    </label>
                    {item.id && (
                      <input type="text" name={item.id} id=""  />
                    )}
                    {!item.id && (
                            <input type="text" name={item.name} id=""  />
                    )}


                  </div>
            })}
          </AnimateOnChange>
          
          <button className='submit_button' type="submit">
            Publicar
          </button>

        </form>
      


      </div>
      
      </div>
      </>
  );
}
  
export default New;
  