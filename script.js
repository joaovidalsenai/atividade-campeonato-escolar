function validarInscricao(event) {
    event.preventDefault();
    let nomeAluno = document.getElementById("input-nome").value.trim().split(" ")[0];
    document.getElementById("alerta-texto").innerHTML = `Inscrição realizada com sucesso! Boa sorte no campeonato ${nomeAluno}!`;
    document.getElementById("alerta-cadastro").style.display = 'flex';
}

function mudarSecao(secao) {
    let elements = document.getElementsByClassName("main");
    for (let e of elements) {
        e.style.display = 'none';
    }

    switch (secao) {
        case 1:
            document.getElementById("card-info").style.display = 'block';
            break;
        case 2:
            document.getElementById("sobre-camp").style.display = 'block';
            break;
        case 3:
            document.getElementById("form-inscricao").style.display = 'flex'
            break;
        default:
            document.getElementById("card-info").style.display = 'block'
            break;
    }
}

const dataCampeonato = new Date(2025, 4, 15, 15, 30, 0);
    
function atualizarContador() {
        const agora = new Date();
        const diferenca = dataCampeonato - agora;

        if (diferenca <= 0) {
            document.getElementById("contador").innerText = "O campeonato já começou!";
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        document.getElementById("contador").innerText = `O campeonato começa em ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos!`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

let currentImage = 0;

function mudarImagem() {
    let imgs = document.getElementsByClassName("img-carousel");
    for (let img of imgs) {
        img.style.display = 'none';
    }
    imgs[currentImage].style.display = 'block';
    currentImage++;
    if (currentImage >= imgs.length) currentImage = 0;
}
mudarImagem(); 
setInterval(mudarImagem, 5000);