console.log("recibo.js");

var form = document.getElementById('formulario');
//BUSCANDO FORM OS VALORES INSERIDOS (SET):

/*
var data = document.getElementById('setData');
var valor = document.getElementById('setValor');
var cliente = document.getElementById('setCli');
var docCliente = document.getElementById('setDocCli');
var descricao = document.getElementById('setDescricao');
var emissor = document.getElementById('setEmissor');
var docEmissor = document.getElementById('setDocEmissor');
//BUSCANDO OS METODS GETS CAMPOS APOS INSERIR VALOR (GET):
var getData = document.getElementById('getData');
var getValor = document.getElementById('getValor');
var getCli = document.getElementById('getCli');
var getDocCli = document.getElementById('getDocCli');
var getDescricao = document.getElementById('getDescricao');
var getEmissor = document.getElementById('getEmissor');
var getDocEmissor = document.getElementById('getDocEmissor');
var pagina = document.getElementById('pData');
*/
// LOCAL STORAGE SET ITEM: 
function set() {
    /*
    localStorage.setItem("data", data.value);
    localStorage.setItem("valor", valor.value);
    localStorage.setItem("cliente", cliente.value);
    localStorage.setItem("docCliente", docCliente.value);
    localStorage.setItem("descricao", descricao.value);
    localStorage.setItem("emissor", emissor.value);
    localStorage.setItem("docEmissor", docEmissor.value);
    */

    var dados = JSON.stringify({
        data: document.querySelector("input[name=data]").value,
        valor: document.querySelector("input[name=valor]").value,
        cliente: document.querySelector("input[name=cliente]").value,
        docCliente: document.querySelector("input[name=docCliente]").value,
        referente: document.querySelector("input[name=descricao]").value,
        emissor: document.querySelector("input[name=emissor]").value,
        docEmissor: document.querySelector("input[name=docEmissor]").value
    });
    localStorage.setItem("recibodb", JSON.stringify(dados));
};
// LOCAL STORAGE GET ITE M: 
function get() {
    //Pega o registro STORAGE no localstorage.
    var registro = localStorage.getItem("recibodb");
    var parse = JSON.parse(registro);
    var db = JSON.parse(parse);
    console.log(db.data);
    console.log(db.valor);
    console.log(db.cliente);
    console.log(db.docCliente);
    console.log(db.referente);
    console.log(db.emissor);
    console.log(db.docEmissor);
    $("#pData").text(db.data);
    $("#pValor").text(db.valor);
    $("#pCliente").text(db.cliente);
    $("#pDocCli").text(db.docCliente);
    $("#pReferente").text(db.referente);
    $("#pEmissor").text(db.emissor);
    $("#pDocEmissor").text(db.docEmissor);


}







//mascara valor:
$('#setValor').keypress(function () {
    $(this).mask('R$ ###.##0,00', { reverse: true });
});

//mascara   cpf/cnpj:
$(document).on('keydown', '[data-mask-for-cpf-cnpj]', function (e) {

    var digit = e.key.replace(/\D/g, '');

    var value = $(this).val().replace(/\D/g, '');

    var size = value.concat(digit).length;

    $(this).mask((size <= 11) ? '000.000.000-00' : '00.000.000/0000-00');
});



form.addEventListener('submit', function (e) {
    // a o apertar botao imprime e muda dados 
    /*
    if (data.value == "") {
        console.log("vazio");
        getData.innerText = hoje.split('-').reverse().join('/');
    } else {
        getData.innerText = data.value.split('-').reverse().join('/');
    }

    // formatando valor
    getValor.innerText = valor.value;
    getCli.innerText = cliente.value;
    getDocCli.innerText = docCliente.value;
    getDescricao.innerText = descricao.value;
    getEmissor.innerText = emissor.value;
    getDocEmissor.innerText = docEmissor.value;
    var printBlock = $(this).parents('.print').siblings('.print');
    printBlock.hide();
    $("footer").hide();
    document.getElementById("print").style.display = 'block';
    window.print();
    printBlock.show();
    document.getElementById("print").style.display = 'none';
    $("footer").show();
    // impede o envio do form
    */

    set();

});

function celbtn() {
    window.location.href = '../../index.html';
}
