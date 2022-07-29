console.log("recibo.js");
const date = new Date();
var SetdataNow = date.toLocaleDateString();
var setData = document.getElementById("setData");
var getData = document.getElementById("getData");
var setValor = document.getElementById("setValor");
var getValor = document.getElementById("getValor");
var setCliente = document.getElementById("setCliente");
var getCliente = document.getElementById("getCliente");
var setClienteDoc = document.getElementById("setClienteDoc");
var getClienteDoc = document.getElementById("getClienteDoc");
var setReferente = document.getElementById("setReferente");
var getReferente = document.getElementById("getReferente");
var setEmissor = document.getElementById("setEmissor");
var getEmissor = document.getElementById("getEmissor");
var setEmissorDoc = document.getElementById("setEmissorDoc");
var getEmissorDoc = document.getElementById("getEmissorDoc");


$("#print").submit(function (e) {
    if (setData.value == "") {
        getData.innerText = SetdataNow.split('-').reverse().join('/');
    } else {
        getData.innerText = setData.value.split('-').reverse().join('/');;
    }
    getValor.innerText = setValor.value;
    getCliente.innerText = setCliente.value;
    getClienteDoc.innerText = setClienteDoc.value;
    getReferente.innerText = setReferente.value;
    getEmissor.innerText = setEmissor.value;
    getClienteDoc.innerText = setEmissorDoc.value;



    e.preventDefault();
});

