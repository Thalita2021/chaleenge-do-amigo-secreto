let amigos = [];
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    if (nomeAmigo === '') {
        alert('Insira um nome válido.');
        return;
    }
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert('Este nome já foi adicionado. Insira um nome diferente.');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarListaAmigos();
}
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}
function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Adicione amigos antes de sortear.');
        return; 
    }
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);    
    let amigoSorteado = amigos[amigoAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}