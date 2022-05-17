//Menu
const header = document.createElement("header")
document.body.appendChild(header)
header.classList.add('headerNav')

const nav = document.createElement("nav")
header.appendChild(nav)

const divLogo = document.createElement("div")
nav.appendChild(divLogo)
divLogo.classList.add('divLogo')
divLogo.innerHTML ='<a href=""</a>' + '<img src="./img/logo.png" alt="" id="imgLogo">'

const ulCabecalho = document.createElement("ul")
nav.appendChild(ulCabecalho)
ulCabecalho.classList.add('cabecalho')

const li = document.createElement("li")
ulCabecalho.appendChild(li)
li.classList.add('cabLi')
li.innerHTML = '<a href="#">Todos</a>'

const li1 = document.createElement("li")
ulCabecalho.appendChild(li1)
li1.classList.add('cabLi')
li1.innerHTML = '<a href="#">Acessórios</a>'

const li2 = document.createElement("li")
ulCabecalho.appendChild(li2)
li2.classList.add('cabLi')
li2.innerHTML = '<a href="#">Calçados</a>'

const li3 = document.createElement("li")
ulCabecalho.appendChild(li3)
li3.classList.add('cabLi')
li3.innerHTML = '<a href="#">Camisetas</a>'

//-----------------------------------------------------------------------------------------------------//

//Main
const main = document.createElement("main")
document.body.appendChild(main)
console.log(document.body)

//--------------------------------------------------------------------------------------------------------//

//Barra de pesquisa e botão
const input = document.createElement("input")
main.appendChild(input)
input.id = 'barPesq'
input.setAttribute('placeholder', 'Digite aqui sua pesquisa')

const buttonPesq = document.createElement("button")
main.appendChild(buttonPesq)
buttonPesq.classList.add('bttPesq')

const span = document.createElement("span")
buttonPesq.appendChild(span)
span.id = 'spnBtt'
span.innerText = "Pesquisar"
//--------------------------------------------------------------------------------------------------------//

//Carinho de compra
const section = document.createElement("section")
main.appendChild(section)
section.classList.add('carrinho-de-compras')

const div = document.createElement("div")
section.appendChild(div)
div.classList.add('divCarH')

const h3 = document.createElement("h3")
div.appendChild(h3)
h3.classList.add('hCar')
h3.innerText = "Carrinho de compras"

const ulCar = document.createElement("ul")
section.appendChild(ulCar)
ulCar.classList.add('containerCar')
ulCar.id = 'containerCa'

const divText = document.createElement("div")
ulCar.appendChild(divText)
divText.id = 'divText'

const h2Text = document.createElement("h2")
divText.appendChild(h2Text)
h2Text.id = 'h2Text'
h2Text.innerText = 'Carrinho Vázio'

const h5Text = document.createElement("h5")
divText.appendChild(h5Text)
h5Text.id = 'h5Text'
h5Text.innerText = 'Adicione itens'

const divDet = document.createElement("div")
section.appendChild(divDet)
divDet.classList.add('divDetails')

const p1 = document.createElement("p")
divDet.appendChild(p1)
p1.id = 'p1'
p1.innerText = "Quantidade"

const p2 = document.createElement("p")
divDet.appendChild(p2)
p2.id = 'p2'
p2.innerText = 0
let cont = 0

const p3 = document.createElement("p")
divDet.appendChild(p3)
p3.id = 'p3'
p3.innerText = "Total"

const p4 = document.createElement("p")
divDet.appendChild(p4)
p4.id = 'p4'
p4.innerText = "R$ 0,00"
let valor = 0
//--------------------------------------------------------------------------------------------------------//

//Funções

