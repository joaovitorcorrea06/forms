function deleteIndex(indexx){
    const contatosDb = localStorage['contatos'];
    let contatos = contatosDb ? JSON.parse(contatosDb) : [];
    if (contatos.length > 0)
      contatos = contatos.map((contato,index) => {if (index !== indexx) return contato});
    localStorage['contatos'] = JSON.stringify(contatos);
  }

export default deleteIndex;