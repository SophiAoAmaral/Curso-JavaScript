function contar(){
    //SELECIONANDO OS ARQUIVOS
    let inicio = document.querySelector('#txti')
    let fim =document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')


    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght ==0){
       // window.alert('[ERRO] FALTAM DADOS')
        res.innerHTML('Impossivel Contar')
    }else{

        res.innerHTML = 'Contando: <br> '
        //TRASNFORMANDO OS RESULTAOS DOS INPUTS Q VEM EM STRING PARA NUMBERS
        let i = Number(inicio.value)
        let f=  Number(fim.value)
        let p =Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido!Considere passo 1')
            p = 1
        }
        if(i<f){
        //enqunato c for menor igual a i que é o inicio ele vai adicionar mais 1 no valor de p, crio a var c para mostra-la na tela
        for(let c= i; c <= f ; c+=p){//CONTAGEM CRESCENTE
            res.innerHTML += `${c} \u{1F60A}`  //para adicionar emojis com javascript usa isso \u{87872} ELE VEM ASSIM U+1F60A
        }
     } else {
        for(let c = i;c >= f ; c -= p){//CONTAGEM DECRECENTE
            res.innerHTML += `${c} \u{1F60A}`
        }
    }
    res.innerHTML += '\u{1F3C1}'
  }
}