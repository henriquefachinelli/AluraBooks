const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const btn = document.getElementById(this.id)
    const categoria = btn.value 
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : FiltrarCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    const valorTotal = valorTotalDisponivel(livrosFiltrados)
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
    </div>`
}

function FiltrarCategoria(categoria){
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade(){
    return livros.filter(livro => livro.quantidade > 0) 
}
