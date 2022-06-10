import { useState } from "react";
import {Table, Container, Button, Modal, FormLabel, Form} from "react-bootstrap";
import deleteIndex from "../Form/deleteIndex";

function TableContato () {

    let listaContatos = JSON.parse(localStorage.getItem('contatos'));

    const [exibirModal, setExibirModal] = useState (false);

    function handleAbrirModal(event) {
      event.preventDefault();
      setExibirModal(true);
    }
    
    function handleFecharModal(){
      setExibirModal(false);
    }
    // console.log(dados)

    return(
    <Container fluid>
        <Table bordered striped hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>All</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listaContatos.map((dados,index) =>
            <tr>
            <td>{dados.name}</td>
            <td>{dados.tel}</td>
            <td>{dados.city}</td>
            <td>{dados.state}</td>
            <td>{dados.country}</td>
            <td><Button
            onClick={handleAbrirModal}
            >?</Button></td>

            <td><Button variant="danger"
            onClick={()=>deleteIndex(index)} 
            >X</Button></td>
            
            <Modal show={exibirModal}  onHide={handleFecharModal}>
            <Modal.Header closeButton>
                <Modal.Title><label>Dados</label></Modal.Title>
            </Modal.Header>
              <Form className="justify-between">
                <FormLabel>Cadastro:</FormLabel>
                <p>Nome: {dados.name}</p>
                <p>Telefone: {dados.tel}</p>
                <p>City: {dados.city}</p>
                {/* <Input className='mt-2' name="name" type = "text" placeholder={dados.name}/>
                <Input className='mt-2' name="tel" type = "tel"  placeholder={dados.tel}/>
                <Input className='mt-2' name="city" type = "text" placeholder={dados.city}/>
                <Input className='mt-2' name="state" type = "text" placeholder={dados.state}/>
                <Input className='mt-2' name="country" type = "text" placeholder={dados.country}/> */}

                {/* <Button className='mt-2 mb-2' variant="danger"type="submit">Save</Button> */}
              </Form>
            </Modal>
            </tr>
          )}

            {/* <td>{listaContatos.name}</td>
            <td>{listaContatos.tel}</td>
            <td>{listaContatos.city}</td>
            <td>{listaContatos.state}</td>
            <td>{listaContatos.country}</td> */}
        </tbody>
        </Table>
      </Container>
    )
}

export default TableContato;