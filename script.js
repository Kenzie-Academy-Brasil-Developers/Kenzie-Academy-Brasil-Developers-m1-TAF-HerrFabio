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
if (gender == 'male') {


    //aqui chama a variavel e compara se valor é maior ou igual a 1,70 
    if (height >= 1.70) {

        //aqui chama a variavel e compara se valor é maior ou igual a 6 ou se a segunda variável é maior ou igual a 15 
        if (barReps >= 6 || barSeconds >= 15) {
            // aqui chama a variavel e compara se valor é maior ou igual a 41
            if (abs >= 41) {
                //aqui compara uma igualdade entre as duas variáveis  e usa a condicional or para uma segunda alternativa de comparação de igualdade para ver se ambas as variáaveis cumprem o valor mínimo 
                if (runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200) {
                    //aqui compara uma igualdade entre as duas variáveis e usa a condicional or para uma segunda alternativa para ver se a variável não ultrapassa o valor máximo 
                    if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30){

                        passed = true;
                    }
                }
            }
        }
    }

}

//aqui chama a variavel e compara se genero é igual a female
if (gender == 'female') {

    //     //aqui chama a variavel e compara se valor é maior ou igual a 1,60 
    if (height >= 1.60){

        //         //aqui chama a variavel e compara se valor é maior ou igual a 5 ou se a segunda variável é maior ou igual a 12 
        if (barReps >= 5 || barSeconds >= 12){
            
            //         // aqui chama a variavel e compara se valor é maior ou igual a 41
            if (abs >= 41){
                
                //         //aqui compara uma igualdade entre as duas variáveis e usa a condicional or para uma segunda alternativa de comparação de igualdade para ver se ambas as variáveis cumprem suas condições 
                if (runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320){
                    
                    //         //aqui compara uma igualdade entre as duas variáveis e usa a condicional or para uma segunda alternativa para ver se a variável não ultrapassa o valor máximo 
                    if (swimDistance >= 100 && swimTime <= 1 || diveTime <= 30){

                        passed = true
                    }
                    
                }
            }
        }
        
    }
    
}
console.log(passed);
    
    /*
        Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
        Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
    */    