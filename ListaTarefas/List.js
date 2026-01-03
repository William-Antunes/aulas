    const input = document.querySelector(".input-nova-tarefa")
    const button = document.querySelector(".btn-tarefas")
    const list = document.querySelector(".tarefas")

    function criaLi() {
        const li = document.createElement("li")
        return li 
    }

    input.addEventListener("keydown", function(e){
        if (e.key === "Enter") {
            if (!input.value) return;
            criaTarefa(input.value)
        }

    })


    function limpa() {
        input.value = ""
        input.focus()
    }

    function criaApagar(li) {
        li.innerText += " "
        const botaoApagar = document.createElement("button")
        botaoApagar.innerText = "Apagar"
        li.appendChild(botaoApagar)
        botaoApagar.setAttribute("class",'apagar')
        botaoApagar.setAttribute('title', 'Apagar este texto')
    }


    function criaTarefa(texto) {
        let li = criaLi();
        li.innerText = texto;
        list.appendChild(li)
        limpa()
        criaApagar(li)
        salvarTarefa()
    }

    button.addEventListener("click", function(e){
        if (!input.value) return;
        criaTarefa(input.value)
    })

    document.addEventListener('click', function(e){
        const el = e.target
        if (el.classList.contains('apagar')) {
            el.parentElement.remove()
            salvarTarefa()
        }

    })

    function salvarTarefa() {
        const liTarefas = list.querySelectorAll('li')
        const listaDeTarefas = []
    

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem("tarefas", tarefasJSON)

    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem("tarefas")
        const listaDeTarefas = JSON.parse(tarefas)
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa)
        }
    }
    adicionaTarefasSalvas()