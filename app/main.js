let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosAPI()

async function getBuscarLivrosAPI() {
    const res = await fetch(endPointAPI)
    livros = await res.json()
    let livrosComDesconto = descontoNoLivro(livros) 
    exibirLivrosNaTela(livrosComDesconto);   
}
