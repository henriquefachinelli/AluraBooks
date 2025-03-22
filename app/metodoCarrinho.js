const modal = document.getElementById('myModal');
const itensCarrinho = document.getElementsByClassName('modal-content');
const totalCarrinho = document.getElementById('preco-carrinho');
const span = document.getElementsByClassName("close")[0];
const inserirItens = document.getElementById('itens');
const toastBox = document.getElementById('toastBox');

const carrinhoDeCompra = new Array() 

function Carrinho(imagem, titulo, preco){
    carrinhoDeCompra.push({Imagem:imagem ,Titulo:titulo , Preco:preco})
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `${titulo}</br> adicionado`;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    },38500);
}

function modalCarrinho(){
    inserirItens.innerHTML = ``
    carrinhoDeCompra.map(e => { 
        inserirItens.innerHTML += `
            <div class="carrinho-livros"> 
                <li><img src=${e.Imagem}></img></li>       
                <li>${e.Titulo}</li>
                <li>${e.Preco}</li>
            </div>                               
        `  
    });
    
    const soma = carrinhoDeCompra.reduce((acc,livro) => acc + parseFloat(livro["Preco"]),0)
    inserirItens.innerHTML += `
    <h1>Total &nbsp; ${soma.toFixed(2)}</h1>`
    modal.style.display = "block";      
        
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}