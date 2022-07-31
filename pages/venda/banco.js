function bd() {

    var empresa = JSON.stringify({
        nome: "WF-TECH DEVELOPER",
        cnpj: "43.652.172/0001-52",
        fone: "11 95316-4286",
        endereco: {
            rua: "Rua Vida e Arte",
            numero: "61",
            cidade: "ARUJA",
            cep: "07.400-290",
            bairro: "CENTRO",
        }

    });



    localStorage.setItem("empresa", JSON.stringify(empresa));

    //Pega o registro STORAGE no localstorage.
    var registro = localStorage.getItem("empresa");

    var parse = JSON.parse(registro);

    var db = JSON.parse(parse);

    console.log(db.endereco.cidade);

}

