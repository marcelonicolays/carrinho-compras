let itensCarrinho = document.getElementById('lista-produtos');
let botaoLimpar = document.querySelector('.botao-limpar');
let textoTotal = document.getElementById('valor-total');
let total;
limpar();

function adicionar(){
let item = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;
let preco = item.split('R$')[1];
let produto = item.split(' - ')[0];
let soma = preco * quantidade;

if (quantidade <= 0){ //Verificar quantidade
    alert('Por favor digite uma quantidade válida.');
    return;
}
if (botaoLimpar.classList = 'botao-form', 'botao-limpar'){ // verificar de o botão está habilitado.
    botaoLimpar.className = 'botao-form botao-adicionar';
    botaoLimpar.removeAttribute('disabled');
}
total = total + soma;
itensCarrinho.innerHTML = itensCarrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$ ${preco}</span></section>`;    
textoTotal.innerHTML = `R$ ${total}`;
document.getElementById('quantidade').value = 0
}
function limpar(){
    total = 0;
    textoTotal.innerHTML = 'R$ 0,00';
    botaoLimpar.className = 'botao-form botao-limpar';
    botaoLimpar.setAttribute('disabled', true);
    itensCarrinho.innerHTML = ''; 
    document.getElementById('quantidade').value = 0
}