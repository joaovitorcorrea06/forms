import { Button, Form } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form className='text-center'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form>
      <Button> Cadastrar </Button>
    </div>
  );
}

export default App;
