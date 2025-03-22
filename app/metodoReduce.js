function valorTotalDisponivel(livros){
    return valor=livros.reduce((acc,livro) => acc + livro.preco,0)
}
