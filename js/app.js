let itensCarrinho = document.getElementById('lista-produtos');
itensCarrinho.querySelector('.carrinho__produtos__produto').innerHTML = 'Nenhum item adicionado';
let botaoLimpar = document.querySelector('.botao-limpar');
botaoLimpar.setAttribute('disabled', true);
let textoTotal = document.getElementById('valor-total');
textoTotal.innerHTML = 'R$ 0,00';
let total = 0;


function adicionar(){
let item = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;
let preco = extrairPreco(item);
let produto = extrairNomeProduto(item);
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

if (itensCarrinho.querySelector('.carrinho__produtos__produto').textContent == 'Nenhum item adicionado'){
    itensCarrinho.querySelector('.carrinho__produtos__produto').innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">${preco}</span>`;    
} else {
    adicionarProduto(quantidade, produto, preco);
}

textoTotal.innerHTML = total;
}

function limpar(){
    itensCarrinho.innerHTML = '';
    itensCarrinho.innerHTML = 'Nenhum item adicionado';
    total = 0;
    textoTotal.innerHTML = total;
    botaoLimpar.className = 'botao-form botao-limpar';
    botaoLimpar.setAttribute('disabled', true);
}

function extrairPreco(texto) {  // Modelo fornecido Copilot IA.
    const resultado = texto.match(/\d+/); 
    return resultado ? parseInt(resultado[0], 10) : null;
}
function extrairNomeProduto(texto) { //Padrão fornecido Copilot IA.
    return texto.split(' - ')[0];
}

function adicionarProduto(qtde, nome, preco) { //Padrão fornecido Copilot IA.
    const novoProduto = document.createElement('section');
    novoProduto.className = 'carrinho__produtos__produto';
    novoProduto.innerHTML = `<span class="texto-azul">${qtde}x</span> ${nome} <span class="texto-azul">R$${preco}</span>`;
    document.getElementById('lista-produtos').appendChild(novoProduto); 
}