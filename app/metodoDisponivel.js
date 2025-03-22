const btnDisponivel = document.getElementById('btnLivrosDisponiveis')

btnDisponivel.addEventListener('click', disponibilidade)

function disponibilidade(){
    const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)    
    let valorTotal = valorTotalDisponivel(livrosDisponiveis)
    exibirLivrosNaTela(livrosDisponiveis)
    
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
    </div>`
}
