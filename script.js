document.body.addEventListener('keyup', tocarTecla)

document.querySelector('.btnTocar').addEventListener('click', tocarComposicao)

let teclas = document.querySelectorAll('.tecla')
teclas.forEach(function(teclas){
    teclas.addEventListener('click', toqueTeclas)
})

function toqueTeclas(keys){
    let elementoAudio = document.querySelector('.audio'+keys)
    let elementoTecla = document.querySelector(`.tecla${keys}`)


    if(elementoAudio){
        elementoAudio.currentTime = 0
        elementoAudio.play()
    }

    if(elementoTecla){
        elementoTecla.classList.add('keypress')

        setTimeout(function(){
            elementoTecla.classList.remove('keypress')
        }, 200)
    }
}

function tocarTecla(event){
    tocarSom(event.code.toLowerCase())
}


function tocarSom(sound){
    let elementoAudio = document.querySelector(`#audio${sound}`)
    let elementoTecla = document.querySelector(`div[data-key="${sound}"]`)

    if(elementoAudio){
        elementoAudio.currentTime = 0
        elementoAudio.play()
    }
    if(elementoTecla){
        elementoTecla.classList.add('keypress')

        setTimeout(function(){
            elementoTecla.classList.remove('keypress')
        }, 200)
    }

    elementoTecla.addEventListener('click', console.log(`tecla ${sound}`))
}

function tocarComposicao(){
    let song = document.querySelector('.input').value

    if(song !== ''){
        let songArray = song.split('')

        tocarComposicaoEscrita(songArray)
    }
    console.log(song)
}

function tocarComposicaoEscrita(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            tocarSom(`key${songItem}`)
        }, wait)

        wait += 250
    }
}