body {
    font-family: Arial, sans-serif;
    background-color: #1e1e1e;
    color: white;
    margin: 0;
    padding: 0;
}

h1, h2 {
    color: #a8a8d7;
}

.tabs {
    display: flex;
    margin-top: 20px;
    justify-content: center;
}

.tab-button {
    background-color: #3a3a52;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px 5px 0 0;
}

.tab-button:hover {
    background-color: #6a6a91;
}

.tab-content {
    display: none;
    padding: 20px;
    margin-top: 20px;
    background-color: #2a2a3e;
    border-radius: 0 0 5px 5px;
}

.tab-content.active {
    display: block;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #3a3a52;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
}

img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

button {
    padding: 5px 10px;
    margin-top: 10px;
    background-color: #5c5c91;
    border: none;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #6a6a91;
}

#saldo {
    padding: 10px;
    background-color: #3a3a52;
    margin: 20px 0;
    text-align: center;
    font-size: 20px;
}
