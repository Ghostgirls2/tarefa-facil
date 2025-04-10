let totalPontos = 0;
let tarefas = [
    { tarefa: 'Beber Água', pontos: 10, completada: false },
    { tarefa: 'Jogar Jogos por 5 Minutos', pontos: 20, completada: false },
    { tarefa: 'Assistir Vídeos no TikTok por 10 Minutos', pontos: 15, completada: false },
];

document.addEventListener('DOMContentLoaded', () => {
    // Verificar se já existe um usuário logado
    if (!localStorage.getItem('usuarioLogado')) {
        mostrarLogin();
    } else {
        mostrarConteudo();
    }

    // Formulário de login
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nomeUsuario = document.getElementById('username').value;
        localStorage.setItem('usuarioLogado', nomeUsuario);
        carregarDados();
        mostrarConteudo();
    });

    // Exibir a tela de login
    function mostrarLogin() {
        document.getElementById('login').style.display = 'block';
        document.getElementById('header-container').style.display = 'none';
    }

    // Exibir o conteúdo do site
    function mostrarConteudo() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('header-container').style.display = 'flex';
        carregarDados();
        exibirTarefas();
    }

    // Exibir as tarefas
    function exibirTarefas() {
        const tarefasList = document.getElementById('tarefas-list');
        tarefasList.innerHTML = '';

        tarefas.forEach((tarefa, index) => {
            let tarefaElement = document.createElement('div');
            tarefaElement.classList.add('tarefa');

            tarefaElement.innerHTML = `
                <p>${tarefa.tarefa} - ${tarefa.pontos} pontos</p>
                <button onclick="completarTarefa(${index})" ${tarefa.completada ? 'disabled' : ''}>
                    ${tarefa.completada ? 'Tarefa Concluída' : 'Concluir Tarefa'}
                </button>
            `;

            tarefasList.appendChild(tarefaElement);
        });
    }

    // Completar tarefa
    function completarTarefa(index) {
        if (!tarefas[index].completada) {
            totalPontos += tarefas[index].pontos;
            tarefas[index].completada = true;
            atualizarPontos();
            mostrarNotificacao('Tarefa Concluída! Você ganhou ' + tarefas[index].pontos + ' pontos.');
            salvarDados();
        }
    }

    // Atualizar a quantidade de pontos no site
    function atualizarPontos() {
        document.getElementById('pontos').textContent = totalPontos;
    }

    // Salvar dados no localStorage
    function salvarDados() {
        localStorage.setItem('pontos', totalPontos);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    // Carregar dados do localStorage
    function carregarDados() {
        if (localStorage.getItem('usuarioLogado')) {
            const usuario = localStorage.getItem('usuarioLogado');
            totalPontos = parseInt(localStorage.getItem('pontos')) || 0;
            tarefas = JSON.parse(localStorage.getItem('tarefas')) || tarefas;
            document.getElementById('pontos').textContent = totalPontos;
        }
    }

    // Mostrar notificação
    function mostrarNotificacao(mensagem) {
        alert(mensagem);
    }
});
