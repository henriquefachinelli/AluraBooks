let btn = document.getElementById('btnOrdenarPorPreco')

btn.addEventListener('click', ordenaPreco)

function ordenaPreco(){
    let ordenado = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(ordenado)
}
