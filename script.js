function validarInscricao(event) {
    event.preventDefault();
    let nomeAluno = document.getElementById("input-nome").value.split(" ")[0];
    ///document.getElementById("cadastro-finalizado").innerHTML = `Inscrição realizada com sucesso! Boa sorte no campeonato ${nomeAluno}!`;
    alert(`Inscrição realizada com sucesso! Boa sorte no campeonato ${nomeAluno}!`)
}

function mudarSecao(secao) {
    let elements = document.getElementsByClassName("main");
    for (let e of elements) {
        e.style.display = 'none';
    }

    switch (secao) {
        case 1:
            document.getElementById("card-info").style.display = 'block'
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
        document.getElementById("contador").innerText = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos para o campeonato começar!`;
    }

atualizarContador();
setInterval(atualizarContador, 1000);