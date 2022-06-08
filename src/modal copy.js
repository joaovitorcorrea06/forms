import { useRef, useState } from "react";
import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import Input from "./Form/Input";

function ModalRegister(props){

    const [exibirModal, setExibirModal] = useState (false);
    const [listaContatos, setListaContatos] = useState([]);

    function handleFecharModal(){
        setExibirModal(false);
    }
  
    // const formRef = useRef(null)

    const handleFormSubmit = data => {
    
        let contatosDb= localStorage['contatos'];
        // let contatosDb = JSON.parse(localStorage['contatos']);
    
        if (!contatosDb){
          contatosDb = [];
        } 
        else{
           contatosDb = JSON.parse(localStorage['contatos']);
        }
      
        contatosDb.push(data);
        //  const contatos = contatosDb ? JSON.parse(contatosDb) : [];
    
        //  contatos.push(new Contato(formRef.getData(data)));
        localStorage['contatos'] = JSON.stringify(contatosDb);
        setListaContatos(contatosDb);
    
        // formRef.current.setFieldValue('id','');
        // formRef.current.setFieldValue('name', '');
        // formRef.current.setFieldValue('tel', '');
        // formRef.current.setFieldValue('city', '');
        // formRef.current.setFieldValue('state', '');
        // formRef.current.setFieldValue('country', '');
        setExibirModal(false);
        // setId({id}+1);
    
      }


return(
    <Modal show={props.exibirModal}  onHide={handleFecharModal} className='text-center' >
       <Modal.Header closeButton>
           <Modal.Title>Register:</Modal.Title>
       </Modal.Header>
         <Form onSubmit={handleFormSubmit} className="justify-between">:
           <FormLabel>Data:</FormLabel>
           <Input className='mt-2' name="name"  placeholder="Insert your name"/>
           <Input className='mt-2' name="tel" type = "tel"  placeholder="Tel"/>
           <Input className='mt-2' name="city"  placeholder="City"/>
           <Input className='mt-2' name="state" placeholder="State"/>
           <Input className='mt-2' name="country"  placeholder="Country"/> 

           <Button className='mt-2 mb-2' variant="danger" type="submit">Save</Button>
        </Form>
      </Modal>
)
}
export default ModalRegister;