// tasks.js

const tasks = [
    { title: 'Criar logo', description: 'Design para logo de marca', reward: 'R$10' },
    { title: 'Avaliar site', description: 'Deixe um feedback sobre o design', reward: 'R$5' },
    { title: 'Testar app', description: 'Teste um aplicativo e envie sua opinião', reward: 'R$8' }
];

const taskList = document.getElementById('taskList');

tasks.forEach(task => {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p><strong>Recompensa: ${task.reward}</strong></p>
        <button class="complete-btn">Marcar como Completa</button>
    `;
    taskList.appendChild(li);

    // Adiciona evento para marcar a tarefa como completa
    li.querySelector('.complete-btn').addEventListener('click', function() {
        alert('Tarefa completada! Recompensa adicionada.');
        li.style.textDecoration = 'line-through'; // Marca como completa
    });
});
