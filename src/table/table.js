import { useState } from "react";
import {Table, Container} from "react-bootstrap";

function TableContato (props) {

    const [carregar, setCarregar] = useState(true);



    let listaContatos = JSON.parse(localStorage.getItem('contatos'));

    // console.log(dados)

    return(
    <Container fluid>
        <Table bordered striped hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
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
            </tr>
          )}
            {/* <td>{listaContatos.name}</td>
            <td>{listaContatos.tel}</td>
            <td>{listaContatos.city}</td>
            <td>{listaContatos.state}</td>
            <td>{listaContatos.country}</td> */}
            {/* <td>oi</td> */}
        </tbody>
        </Table>
      </Container>
    )
}

export default TableContato;