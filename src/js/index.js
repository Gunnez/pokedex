const botaoTema = document.getElementById('botao-alterar-tema')
const imagemBotao = document.querySelector('.imagem-botao')

botaoTema.addEventListener('click', () => {
    mudarTema()
})

function mudarTema(){
    const temaAtual = document.querySelector('body')
    temaAtual.classList.toggle('modo-escuro')
    if(temaAtual.className == 'modo-escuro')
        imagemBotao.src ='./imagens/moon.png'
    else
        imagemBotao.src ='./imagens/sun.png'
}