//Desafio_dio Felipao
//Desafio Classificador de Héroi

//Digite um nome para o Héroi!
//Nome é Conan
let Nome = "Conan"

//Quanto de experiencia foi adquirido em numeros
//Sua experiencia é 3460
let xp = 3460


let Nivel = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"] 
if(xp<=1000){
    xp=(Nivel[0])
}else if(xp<=2000){
    xp=(Nivel[1])
}else if(xp<=5000){
    xp=(Nivel[2])
}else if(xp<=7000){
    xp=(Nivel[3])
}else if(xp<=8000){
    xp=(Nivel[4])
}else if(xp<=9000){
    xp=(Nivel[5])
}else if(xp<=10000){
    xp=(Nivel[6])
}
switch(xp){
    case(Nivel[0]) :   
        console.log("O Heroi de nome "+ Nome,"está no nivel Ferro")
    break
    case(Nivel[1]):
        console.log("O Heroi de nome "+ Nome,"está no nivel Bronze")
    break
    case(Nivel[2]):
        console.log("O Heroi de nome "+ Nome,"está no nivel Prata")
    break
    case(Nivel[3]):
        console.log("O Heroi de nome "+ Nome,"está no nivel Ouro")
    break
    case(Nivel[4]):
        console.log("O Heroi de nome "+ Nome,"está no nivel Platina")
    break
    case(Nivel[5]):
        console.log("O Heroi de nome "+ Nome,"está no nivel Ascendente")
    break
    case(Nivel[6]):
        console.log("O Heroi de nome "+ Nome,"está no nivel Imortal")
    break 
    default:
        console.log("O Heroi de nome "+ Nome,"está no nivel Radiante")
    break
    }
//fim
