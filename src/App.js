import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import TableContato from './table/table'
import ModalRegister from './modal'

const App = () => {

  const [listaContatos, setListaContatos] = useState([]);
  const [exibirModal, setExibirModal] = useState (false);
  const [showTable, setShowTable] = useState (false);

    useEffect(() => {
      start();
      // geraId(id);
    }, [listaContatos,showTable]);

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

  function handleAbrirModal() {
    setExibirModal(true);
  }


  return ( 
    <div  className='text-center'>
      <div className="">
      <Button onClick={handleAbrirModal} className='mt-2 mb-2 ' size="lg">Register</Button>
      </div>

      <ModalRegister exibirModal={exibirModal} fecharModal={()=> setExibirModal(false)}/>

      {showTable ? <TableContato dados={listaContatos}></TableContato> : 
      <div>
      <h1 className='glitch'>Your list is empty!</h1>
      <p className='glitch'>Register a contact to continue</p>
      </div>
      }
        
    </div>
  )
}

export default App