
//Funçao que retorna um valor aleatorio de 0 a 4
function RandomNumber(){
    var number = Number.parseInt(Math.random() * (4))
    return number
}

function RenderGame(){
    //Define o antigo objeto como o atual
    lastObj = currentObj
    //Remove o objeto no documento html
    area.removeChild(currentObj)  
    //Define um novo objeto atual
    currentObj = listObj[RandomNumber()]
    //Adiciona o novo objeto no html
    area.appendChild(currentObj)
    //Renderiza a pontuaçao 
    document.getElementById("score").innerHTML = score
}

var score = 0
document.getElementById("score").innerHTML = score

const area = document.getElementById("area")

//Carrega e define src dos audios

//AudioCorrect
const soundCorrect = document.createElement("audio")
soundCorrect.src = "./correct.wav"
//AudioWrong
const soundWrong = document.createElement("audio")
soundWrong.src = "./wrong.wav"



//Cria os objetos//imagens
const squareFull = document.createElement("i")
squareFull.setAttribute("class","fas fa-square fa-7x")

const circleFull = document.createElement("i")
circleFull.setAttribute("class","fas fa-circle fa-7x")

const square = document.createElement("i")
square.setAttribute("class","far fa-square fa-7x")

const circle = document.createElement("i")
circle.setAttribute("class","far fa-circle fa-7x")

const listObj = [circle, circleFull, square, squareFull]
var currentObj = listObj[RandomNumber()]
var lastObj = currentObj



function Check(valor){
//Se o cliente clicar no botao correct, sera verificado se o objeto atual é igual ao anterior
    if(valor==true){
        if(currentObj==lastObj){
            score++
            soundCorrect.play()
            console.log("Acertou")
        }else {
            soundWrong.play()
            console.log("Errou")
        }
    }
//Se o cliente clicar no botao correct, sera verificado se o objeto atual NAO é igual ao anterior
    if(valor==false){
        if(currentObj!==lastObj){
            score++
            soundCorrect.play()
            console.log("Acertou")
        }else {
            soundWrong.play()
            console.log("Errou")
        }
    }
    RenderGame()
}



area.appendChild(currentObj)

