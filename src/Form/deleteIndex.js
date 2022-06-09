function deleteIndex(props){
    const contatosDb = localStorage['contatos'];
    let contatos = contatosDb ? JSON.parse(contatosDb) : [];
    contatos = contatos.filter(contato => contato.index !== props.contato);
    localStorage['contatos'] = JSON.stringify(contatos);
  }

export default deleteIndex;