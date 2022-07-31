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
var date = new Date();
var hoje = date.toLocaleDateString();
console.log(hoje);
if (db.data == "") {
    $("#pData").text(hoje.split('-').reverse().join('/'));
} else {
    $("#pData").text(db.data.split('-').reverse().join('/'));
}
$("#pValor").text(db.valor);
$("#pCliente").text(db.cliente);
$("#pDocCli").text(db.docCliente);
$("#pReferente").text(db.referente);
$("#pEmissor").text(db.emissor);
$("#pDocEmissor").text(db.docEmissor);
window.print();
function timer() {
    setTimeout(function () {
        alert('Obrigado por usar nosso sistema! :)');
        window.location.assign('./recibo.html');
    }, 500);
}


