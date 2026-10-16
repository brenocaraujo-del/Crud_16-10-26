
let tarefas = [

    "Estudar JavaScript",
    "Fazer exercícios",
    "Ler um livro"

];

let active = true;

while (active) {
    alert("===== MINHA TODO LIST ===== \n\n1 - Caso queira cadastrar tarefa\n2 - Caso queira listar tarefas\n3 - Caso queira buscar tarefa\n4 - Caso queira atualizar tarefa\n5 - Caso queira excluir tarefa\n6 - Caso queira fltrar tarefas\n7 - Caso queira adicionar tarefa no início\n8 - Caso queira remover primeira tarefa\n9 - Caso queira remover última tarefa\n0 - sair\n\nQualquer outro numero sera invalidado!")

    opcao = Number(prompt("Escolha uma opção"));

    switch (opcao) {

        // 1 - Cadastrar tarefa       

        case 1:
            let tarefaAdd = prompt("Escreva sua nova tarefa: ")
            if (tarefaAdd === "") {
                alert("comando invalido");
            }
            else {
                let resultadocriado = tarefas.find(tarefa => tarefa.toLowerCase().includes(createtask.toLowerCase().trim()))
                if (resultadocriado === undefined) {
                    tarefas.push(createtask);
                    alert("Tarefa criada com sucesso");
                }
                else {
                    alert("Tarefa ja existente")
                }
                break;
            }
        // 2 - Listar as tarefas

        case 2:
            if (tarefas.length > 0) {
                tarefas.forEach(tarefa => alert(tarefa));
            }
            else {
                alert("Nunhuma tarefa encontrada")
            }
            break;


        // 3 - Buscar tarefa

        case 3:

            break;


        // 4 - Atualizar tarefa

        case 4:

            break;


        // 5 - Excluir tarefa

        case 5:

            break;


        // 6 - Filtrar tarefas

        case 6:

            break;


        // 7 - Adicionar tarefa no início

        case 7:

            break;


        // 8 - Remover primeira tarefa

        case 8:

            break;


        // 9 - Remover última tarefa

        case 9:

            break;


        // 0 - Sair

        case 0:

            active = false
            break;




        default:
            break;
    }
}
