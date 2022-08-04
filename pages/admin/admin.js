var f = true;
var s = true;
var t = true;
var q = true;


$("#btnFirst").click(function (e) {
    if (f == true) {
        window.location.href = '#clientes';
        // window.alert('CLICOU');        
        f = false;
        console.log(f);
    } else if (f == false) {
        window.location.href = '#';
        f = true;
        console.log(f);
    }
    e.preventDefault();
});

$("#btnSecond").click(function (e) {
    if (s == true) {
        window.location.href = '#vendas';
        // window.alert('CLICOU');        
        s = false;
        console.log(s);
    } else if (s == false) {
        window.location.href = '#';
        s = true;
        console.log(s);
    }
    e.preventDefault();

});

$("#btnThird").click(function (e) {
    if (t == true) {
        window.location.href = '#servicos';
        // window.alert('CLICOU');        
        t = false;
        console.log(t);
    } else if (t == false) {
        window.location.href = '#';
        t = true;
        console.log(t);
    }
    e.preventDefault();

});

$("#btnFour").click(function (e) {
    if (q == true) {
        window.location.href = '#financeiro';
        // window.alert('CLICOU');        
        q = false;
        console.log(q);
    } else if (q == false) {
        window.location.href = '#';
        q = true;
        console.log(q);
    }
    e.preventDefault();

});

