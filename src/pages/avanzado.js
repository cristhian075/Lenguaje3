import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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
  },
];

const baseUrl="http://localhost:4000/usuarios/api/listarusuario";
const baseUrl2="http://localhost:4000/usuarios/api/agregarusuario";

const useStyles = makeStyles((theme) =>({  
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px soild #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  icon: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%'
  }
}));

function Avanzado() {
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id_usuario:"",
    nombres:"",
    apellidos:"",
    n_telefono:"",
    correo:"",
    direccion:"",
  })

  const handleChange=e=>{ 
    const {name, value}=e.target;
    setUsuarioSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{  
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data); 
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl2, usuarioSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    })
  }

  useEffect(()=>{  
    peticionGet();
  }, [])

  const abrirCerrarModalInsertar=()=>{ 
    setModalInsertar(!modalInsertar);
  }

  const bodyInsertar =(
    <div className={styles.modal}>
      <h3>Insertar usuario</h3>
       <TextField className={styles.inputMaterial} label='nombres' name="nombres" onChange={handleChange} />
       <br />
       <TextField className={styles.inputMaterial} label='Apellidos' name="apellidos" onChange={handleChange}/>
       <br />
       <TextField className={styles.inputMaterial} label='Telefono' name="n_telefono" onChange={handleChange}/>
       <br />
       <TextField className={styles.inputMaterial} label='Correo' name="correo" onChange={handleChange}/>
       <br />
       <TextField className={styles.inputMaterial} label='Direccion' name="direccion" onChange={handleChange}/>
       <br />
       <div align="right">
         <Button onClick={()=>peticionPost()}>Insertar</Button>
         <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
       </div>
    </div>
  )

  return (
    <div>
    <Button onClick={()=>abrirCerrarModalInsertar()} >Insertar Usuario</Button>
    <MaterialTable  
      columns={columnas}  
      data={data}  
      title="Usuarios"
    />
    <Modal
      open={modalInsertar}
      onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
    </Modal>
  </div>
  );
}

export default Avanzado;
