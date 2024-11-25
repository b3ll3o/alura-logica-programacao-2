let listaDeNumerosSorteados = [];
let tentativas = 1;
let numeroLimiteTentativas = 3;

let numeroAleatorio = gerarNumeroAleatorio();

console.log(numeroAleatorio);

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

gerarFrasesIniciais();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
        exibirTextoTela('h1', 'Acertou.');
        let mensagemTentivas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcertou = `Você acertou o número secreto após ${tentativas} ${mensagemTentivas}!`;
        exibirTextoTela('p', mensagemAcertou);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroAleatorio){
            exibirTextoTela('p', 'Número secreto é menor.');
        }else {
            exibirTextoTela('p', 'Número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    gerarFrasesIniciais();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio(){
    const numeroGerado = parseInt(Math.random() * 10 + 1);
    const quantidadeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosNaLista === numeroLimiteTentativas){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroGerado);
        return numeroGerado;
    }
}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function gerarFrasesIniciais(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10.');
}