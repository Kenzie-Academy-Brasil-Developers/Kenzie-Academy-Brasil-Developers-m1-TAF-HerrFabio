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

if (gener === 'male') {
    console.log("Candidato do genero masculino.");
} else {
    console.log("Candidato do sexo feminino");
}

if (gener === 'male' && height >= 1, 60 + " altura") {
    console.log("Candidato apto pra realizar o TAF.");

} else {
    console.log("Candidato inapto para realizar o TAF.");
}

if (gener === 'male' && barReps == 12) {
    barReps = 10
    console.log("Candidato fez 10 pontos");
} else if (gener === 'male' && barReps == 11) {
    barReps = 9
    console.log("Candidato fez 9 pontos");

}else if (gener === 'male' && barReps == 10){
    barReps = 8
    console.log("Candidato fez 8 pontos");

}else if (gener === 'male' && barReps == 9){
    barReps = 7
    console.log("Candidato fez 7 pontos");

}else if (gener === 'male' && barReps == 8){
    barReps = 6
    console.log("Candidato fez 6 pontos");

}else if (gener === 'male' && barReps == 7){
    barReps = 5
    console.log("Candidato fez 5 pontos");

}else if (gener === 'male' && barReps == 6){
    barReps = 4
    console.log("Candidato fez 4 pontos");

}else if (gener === 'male' && barReps == 5){
    barReps = 3
    console.log("Candidato fez 3 pontos");

}else if (gener === 'male' && barReps == 4){
    barReps = 2
    console.log("Candidato fez 2 pontos");

}else if (gener === 'male' && barReps == 3){
    barReps = 1
    console.log("Candidato fez 1 pontos");

}else if (gener === 'male' && barReps == 2){
    barReps = 0
    console.log("Candidato fez 0 pontos");

}else if (gener === 'male' && barReps == 1){
    barReps = 0
    console.log("Candidato fez 0 pontos");

}else{
    console.log ("Candidato não fez barra.");
}

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
