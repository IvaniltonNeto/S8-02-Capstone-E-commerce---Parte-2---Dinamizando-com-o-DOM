
//Menu
const header = document.createElement("header")
document.body.appendChild(header)
header.classList.add('headerNav')

const nav = document.createElement("nav")
header.appendChild(nav)

const divLogo = document.createElement("div")
nav.appendChild(divLogo)
divLogo.classList.add('divLogo')
divLogo.innerHTML = '<h3>Draken Store</h3>'

const ulCabecalho = document.createElement("ul")
nav.appendChild(ulCabecalho)
ulCabecalho.classList.add('cabecalho')

const li = document.createElement("li")
ulCabecalho.appendChild(li)
li.classList.add('cabLi')
li.innerHTML = '<a href="">Todos</a>'

const li1 = document.createElement("li")
ulCabecalho.appendChild(li1)
li1.classList.add('cabLi')
li1.innerHTML = '<a href="">Acessórios</a>'

const li2 = document.createElement("li")
ulCabecalho.appendChild(li2)
li2.classList.add('cabLi')
li2.innerHTML = '<a href="">Calçados</a>'

const li3 = document.createElement("li")
ulCabecalho.appendChild(li3)
li3.classList.add('cabLi')
li3.innerHTML = '<a href="">Camisetas</a>'
//-----------------------------------------------------------------------------------------------------//

const main = document.createElement("main")
document.body.appendChild(main)
console.log(document.body)

//Vitrine
/*const ul = document.createElement("ul")
main.appendChild(ul)
ul.classList.add('vitrine')
ul.id = 'ul1'*/
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
function vitrineProd(produto){
    cardProduto(produto)    
}
vitrineProd(data)  


   

   /* for (let i = 0; i < data.length; i++){
        let filtro = document.getElementById('barPesq').value.trim()          
            if(filtro == data[i].nameItem){             
                return cardProduto(data[i])
                alert("sasdas")
        }else if(filtro == data[i].tag){
               return cardProduto(data[i])
        }
        
    }
   
  
})*/


function cardProduto(produto){
const ul = document.createElement("ul")
main.appendChild(ul)
ul.classList.add('vitrine')
ul.id = 'ul1'
    for (let i = 0; i < produto.length; i++){
        
        const li = document.createElement("li")
        ul.appendChild(li)
        li.classList.add('products-content')

        const figure = document.createElement("figure")
        li.appendChild(figure)

        const img = document.createElement("img")
        figure.appendChild(img)

        const div = document.createElement("div")
        li.appendChild(div)
        div.classList.add('info')

        const p = document.createElement("p")
        div.appendChild(p)
        p.classList.add('pProducts')

        const h3 = document.createElement("h3")
        div.appendChild(h3)
        h3.classList.add('h3Card')

        const span = document.createElement("span")
        div.appendChild(span)
        span.classList.add('spanCard')

        const h3p = document.createElement("h3")
        div.appendChild(h3p)
        h3p.classList.add('preco')        

        const button = document.createElement("button")
        div.appendChild(button)
        button.classList.add('buttonAdCar')
        
        img.src          = produto[i].img
        p.innerText      = produto[i].tag
        h3.innerText     = produto[i].nameItem
        span.innerText   = produto[i].description
        h3p.innerHTML    = `R$ ${produto[i].value}`
        button.innerText = produto[i].addCart

        //
        
        //Carrinho de compras
            button.addEventListener('click', function(){
            const liCar = document.createElement("li")
            ulCar.appendChild(liCar)
            liCar.classList.add('liProdCar')

            const figure = document.createElement("figure")
            liCar.appendChild(figure)
            figure.classList.add('figProdCar')

            const imgCar = document.createElement("img")
            figure.appendChild(imgCar)
            imgCar.classList.add('imgProdCar')

            const divCar = document.createElement("div")
            liCar.appendChild(divCar)
            divCar.classList.add('divCar')

            const h4 = document.createElement("h4")
            divCar.appendChild(h4)
            h4.classList.add('titleCar')

            const h3List = document.createElement("h3")
            divCar.appendChild(h3List)
            h3List.classList.add('Hcar')
            
            const buttonCar = document.createElement("button")
            divCar.appendChild(buttonCar)
            buttonCar.classList.add('buttonCar')
            buttonCar.innerText = 'Remover produto'

            imgCar.src          = produto[i].img            
            h4.innerText        = produto[i].nameItem
            h3List.innerText    = `R$ ${produto[i].value}`
            //contador de produtos
            cont++
            p2.innerHTML = cont
            //valorDosProdutos            
            valor += produto[i].value            
            //Remover Produtos
            buttonCar.addEventListener('click', function(){
                liCar.remove()
                cont--
                p2.innerHTML = cont
                let decreValor = produto[i].value
                valor = valor - decreValor
                p4.innerHTML = `R$ ${valor}`
            })
            p4.innerHTML = `R$ ${valor}`
        })
    }   
}
buttonPesq.addEventListener('click', function(){
    
    /*const ul = document.createElement("ul")
    main.appendChild(ul)
    ul.classList.add('vitrine')*/

        let nomeFiltro = document.getElementById('barPesq').value.trim()

        let filtro = data.filter(function(obj) { 
            
        return obj.tag == nomeFiltro;
         
        });
        ul1.remove()
        cardProduto(filtro) 
        
})  

