const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosNaTela(listaDeLivros){

  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''    
  listaDeLivros.forEach(element => {
    let disponibilidade = element.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementoParaInserirLivros.innerHTML += `
      <div class="livro" >
        <img class='${disponibilidade}' type='button' src=${element.imagem} alt=${element.alt}/>
        <button type="button" id='btn-compra' onclick="Carrinho('${element.imagem}','${element.titulo}', '${element.preco.toFixed(2)}');" >Add ao carrrinho</button>
        <h2 class="livro__titulo">
        
        </h2>
        <p class="livro__descricao">${element.autor}</p>
        <p class="livro__preco" id="preco">R$${element.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${element.categoria}</span>
        </div>
      </div>`
    });
}