//Função iniciar vitrine, adicionar ao carrinho, remoção do carrinho e botões correspondentes
 inicializarVitrine = (dataB) =>{     

    const ul = document.createElement("ul")
    main.appendChild(ul)
    ul.classList.add('vitrine')
    ul.id = 'ul1'
    //Criando Card
    let containerProdutos = document.getElementById('ul1')
     dataB.map((produto)=>{
        containerProdutos.innerHTML += `
        <li class="card-produto">
            <figure>
                <img class="imgProdutos" src="`+produto.img+`">
            </figure>

            <div class="info">
                <p class="pProducts">`+produto.tag+`</p>
                <h3 class="h3Card">`+produto.nameItem+`</h3>
                <span class="spanCard">`+produto.description+`</span>
                <h3 class="preco">R$`+produto.value+`</h3>
                <button key="`+produto.id+`" class="buttonAdCar">Adcionar ao carrinho</button>
            </div>
        </li>
        `;
    })     
    //Atualizando o Carrinho
    atualizarCarrinho = () =>{
        divText.remove()    
        let containerCarrinho = document.getElementById('containerCa')
        containerCarrinho.innerHTML = ""
        data.map((produto)=>{
            if(produto.quantidade > 0){
                //Carrinho de compras            
                const liCar = document.createElement("li")
                ulCar.appendChild(liCar)
                liCar.classList.add('liProdCar')
    
                const figure = document.createElement("figure")
                liCar.appendChild(figure)
                figure.classList.add('figProdCar')
    
                const imgCar = document.createElement("img")
                figure.appendChild(imgCar)
                imgCar.classList.add('imgProdutos')
                imgCar.id = 'imgProdCar'
    
                const divCar = document.createElement("div")
                liCar.appendChild(divCar)
                divCar.classList.add('divCar')
    
                const h4 = document.createElement("h4")
                divCar.appendChild(h4)
                h4.classList.add('titleCar')
    
                const h3Qnt = document.createElement("h3")
                divCar.appendChild(h3Qnt)
                h3Qnt.classList.add('h3Qnt')
    
                const h3List = document.createElement("h3")
                divCar.appendChild(h3List)
                h3List.classList.add('Hcar')
                
                const buttonCar = document.createElement("button")
                divCar.appendChild(buttonCar)
                buttonCar.classList.add('buttonCar')
                buttonCar.innerText = 'Remover produto'
                                
                imgCar.src          = produto.img            
                h4.innerText        = produto.nameItem
                h3Qnt.innerText     = `x ${produto.quantidade}` 
                h3List.innerText    = `R$ ${produto.value}`
                buttonCar.setAttribute('key', produto.id)                     
                p2.innerHTML = cont                    
                
                //Removendo Produtos
                 buttonCar.addEventListener('click', function(){
                    let key = this.getAttribute('key') 
                    
                    data[key].quantidade--                
                    cont--
                    p2.innerHTML = cont
                    
                    let decreValor = produto.value
                    valor = valor - decreValor
                    p4.innerHTML = `R$ ${valor}`
                    
                    h3Qnt.innerText     = `x ${produto.quantidade}`
                    if(produto.quantidade < 1){
                        liCar.remove()
                    }
                })
                p4.innerHTML = `R$ ${valor}`              
            }                      
        })
    }
    //Captura do button, adicinando um evento, pegando um atributo, incrementando um valor, pegando e somando preço, exibindo a contagem de produtos e chamando o card produto carrinho
    let links = document.getElementsByClassName('buttonAdCar')    
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            let key = this.getAttribute('key')
            data[key].quantidade++ 
            valor += data[key].value
            cont++
            p2.innerText = cont
            atualizarCarrinho()
        
        })
    }
 }
inicializarVitrine(data)

//Botão pesquisa mais função filtro
buttonPesq.addEventListener('click', function filtros(){       
    let nomeFiltro= document.getElementById('barPesq').value.trim()
    
    if (nomeFiltro == 'Camisetas'){
        let filtro = data.filter(function(obj) { 
            return obj.tag == nomeFiltro
        
        })
        ul1.remove()        
        inicializarVitrine(filtro) 
    }
    else if(nomeFiltro == 'Acessórios'){
        let filtro = data.filter(function(obj) { 
            return obj.tag == nomeFiltro
        
        })
        ul1.remove()          
        inicializarVitrine(filtro) 
    }
    else if(nomeFiltro != "Acessórios" || nomeFiltro != "Camisetas"){
        let filtro = data.filter(function(obj) { 
            return obj.nameItem == nomeFiltro
        
        })
        ul1.remove()          
        inicializarVitrine(filtro) 
    }    
})

//funções Menu
li.addEventListener('click', function(){
    ul1.remove()
    inicializarVitrine(data)
})

li1.addEventListener('click', function(){
    let filtro = data.filter(function(obj) { 
        return obj.tag == 'Acessórios'
    
    })
    ul1.remove()
    inicializarVitrine(filtro)
})

li2.addEventListener('click', function(){
    let filtro = data.filter(function(obj) { 
        return obj.tag == 'Calçados'
    
    })
    ul1.remove()
    inicializarVitrine(filtro)
    let erro = document.getElementById("ul1")
    erro.innerHTML = '<h1 id="erro">Não temos produtos dessa secção!<h1>'
})

li3.addEventListener('click', function(){
    let filtro = data.filter(function(obj) { 
        return obj.tag == 'Camisetas'
    
    })
    ul1.remove()
    inicializarVitrine(filtro)
})
