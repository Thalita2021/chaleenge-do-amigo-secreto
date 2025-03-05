let amigos = [];


function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeAmigo = input.value.trim(); 

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }
    amigos.push(nomeAmigo);
    input.value = '';
    input.focus();  
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    let liResultado = document.createElement('li');
    liResultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
    resultado.appendChild(liResultado);
}
