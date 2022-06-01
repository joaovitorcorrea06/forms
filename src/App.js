import React, { useRef } from 'react'
import { Form } from '@unform/web'

import Input from './Form/Input'
import Contato from './models/contato.model'

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
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Input name="name" placeholder="Insert your name"/>
      <Input name="tel"  placeholder="Tel"/>
      <Input name="city"  placeholder="City"/>
      <Input name="state"  placeholder="State"/>
      <Input name="country"  placeholder="Country"/>

      <button type="submit">Save</button>
    </Form>
  )
}

export default App