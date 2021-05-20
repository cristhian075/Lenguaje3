import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const columnas = [ 
  {
    title:'ID', 
    field:'id_usuario' 
  },
  {
    title:'Nombres',
    field:'nombres'
  },
  {
    title:'Apellidos',
    field:'apellidos'
  },
  {
    title:'Correo',
    field:'correo'
  },
  {
    title:'Direccion',
    field:'direccion'
  }
];

const columnas2 = [
  {
    title:'ID',
    field:'id_ciudad'
  },
  {
    title:'Pueblo/corregimiento',
    field:'ciudad'
  }
];

const baseUrl="http://localhost:4000/usuarios/api/listarusuario";
const baseUrl2="http://localhost:4000/ciudades/api/listarciudad";
  

  const Basico = () => {
    const [data, setData] = useState([]); 

    const peticionGet=async()=>{  
      await axios.get(baseUrl)
      .then(response=>{
        setData(response.data); 
      })
    }
  
    useEffect(()=>{  
      peticionGet();
    }, [])

    const [data2, setData2] = useState([]);

  const peticionGet2=async()=>{
    await axios.get(baseUrl2)
    .then(response=>{
      setData2(response.data);
    })
  }

  useEffect(()=>{
    peticionGet2();
  }, [])
  
  return (
    <div>
    <MaterialTable  
      columns={columnas}  
      data={data}  
      title="Usuarios"
    />
    <MaterialTable
      columns={columnas2}
      data={data2}
      title="Municipios"
    />
  </div>
  );
}


export default Basico;
