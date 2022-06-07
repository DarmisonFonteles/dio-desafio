function comparanumeros(num1, num2){

    if (!num1 || !num2) return 'Defina dois números!';

    const pfrase = criapfrase(num1, num2);
    const sfrase = criasfrase(num1, num2);

    return `${pfrase} ${sfrase}`
}

function criapfrase(num1, num2){
    let saoiguais = '';

    if(num1 !==  num2){
        saoiguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoiguais} são iguais.`
};

function criasfrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparanumeros(1, 7));