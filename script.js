/* Estilos Gerais */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #1c1c1c;
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
}

.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}

/* Títulos */
h1 {
    color: #c084fc;
    font-size: 28px;
    margin-bottom: 20px;
}

/* Botões */
.button {
    background-color: #a855f7;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

.button:hover {
    background-color: #9333ea;
    transform: scale(1.05);
}

/* Cartões de Tarefas */
.task-card {
    background: #2a2a2a;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.task-card:hover {
    transform: translateY(-3px);
}

/* Aba de Navegação */
.navbar {
    background: #2d2d2d;
    padding: 10px;
    border-bottom: 3px solid #c084fc;
}

.navbar a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
    transition: color 0.3s;
}

.navbar a:hover {
    color: #c084fc;
}

/* Rodapé */
.footer {
    margin-top: 20px;
    font-size: 12px;
    color: #999;
}

/* Layout Responsivo */
@media (max-width: 600px) {
    .container {
        padding: 10px;
    }
    
    .navbar a {
        display: block;
        margin: 10px 0;
    }
}
