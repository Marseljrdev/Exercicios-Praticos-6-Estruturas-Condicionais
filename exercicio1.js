// Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

const idade = parseInt(prompt('Digite a idade do motorista: '));

    if (idade >= 18) {
        console.log('Pode dirigir');
    }
    else {
        console.log('Não pode dirigir');
    }