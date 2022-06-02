import { useState } from "react";
import {Table, Container, Button, Modal, FormLabel, Form} from "react-bootstrap";
import Input from "../Form/Input";

function TableContato (props) {

    const [exibirModal, setExibirModal] = useState (false);

    function handleAbrirModal(event) {
      event.preventDefault();
      setExibirModal(true);
    }
    
    function handleFecharModal(){
      setExibirModal(false);
    }

    function deleteIndex(dados){
      localStorage.removeItem(dados);

    }

    let listaContatos = JSON.parse(localStorage.getItem('contatos'));

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
          {listaContatos.map(dados =>
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
            onClick={deleteIndex}
            >X</Button></td>
            
            <Modal show={exibirModal}  onHide={handleFecharModal}>
            <Modal.Header closeButton>
                <Modal.Title>DADOS:</Modal.Title>
            </Modal.Header>
              <Form className="justify-between">
                <FormLabel>Cadastro:</FormLabel>
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