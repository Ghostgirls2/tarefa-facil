/* Definindo o estilo básico do corpo da página */
body {
    font-family: 'Arial', sans-serif;
    background-color: #1e1e1e;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

/* Estilo do título principal */
h1 {
    font-size: 36px;
    color: #a8a8d7; /* Lilás suave */
    margin-bottom: 10px;
}

/* Estilo do subtítulo */
p {
    font-size: 18px;
    color: #c1c1e1; /* Branco acinzentado */
}

/* Estilo das abas de navegação */
.tabs {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
}

.tab-button {
    background-color: #6a6a91; /* Roxo claro */
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px 5px 0 0;
    font-size: 18px;
    margin: 0 10px;
}

.tab-button:hover {
    background-color: #4e4e7c; /* Roxo mais escuro */
}

/* Estilo das abas de conteúdo */
.tab-content {
    display: none;
    padding: 20px;
    margin-top: 20px;
    background-color: #2a2a3e; /* Roxo escuro */
    border-radius: 0 0 5px 5px;
    width: 80%;
    max-width: 900px;
}

/* Mostrar aba ativa */
.tab-content.active {
    display: block;
}

/* Estilo da lista de tarefas */
ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #3a3a52; /* Roxo escuro */
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
}

button {
    padding: 8px 20px;
    background-color: #6a6a91; /* Roxo claro */
    border: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #4e4e7c; /* Roxo mais escuro */
}

/* Estilo para o saldo de pontos */
#saldo {
    padding: 15px;
    background-color: #3a3a52;
    margin: 20px 0;
    text-align: center;
    font-size: 20px;
    width: 80%;
    max-width: 900px;
    border-radius: 8px;
}

/* Estilo para links */
a {
    color: #a8a8d7; /* Lilás suave */
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Estilo da caixa de tarefas concluídas */
button.concluida {
    background-color: #5c5c91; /* Roxo mais claro */
}
