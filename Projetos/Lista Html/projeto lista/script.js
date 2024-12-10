const tarefaInput = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const ListadeTarefas = document.getElementById("listaDeTarefas");

addBtn.addEventListener("click", () => {
    if (tarefaInput.value) {
        criarTarefa(tarefaInput.value)
        tarefaInput.value = "";
        tarefaInput.focus();
    } else {
        alert("Digite uma Tarefa Válida!");
        tarefaInput.focus();

    }
});

function criarTarefa(titulo) {
    const li = document.createElement("li");

    //adicionar texto a uma tarefa
    const textoDaTarefa = document.createElement("span");
    textoDaTarefa.innerText = titulo;

    //adicionar o chackbox
    const chackbox = document.createElement("input");
    chackbox.type = "checkbox";

    chackbox.addEventListener("change", ()=>{
        if(chackbox.checked){
            li.classList.add("Completed");
        }else{
            li.classList.remove("Completed");
        }
    });

    li.append(chackbox)
    li.append(textoDaTarefa);
    ListadeTarefas.append(li);

}
