function Contato (id,nome,tel,city,state,country ){

    this.id = id;
    this.nome = nome;
    this.tel = tel;
    this.city = city;
    this.state = state;
    this.country = country;


    return {
        id: id,
        nome: nome,
        tel: tel,
        city: city,
        state: state,
        country: country,  
    };
}

export default Contato;