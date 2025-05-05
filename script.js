function validarInscricao(event) {
    event.preventDefault();
    let nomeAluno = document.getElementById("input-nome").value.split(" ")[0];
    alert(`Inscrição realizada com sucesso! Boa sorte no campeonato ${nomeAluno}!`);
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
            document.getElementById("form-inscricao").style.display = 'block'
            break;
    
        default:
            break;
    }
}