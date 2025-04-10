document.addEventListener('DOMContentLoaded', function() {
    const tasksButton = document.querySelector('#tasksButton');
    
    tasksButton.addEventListener('click', function() {
        alert('Você será redirecionado para a página de tarefas!');
    });
});
