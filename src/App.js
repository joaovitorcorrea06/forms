import React, { useRef } from 'react'
import { Form } from '@unform/web'

import Input from './Form/Input'

const App = () => {
  const formRef = useRef()

  const handleFormSubmit = data => {
    console.log(data)
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