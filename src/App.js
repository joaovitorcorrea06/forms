import { Button, Container, Form, Jumbotron } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <Container fluid >
          <Form className='text-center'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form>
          <Button> Cadastrar </Button>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
