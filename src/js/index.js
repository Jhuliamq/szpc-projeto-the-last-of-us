/*

OBJETICO - quando clicamos no botão temos 
que mostrar a imagem do fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML
dos botões

- passo 2 - dar um jeito de identificar o clique
do usuário no botão

- passo 3 - desmarcar o botão selecionado
anterior

- passo 4 - marcar o botão clicando como se 
estivesse selecionada

- passo 5 - ensconder a imagem de fundo anterior

- passo 6 - fazer aparecer a imagem do fundo 
correspondente ao botão clicado

*/

// passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
//passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //passo 3
        desativarBotao();

        //passo 4
        botao.classList.add('selecionado');

        //passo 5
        esconderImagem();

        //passo 6
        imagens[indice].classList.add('ativa');

    })
})
















function esconderImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

