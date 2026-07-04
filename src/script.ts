class Task{
    name:string;
    description:string;
    completed:boolean;
    id:number;
    date: Date;

    constructor(name:string, description:string, completed:boolean){
        this.name = name;
        this.description = description;
        this.id = Math.random()
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
                <input type="checkbox" class="taskCheckbox">Concluída</input><br>
                <button class="deleteTask">Excluir</button>
            `;
        console.log(`A tarefa ${this.name} foi criada com sucesso!`);
        return t;
    }
    remove(){
        this.name="";
        this.description="";
        this.completed=false;
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