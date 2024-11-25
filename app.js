let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Escolha um número entre 1 e 10.');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
        exibirTextoTela('p', 'Acertou.');
    }
    console.log(numeroAleatorio)
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}