console.log("recibo.js");

var form = document.getElementById('formulario');
//BUSCANDO FORM OS VALORES INSERIDOS (SET):

const date = new Date();
const hoje = date.toLocaleDateString();
console.log(hoje);
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
    document.getElementById("print").style.display = 'block';
    window.print();
    printBlock.show();
    document.getElementById("print").style.display = 'none';
    // impede o envio do form
    e.preventDefault();
});

function celbtn() {
    window.location.href = '../../index.html';
}
