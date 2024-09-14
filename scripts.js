// Exemplo 1: Manipulação de DOM
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo-js');
    titulo.innerHTML = 'JavaScript Dinâmico';
});

// Exemplo 2: Mudança de Cor de Fundo
function mudarCorFundo() {
    document.body.style.backgroundColor = '#e0f7fa';
}

// Exemplo 3: Exibir Mensagem
function exibirMensagem() {
    alert('Bem-vindo ao mundo do JavaScript!');
}

// Exemplo 4: Validação Simples de Formulário
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    if (nome === '') {
        alert('Por favor, preencha seu nome.');
        return false;
    }
    alert('Formulário enviado com sucesso!');
    return true;
}
