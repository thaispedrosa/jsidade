function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-criançamenino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovemmenino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto.jpg')
            } else {
                img.setAttribute('src', 'foto-idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-criançamenina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovemmenina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulta.jpg')
            } else {
                img.setAttribute('src', 'foto-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}