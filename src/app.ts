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
        console.log('1');
        const t = document.createElement("div");
        t.classList.add("uncompletedTask");
        t.id = `task${this.id}`;
        t.innerHTML = `
                <h2 class="uTaskTitle">${this.name}</h2>
                <p class="uTaskDesc">${this.description}</p>
                <footer class="date">Data: ${this.date.toLocaleString()}</footer>
                <input type="checkbox" id="task${this.id}Checkbox">Concluída<br>
                <button class="deleteButton" id="task${this.id}Delete">Excluir</button>
            `;
            console.log('2');
     const checkbox = t.querySelector(`#task${this.id}Checkbox`) as HTMLInputElement;
        if (checkbox) {
            checkbox.addEventListener("change", () => {
                this.check(); 
            });
            console.log('3');
             const deleteBtn = t.querySelector(`#task${this.id}Delete`) as HTMLButtonElement;
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
   
        this.completed = !this.completed;

        const card = document.getElementById(`task${this.id}`);
        if(card){
            const titulo = card.querySelector("h2");
            const descricao = card.querySelector("p");

            if(this.completed){
                card.classList.remove("uncompletedTask");
                card.classList.add("completedTask");

                if (titulo) {
                    titulo.classList.remove("uTaskTitle");
                    titulo.classList.add("cTaskTitle"); 
                }
                if (descricao) {
                    descricao.classList.remove("uTaskDesc");
                    descricao.classList.add("cTaskDesc"); 
                }
                console.log(`A tarefa ${this.name} foi concluída.`);
            } else {
                card.classList.remove("completedTask");
                card.classList.add("uncompletedTask");

                if (titulo) {
                    titulo.classList.remove("cTaskTitle");
                    titulo.classList.add("uTaskTitle"); 
                }
                if (descricao) {
                    descricao.classList.remove("cTaskDesc");
                    descricao.classList.add("uTaskDesc"); 
                }
                console.log(`A tarefa ${this.name} está pendente.`);
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
        modal.classList.remove("ModalFechado");
        modal.classList.add("ModalAberto");
    });
}
if(closeButton){
    closeButton.addEventListener("click", () => {
        modal.close();
        modal.classList.remove("ModalAberto");
        modal.classList.add("ModalFechado");
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
        modal.classList.remove("ModalAberto");
        modal.classList.add("ModalFechado");
    });
}