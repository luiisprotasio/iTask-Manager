class Task{
    name:string;
    description:string;
    completed:boolean;
    id:number;
    date: Date;

    constructor(name:string, description:string, completed:boolean){
        this.name = name;
        this.description = description;
        this.id = Math.floor(Math.random() * 10000);
        this.completed = completed;
        this.date = new Date();
    }
    add(){
        const t = document.createElement("div");
        t.classList.add("uncompletedTask");
        t.id = `task${this.id}`;
        t.innerHTML = `
                <h2 class="uTaskTitle">${this.name}</h2>
                <p class="uTaskDesc">${this.description}</p>
                <footer class="date">Data: ${this.date.toLocaleDateString()}</footer>
                <input type="checkbox" id="task${this.id}Checkbox">Concluída</input><br>
                <button class="deleteButton">Excluir</button>
            `;
     const checkbox = t.querySelector(".taskCheckbox") as HTMLInputElement;
        if (checkbox) {
            checkbox.addEventListener("change", () => {
                this.check(); 
            });
             const deleteBtn = t.querySelector(".deleteButton") as HTMLButtonElement;
        if (deleteBtn) {
            deleteBtn.addEventListener("click", () => {
                t.remove(); 
                this.remove();
            });
        }
            console.log(`A tarefa ${this.name} foi criada com sucesso!`);
        return t;  
    }
        }
    remove(){
        this.name="";
        this.description="";
        this.completed=false;
        this.id=-1;
        console.log(`A tarefa ${this.name} foi excluída.`);
    }
    check(){
        if(this.completed){
        this.completed = true;
        const card = document.getElementById(`task${this.id}`);
        if(card){
            const titulo = card.querySelector("h2");
            const descricao = card.querySelector("p");
            card.classList.remove("uncompletedTask");
            card.classList.add("completedTask");

        if (titulo) {
            titulo.classList.remove("uTaskTitle");
            titulo.classList.add("cTaskTitle"); 

        if (descricao) {
            descricao.classList.remove("uTaskDesc");
            descricao.classList.add("cTaskDesc"); 
            console.log(`A tarefa ${this.name} foi concluída.`);
                }
            }
        }
    } else {
        this.completed = false;
        const card = document.getElementById(`task${this.id}`);
        if(card){
            const titulo = card.querySelector("h2");
            const descricao = card.querySelector("p");
            card.classList.remove("completedTask");
            card.classList.add("uncompletedTask");

        if (titulo) {
            titulo.classList.remove("cTaskTitle");
            titulo.classList.add("uTaskTitle"); 

        if (descricao) {
            descricao.classList.remove("cTaskDesc");
            descricao.classList.add("uTaskDesc"); 
            console.log(`A tarefa ${this.name} está pendente.`);
                }
            }

    }
}
}
}
const addTaskButton = document.getElementById("newTask");
const taskLists = document.querySelector(".taskList") as HTMLDivElement;
const confirmTaskButton = document.getElementById("confirmTask");
const closeButton = document.getElementById("buttonClose");
const modal = document.querySelector(".ModalFechado") as HTMLDialogElement;
if(addTaskButton){
    addTaskButton.addEventListener("click", () => {
        modal.showModal();
    });
}
if(closeButton){
    closeButton.addEventListener("click", () => {
        modal.close();
    });
}
if(confirmTaskButton){
    confirmTaskButton.addEventListener("click", () => {
        const taskNameInput = document.getElementById("taskName") as HTMLInputElement;
        const taskDescInput = document.getElementById("taskDesc") as HTMLTextAreaElement;
        const taskName = taskNameInput.value;
        const taskDesc = taskDescInput.value;
        const newTask = new Task(taskName, taskDesc, false);
        if(taskLists){
            const Tarefa = newTask.add();
            if(Tarefa){
                taskLists.prepend(Tarefa);
            }
        }
        taskNameInput.value = "";
        taskDescInput.value = "";
        modal.close();
    });
}