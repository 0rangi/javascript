const lista = document.querySelector("#app ul")
const input = document.querySelector("#app input")
const button = document.querySelector("#app button")

const tarefas = ["estudar para Prova", "dormir cedo"]

for (const iterator of tarefas) {
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(iterator)

tarefaElement.appendChild(tarefaText)
lista.appendChild(tarefaElement)
}

