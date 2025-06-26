function verificar(){
    var data = new Date()//vendo a data
    var ano = data.getFullYear()//vendo o ano
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)//calculando a idade
        var genero= ''
        var img= document.createElement('img')//criando tag img
        img.setAttribute('id', 'foto')//dando um id e nome

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'imgs/crianca.m.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'imgs/adolescente.m.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'imgs/aulto.m.png')
            }else{
                //idoso
                img.setAttribute('src', 'imgs/idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0  && idade <10){
                //criança
                img.setAttribute('src', 'imgs/crianca-f.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'imgs/adolescente.f.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'imgs/aulto.f.png')
            }else{
                //idoso
                img.setAttribute('src', 'imgs/idosa-f.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//adicfionando como uma tag filho
    }
}