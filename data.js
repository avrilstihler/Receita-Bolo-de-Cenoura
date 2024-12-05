// Dados da receita em um objeto
const receita = {
    ingredientes: [
        "4 cenouras médias",
        "4 ovos",
        "1 xícara de óleo",
        "2 xícaras de açúcar",
        "2 1/2 xícaras de farinha de trigo",
        "1 colher de sopa de fermento em pó",
        "1 pitada de sal"
    ],
    modoPreparo: [
        "Preaqueça o forno a 180°C.",
        "Bata no liquidificador as cenouras, ovos, óleo e açúcar até ficar bem homogêneo.",
        "Adicione a farinha de trigo e o fermento e bata por mais alguns segundos.",
        "Despeje a massa em uma forma untada e enfarinhada.",
        "Asse por aproximadamente 40 minutos ou até dourar e passar no teste do palito.",
        "Deixe esfriar e sirva!"
    ]

};

// Preenchendo os ingredientes na página
const ingredientesList = document.getElementById("ingredientes");
receita.ingredientes.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientesList.appendChild(li);
});

// Preenchendo o modo de preparo na página
const modoPreparoList = document.getElementById("modo-preparo");
receita.modoPreparo.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modoPreparoList.appendChild(li);
});