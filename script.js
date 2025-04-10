document.addEventListener("DOMContentLoaded", function () {
    let pontos = 0;
    let pontosNecessariosParaSaque = {
        10: 1000,
        30: 2500,
        50: 4000,
        100: 8000
    };

    const tarefas = [
        { id: 1, descricao: "Beber água", pontos: 5, tipo: "saude" },
        { id: 2, descricao: "Jogar Roblox por 10 minutos", pontos: 10, tipo: "jogos", link: "https://www.roblox.com" },
        { id: 3, descricao: "Assistir 3 vídeos no TikTok", pontos: 7, tipo: "midias", link: "https://www.tiktok.com" },
        { id: 4, descricao: "Chegar ao nível 10 no Subway Surfers", pontos: 15, tipo: "jogos", link: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf" }
    ];

    const listaTarefas = document.getElementById("listaTarefas");
    const pontosDisplay = document.getElementById("pontos");
    const saqueSelect = document.getElementById("saqueValor");
    const botaoSaque = document.getElementById("sacarPix");

    function atualizarPontos() {
        pontosDisplay.textContent = `Pontos: ${pontos}`;
    }

    function criarElementoTarefa(tarefa) {
        const tarefaElemento = document.createElement("div");
        tarefaElemento.classList.add("task-card");

        const descricao = document.createElement("p");
        descricao.textContent = tarefa.descricao;

        const botaoConcluir = document.createElement("button");
        botaoConcluir.classList.add("button");
        botaoConcluir.textContent = "Concluir";
        botaoConcluir.disabled = tarefa.tipo !== "saude"; // Somente "Beber água" pode ser concluída direto

        if (tarefa.link) {
            const link = document.createElement("a");
            link.href = tarefa.link;
            link.textContent = "Acessar";
            link.target = "_blank";
            tarefaElemento.appendChild(link);

            link.addEventListener("click", function () {
                setTimeout(() => {
                    botaoConcluir.disabled = false;
                }, 10000); // Simula 10 segundos de espera antes de liberar a conclusão
            });
        }

        botaoConcluir.addEventListener("click", function () {
            pontos += tarefa.pontos;
            atualizarPontos();
            botaoConcluir.disabled = true;
            botaoConcluir.textContent = "Concluído";
        });

        tarefaElemento.appendChild(descricao);
        tarefaElemento.appendChild(botaoConcluir);
        listaTarefas.appendChild(tarefaElemento);
    }

    tarefas.forEach(criarElementoTarefa);
    atualizarPontos();

    botaoSaque.addEventListener("click", function () {
        const valorSaque = parseInt(saqueSelect.value);
        if (pontos >= pontosNecessariosParaSaque[valorSaque]) {
            pontos -= pontosNecessariosParaSaque[valorSaque];
            atualizarPontos();
            alert(`Saque de R$${valorSaque} solicitado com sucesso!`);
        } else {
            alert("Você não tem pontos suficientes para esse saque.");
        }
    });
});
