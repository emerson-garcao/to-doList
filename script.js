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
  limpaInput();
  criaBtnApagar(li);
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
//Limpar input
function limpaInput(){
  inputTarefa.value = "";
  inputTarefa.focus();
}
//Botão Apagar
function criaBtnApagar(li){
const botaoApagar = document.createElement('button');
botaoApagar.innerText = "Apagar";
botaoApagar.setAttribute("class", "apagar");
botaoApagar.setAttribute("title", "Apagar esta tarefa");
li.appendChild(botaoApagar);
}
document.addEventListener('click', function(e){
  const el = e.target;
  if(el.classList.contains('apagar')){

    el.parentElement.remove()
  }
})