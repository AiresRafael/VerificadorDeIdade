function verificar() {
    

    //CRIANDO A CAPTURA DE DATA
    let data = new Date()
    let ano =  data.getFullYear()


    //CHAMANDO O INPUT TXTANO
    let fano = document.getElementById('txtano')


    //CHAMANDO A DIV RES
    let res = document.getElementById('res')


    //SE A IDADE INSERIDA FOR MAIOR QUE O ANO ATUAL, VAI DAR ERRO
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO!] Verifique os dados e tente novamente!')

    } else {
    //CHAMANDO O INPUT radsex
        let fsex = document.getElementsByName ('radsex')
        let idade = ano - Number (fano.value)
        let genero = ''


    //CRIANDO A IMAGEM VIA JS
        let img = document.createElement('img')
            img.setAttribute('id', 'foto')


    //SE A CAIXA MARCADA FOR A 0 É HOMEM
    if (fsex[0].checked) {
        genero = 'Homem'

        if (idade >= 0 && idade < 10) {
            //CRIANCA
            img.setAttribute('src', 'criancah.png')
            document.body.style.background = '#28464e'

        } else if (idade >= 10 && idade < 21 ){
            //JOVEM 
            img.setAttribute('src', 'jovemh.png')
            document.body.style.background = '#c1c1c1'

        } else if (idade < 50) {
            //ADULTO
            img.setAttribute('src', 'adultoh.png')
            document.body.style.background = '#a37350'

        } else {
            //IDOSO
            img.setAttribute('src', 'idosoh.png')
            document.body.style.background = '#204762'
        }


    //SE FOR A CAIXA MARCADA FOR A  1, É MULHER
    } else if  (fsex[1].checked) {
        genero = 'Mulher'

        if (idade >= 0 && idade < 10) {
            //CRIANCA
            img.setAttribute('src', 'criancam.png')
            document.body.style.background = '#71364c'

        } else if (idade >= 10 && idade < 21 ){
            //JOVEM
            img.setAttribute('src', 'jovemm.png')
            document.body.style.background = '#6a4f49'

        } else if (idade < 50) {
            //ADULTO
            img.setAttribute('src', 'adultom.png')
            document.body.style.background = '#a37350'

        } else if (idade > 50) {
            //IDOSO
            img.setAttribute('src', 'idosom.png')
            document.body.style.background = '#c9c5c3'
        }
    }


    //INSERINDO A RESPOSTA
        res.innerHTML = `Detectamos que voce é ${genero} e tem ${idade} anos`
        res.style.textAlign = 'center'
        res.style.padding = '5px'
        

    //ADICIONANDO A IMAGEM NA PAGINA
        res.appendChild(img)
    }

}