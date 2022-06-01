import React, { useRef } from 'react'
import { Form } from '@unform/web'
import './App.css'
import Input from './Form/Input'
import Contato from './models/contato.model'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, FormLabel, Table } from 'react-bootstrap'
import TableContato from './table/table'

const App = () => {
  const formRef = useRef(null)

  const handleFormSubmit = data => {
    console.log(data);

    //  const contatosDb = localStorage['contatos'];
    //  const contatos = contatosDb ? JSON.parse(contatosDb) : [];

    //  contatos.push(new Contato(formRef.getData(data)));
    localStorage['contatos'] = JSON.stringify(data);

  }

  return (
    <div className='text-center'>
      <Form ref={formRef} onSubmit={handleFormSubmit} className="justify-between">
        <FormLabel>Cadastro:</FormLabel>
        <Input className='mt-2' name="name" placeholder="Insert your name"/>
        <Input className='mt-2' name="tel" type = "tel"  placeholder="Tel"/>
        <Input className='mt-2' name="city"  placeholder="City"/>
        <Input className='mt-2' name="state"  placeholder="State"/>
        <Input className='mt-2' name="country"  placeholder="Country"/>

        <Button className='mt-2' variant="danger"type="submit">Save</Button>
      </Form>
      <TableContato/>
    </div>
  )
}

export default App