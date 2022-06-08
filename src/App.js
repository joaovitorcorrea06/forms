import React, { startTransition, useEffect, useRef, useState } from 'react'
import { Form } from '@unform/web'
import './App.css'
import Input from './Form/Input'
import Contato from './models/contato.model'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, FormLabel, Modal } from 'react-bootstrap'
import TableContato from './table/table'
import ModalRegister from './modal'
import { useForm } from 'react-hook-form'

const App = () => {

  const [listaContatos, setListaContatos] = useState([]);
  const [exibirModal, setExibirModal] = useState (false);
  const [showTable, setShowTable] = useState (false);

    useEffect(() => {
      start();
      // geraId(id);
    }, [listaContatos]);

    // function geraId(id){
    //   id +=1;
    // }


  function start(){

    let contatosDb = localStorage['contatos'];

    if (!contatosDb){
      setShowTable(false);
    } 
    else{
       setShowTable(true);
    }
  }

  function handleAbrirModal(event) {
    setExibirModal(true);

  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);


  return ( 
    <div  className='text-center'>
      <div className="">
      <Button onClick={handleAbrirModal} className='mt-2 mb-2 ' size="lg">Register</Button>
      </div>

      <ModalRegister exibirModal={exibirModal}/>

      {showTable ? <TableContato dados={listaContatos}></TableContato> : 
      <div>
      <h1>Your list is empty!</h1>
      <p>Register a contact to continue</p>
      </div>
      }
        
    </div>
  )
}

export default App