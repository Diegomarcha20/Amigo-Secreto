let amigos = [];


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
     
        const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
        amigos.push(nombreFormateado);
        input.value = '';
        actualizarListaAmigos();
        input.focus();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}


function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const amigosSorteados = [...amigos];
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} le regala a ${amigosSorteados[index]}`;
        resultado.appendChild(li);
    });

    const resultadoContainer = document.getElementById('resultado-container');
    resultadoContainer.style.display = 'block';

    setTimeout(() => {
        const modalFinal = document.getElementById('modal-final');
        modalFinal.style.display = 'flex';
    }, 5000); 
}

0
function reiniciarJuego() {
    const modalFinal = document.getElementById('modal-final');
    modalFinal.style.display = 'none'; 

    amigos = [];
    actualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('resultado-container').style.display = 'none';
}

document.getElementById('amigo').addEventListener('input', function () {
    const buttonAdd = document.querySelector('.button-add');
    if (this.value.trim() !== '') {
        buttonAdd.classList.add('active');
    } else {
        buttonAdd.classList.remove('active');
    }
});

document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});


document.getElementById('resultado-container').style.display = 'none';
