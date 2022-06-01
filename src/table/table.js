import {Table, Container} from "react-bootstrap";

function TableContato () {

    let listaContatos = JSON.parse(localStorage.getItem("contatos"));

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
          <tr>
            <td>{listaContatos.name}</td>
            <td>{listaContatos.tel}</td>
            <td>{listaContatos.city}</td>
            <td>{listaContatos.state}</td>
            <td>{listaContatos.country}</td>
          </tr>
        </tbody>
        </Table>
      </Container>
    )
}

export default TableContato;