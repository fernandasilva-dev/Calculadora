//padrão f6

function equacao(a,b, operacao){ //módulo
    let r =  a + b * operacao(a, b);
    return r;
}


//let x = equacao(5, 6, (x, y)=>{
//    return x + (y * y)
//})

module.exports = {
    soma: (a, b)=>{
        return a + b;
    },
    subtracao: function (a, b){
        return a - b;
    }
}//fim objeto exportar


function adicao(a,b){
    var resposta = parseInt(a) + parseInt(b);
    return resposta;
}

function subtracao(a,b){
    var resposta = parseInt(a) - parseInt(b);
    return resposta;
}

function multiplicar(a,b){
    var resposta = parseInt(a) * parseInt(b);
    return resposta;
}

function dividir(a,b){
    var resposta = parseInt(a) / parseInt(b);
    return resposta;
}


function clicouSoma(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let s = adicao(v1,v2)
    document.getElementById("resultado").value = s;
}

function clicouSubtrair(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let s = subtracao(v1,v2)
    document.getElementById("resultado").value = s;
}

function clicouMultiplicar(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let s = multiplicar(v1,v2)
    document.getElementById("resultado").value = s;
}

function clicouDividir(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let s = dividir(v1,v2)
    document.getElementById("resultado").value = s;
}