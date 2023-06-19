// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**


//aqui chama a variavel e compara se genero é igual a male
if (gener === 'male') {
    
    //aqui chama a variavel e compara se valor é maior ou igual a 1,70 e concatena com a string
} else if (height >= 1,70 + (" metros")) {

    //aqui chama a variavel e compara se valor é maior ou igual a 6 ou se a segunda variável é maior ou igual a 15 e concatena com a string
} else if (barReps >= 6 || barSeconds >= 15 + "segundos") {

    // aqui chama a variavel e compara se valor é maior ou igual a 41
} else if (abs >= 41){

    //aqui compara uma igualdade entre as duas variáveis concatenando as strings e usa a condicional or para uma segunda alternativa de comparação de igualdade para ver se ambas as variáaveis cumprem o valor mínimo e concatena as strings
} else if (runDistance >= 3 +('km') && runTime <= 12 +(' minutos') || runDistance >= 5 +("km") && runTime <= 20 +('minutos')){

    //aqui compara uma igualdade entre as duas variáveis concatenando as strings e usa a condicional or para uma segunda alternativa para ver se a variável não ultrapassa o valor máximo e concatena a string
} else if (swimDistance >= 100 +("metros") && swimTime <= 60 ("segundos") || diveTime <= 30 ("segundos") ){ 

}

//aqui chama a variavel e compara se genero é igual a female
if (gener === 'female') {
    
    //aqui chama a variavel e compara se valor é maior ou igual a 1,60 e concatena com a string
} else if (height >= 1,60 + (" metros")) {

    //aqui chama a variavel e compara se valor é maior ou igual a 5 ou se a segunda variável é maior ou igual a 12 e concatena com a string
} else if (barReps >= 5 || barSeconds >= 12 + "segundos") {

// aqui chama a variavel e compara se valor é maior ou igual a 41
} else if (abs >= 41){

    //aqui compara uma igualdade entre as duas variáveis concatenando as strings e usa a condicional or para uma segunda alternativa de comparação de igualdade para ver se ambas as variáveis cumprem suas condições e concatena as strings
} else if (runDistance >= 4 +('km') && runTime <= 12 +(' minutos') || runDistance >= 6 +("km") && runTime <= 22 +('minutos')){

    //aqui compara uma igualdade entre as duas variáveis concatenando as strings e usa a condicional or para uma segunda alternativa para ver se a variável não ultrapassa o valor máximo e concatena a string
} else if (swimDistance >= 100 +("metros") && swimTime <= 60 ("segundos") || diveTime <= 30 ("segundos") ){ 

}


/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
