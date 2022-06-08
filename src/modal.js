import { useRef, useState } from "react";
import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

function ModalRegister(props){

    const [exibirModal, setExibirModal] = useState (false);
    const [listaContatos, setListaContatos] = useState([]);

    const { register, handleSubmit } = useForm();

    function handleFecharModal(){
       setExibirModal(false);
    }
  
    // const formRef = useRef(null)

    const onSubmit = data => {
    
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
        props.exibirModal(false);
        // setId({id}+1);
    
      }


return(
    <Modal show={props.exibirModal}  onHide={props.fecharModal} className='text-center' >
       <Modal.Header closeButton>
           <Modal.Title>Register:</Modal.Title>
       </Modal.Header>
       <Modal.Body className='text-center'>
         <Form onSubmit={handleSubmit(onSubmit)} className="justify-between">
           <label>Data:</label><br></br>
           <input className='mt-2'{...register("name")}  placeholder="Insert your name"/><br></br>
           <input className='mt-2'{...register("tel")} placeholder="Tel" /><br></br>
           <input className='mt-2'{...register("city")} placeholder="City"/><br></br>
           <input className='mt-2'{...register("state")}  placeholder="State"/><br></br>
           <input className='mt-2'{...register("country")}  placeholder="Country"/><br></br>

           <button className='mt-2 mb-2' variant="danger" type="submit">Save</button>
        </Form>
      </Modal.Body>
      </Modal> 
)
}
export default ModalRegister;