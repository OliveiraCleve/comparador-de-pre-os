/*
Lógica de programação
[x] Pegar os dados do input, quando o botão for clicado
[x] Ir até o servidor e trazer os produtos
[x] Colocar os produtos na tela
*/

const buscarFormulario = document.querySelector('.formulario')
const listaProdutos = document.querySelector('.lista-de-produtos')
const priceChat=document.querySelector('.graficos')
buscarFormulario.addEventListener('submit',async function(event){
    event.preventDefault()
    const inputValue =event.target[0].value

    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
    const products = (await data.json()).results.slice(0,10)
    console.log(products)

    dislayItens(products)

})

function dislayItens(products){
    console.log(products)
    listaProdutos.innerHTML=products.map(product =>` 
            <div class = "product-card">
                <img src="${product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}" alt="${product.title}">
                <h3>${product.title}</3>
                <p class ="product-price">${product.price.toLocaleString('pt-br',{style: "currency", currency:"BRL" })}</p>
                <p class="loja">loja: ${product.seller.nickname}</p>
            </div>
        `).join('')

}