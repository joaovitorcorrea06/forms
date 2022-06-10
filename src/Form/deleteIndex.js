function deleteIndex(index){
    const contatosDb = localStorage['contatos'];
    let contatos = contatosDb ? JSON.parse(contatosDb) : [];
    if (contatos.length > 0)
      contatos = contatos.map((contato,index) => {if (index !== index) return contato});
    localStorage['contatos'] = JSON.stringify(contatos);
  }

export default deleteIndex;