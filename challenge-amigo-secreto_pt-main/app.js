let listaAmigos = [];
let sorteados = [];

function adicionarNome() {
    let nomeDigitado = document.getElementById('amigo').value;

    // Verifica se o nome foi preenchido e se já foi adicionado
    if (nomeDigitado === '') {
        alert('Por favor, insira um nome.');
    } else if (listaAmigos.includes(nomeDigitado)) {
        alert('Esse nome já foi inserido, por favor indique outro nome.');
    } else {
        listaAmigos.push(nomeDigitado);
    }

    limparCampo();
    atualizarLista();
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let listaElementos = document.getElementById('listaAmigos');
    listaElementos.innerHTML = '';

    // Exibe todos os nomes na lista
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaElementos.appendChild(li);
    }
}

function sortearNome() {
    // Verifica se há amigos para sortear
    if (listaAmigos.length === 0) {
        alert('Não há nomes para sortear, por favor adicione amigos.');
        return;
    }

    // Sorteia um nome aleatório
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Remover o nome sorteado da lista
    let indiceRemover = listaAmigos.indexOf(amigoSorteado);
    if (indiceRemover !== -1) {
        listaAmigos.splice(indiceRemover, 1);
    }

    // Exibe o nome sorteado e remove a lista
    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
    document.getElementById('listaAmigos').style.display = 'none';  // Esconde a lista de amigos restantes

    // Se todos os amigos foram sorteados
    if (listaAmigos.length === 0) {
        alert('Todos os amigos foram sorteados.');
    }
}