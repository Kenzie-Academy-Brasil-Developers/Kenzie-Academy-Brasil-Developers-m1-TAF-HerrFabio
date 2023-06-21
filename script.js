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


// Testa a variável gender para comparar se tem o valor 'male'
if (gender == 'male') {


    //Testando se o valor da variável é maior ou igual a 1,70 
    if (height >= 1.70) {

        //Testando se a variavel barReps tem o valor maior ou igual a 6 ou se a segunda variável barSeconds é maior ou igual a 15 
        if ((barReps >= 6) || (barSeconds >= 15)) {
            
            //Testando se a variavel abs tem o valor maior ou igual a 41
            if (abs >= 41) {
            
                //Testando a igualdade entre as duas variáveis runDistance tem o valor >= a 3000 e se a variável runTime tem o valor <= a 720 usa a condicional or para uma segunda alternativa de comparação de igualdade para ver se ambas as variáveis runDistance tem o valor >= 5000 e se runTime tem o valor <= 1200
                if ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) {
            
                    //Testando a igualdade entre as duas variáveis swimDistance para ver se tem o valor >= 100 e swimTime para ver se tem o valor <= 60, usa a condicional or como uma segunda alternativa para ver se a variável diveTime tem o valor <= 30 
                    if ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30)) {
                        
                        //Caso todas as condições sejam 'true', a variável passed recebe esse valor 
                        passed = true;
                    }
                }
            }
        }
    }

}

// Testa a variável gender para comparar se tem o valor 'female'
if (gender == 'female') {

    //Testando se o valor da variável height é maior ou igual a 1,60 
    if (height >= 1.60) {

        //Testando se a variavel barReps tem o valor maior ou igual a 6 ou se a segunda variável barSeconds é maior ou igual a 15 
        if ((barReps >= 5) || (barSeconds >= 12)) {

            //Testando se a variavel abs tem o valor maior ou igual a 41
            if (abs >= 41) {

                //Testando a igualdade entre as duas variáveis runDistance tem o valor >= a 4000 e se a variável runTime tem o valor <= a 900 usa a condicional or para uma segunda alternativa de comparação de igualdade para ver se ambas as variáveis runDistance tem o valor >= 6000 e se runTime tem o valor <= 1320
                if ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) {

                    //Testando a igualdade entre as duas variáveis swimDistance para ver se tem o valor >= 100 e swimTime para ver se tem o valor <= 60, usa a condicional or como uma segunda alternativa para ver se a variável diveTime tem o valor <= 30
                    if ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30)) {
                        //Caso todas as condições sejam 'true', a variável passed recebe esse valor 
                        passed = true
                    }

                }
            }
        }

    }

}
//Mostra o resultado true caso todas as condições tenham sido cumpridas, do contrário mostra false
console.log(passed);

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/