const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !=='') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (valorIMC => 25) {
            classificacao = "está acima do Peso";
        } if (valorIMC <= 16)  {
            classificacao = "está abaixo do Peso"
        } else {
            classificacao = "está Com Peso Normal"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha corretamente todos os campos!!!'
    }

}

calcular.addEventListener('click', imc);

