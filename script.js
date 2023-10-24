const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

//Criandor de Lista
function criaLi(){
  const li = document.createElement("li");
  return li;
}
//Criador de tarefa
function criaTarefa(textoInput){
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
}
btnTarefa.addEventListener("click", function(e){
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)
})
//Ativar Função "Enter"
inputTarefa.addEventListener("keypress", function(e){
  if (e.keyCode === 13){
    criaTarefa(inputTarefa.value)
  }
})