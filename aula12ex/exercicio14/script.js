function carregar(){
var msg = document.querySelector('#msg')//selecionando a mensagem
var img = document.querySelector('#imagem')//selecionando a imagem nao a div que a imagem esta
var data = new Date() // hora ddo computador
var hora =data.getHours() // hora do sistema

msg.innerHTML = `Agora são ${hora} horas.`
if(hora >=0 && hora < 12){
    //bom dia!
    img.src = 'imgs/amanhcendo.png'
    document.body.style.background = '#DF9D4F'

}else if(hora >= 12 && hora < 18){
    img.src= 'imgs/tarde.png'
     document.body.style.background= '#864E26'
    //boa tarde!
}else{
    //boa noite!
    img.src= 'imgs/noite.png'
    document.body.style.background = '#2e315f'

}

}