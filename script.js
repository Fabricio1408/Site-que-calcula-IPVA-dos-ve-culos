function ipva(){
    var valor, v1, veiculo, result, opcoes, a, b, c, d;
    veiculo = document.getElementById('veiculo').value;
    valor = Number(document.getElementById('valor-carro').value)
    result = document.getElementById('resultado');
    opcoes = document.getElementById('options').value;

    

    if (opcoes == 'sp'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.04} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        }
    
    }
    if (opcoes == 'rn' || opcoes == 'ap' || opcoes == 'am' || opcoes == 'ce' || opcoes == 'pi' || opcoes == 'ro' || opcoes == 'rs' || opcoes == 'se'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        }
    
    }
    if (opcoes == 'rj' || opcoes == 'mg'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.04} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        }
    
    }
    if (opcoes == 'ac'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.01} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.01} R$.`;
        }
        console.log(ano)

    
    }
    if (opcoes == 'al' || opcoes == 'ba' || opcoes == 'pb' || opcoes == 'pe'){
        result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
    }
    if (opcoes == 'pr'){
        result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.04} R$.`;
    }

    if (opcoes == 'to'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        }
    
    }
    if (opcoes == 'df'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.04} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.01} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        }
    
    }
    if (opcoes == 'es' || opcoes == 'sc'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.01} R$.`;
        }
    
    }
    if (opcoes == 'go'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.04} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        }
    
    }
    if (opcoes == 'rr'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        }
    
    }
    if (opcoes == 'pa' || opcoes == 'mt' || opcoes == 'ma'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.03} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.01} R$.`;
        }
    
    }
    if (opcoes == 'ms'){
        if (veiculo == 'carro') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.04} R$.`;
        } else if (veiculo == 'carro-servico') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.04} R$.`;
        } else if (veiculo == 'moto') {
            result.innerHTML = `O valor a pagar de IPVA é de: ${valor * 0.02} R$.`;
        }
    
    }

}

function verificar(){
    var ano, ise, vh, amo, burro;
    ano = Number(document.getElementById('ano').value);
    opcoes = document.getElementById('options').value;
    vh = document.getElementById('calculo')
    amo = document.getElementById('amo')
    burro = document.getElementById('burro')


    ise = document.getElementById('isencao')
    
    if (ano <= 2013 && ano >= 1900 && (opcoes == 'rn' || opcoes == 'ap' || opcoes == 'rr')) {
        ise.innerHTML = 'Seu veiculo esta isento!😍 Seu estado isenta veículos com mais de 10 anos após a fabricação.😃';
        vh.style.display = 'none'
        amo.style.display = 'block'
        burro.style.display = 'none'



    }
    else if (ano <= 2008 && ano >= 1900 &&(opcoes == 'df' || opcoes == 'rj' || opcoes == 'am' || opcoes == 'ba' || opcoes == 'ce' || opcoes == 'es' || opcoes == 'pb' || opcoes == 'pa' || opcoes == 'ma' || opcoes == 'ro' || opcoes == 'se' || opcoes == 'pi' || opcoes == 'to' || opcoes == 'go' || opcoes == 'mg')) {
        ise.innerHTML = 'Seu veiculo esta isento!😍 Seu estado isenta veículos com mais de 15 anos após a fabricação.😃';
        vh.style.display = 'none'
        amo.style.display = 'block'
        burro.style.display = 'none'




    }
    else if (ano <= 2005 && ano >= 1900 && opcoes == 'mt'){
        ise.innerHTML = 'Seu veiculo esta isento!😍 Seu estado isenta veículos com mais de 18 anos após a fabricação.😃';
        vh.style.display = 'none'
        amo.style.display = 'block'
        burro.style.display = 'none'




    }
    else if (ano <= 2003 && ano >= 1900 &&(opcoes == 'sp' || opcoes == 'ms' || opcoes == 'ac' || opcoes == 'al' || opcoes == 'pr'|| opcoes == 'rs')) {
        ise.innerHTML = 'Seu veiculo esta isento!😍 Seu estado isenta veículos com mais de 20 anos após a fabricação.😃';
        vh.style.display = 'none'
        amo.style.display = 'block'
        burro.style.display = 'none'




    }
    else if (ano <= 1993 && ano >= 1900 &&(opcoes == 'sc' || opcoes == 'pe')) {
        ise.innerHTML = 'Seu veiculo esta isento!😍 Seu estado isenta veículos com mais de 20 anos após a fabricação.😃';
        vh.style.display = 'none'
        amo.style.display = 'block'
        burro.style.display = 'none'




    }
    else if (ano === 0 || ano >= 2025 || ano <= 1900) {
        ise.innerHTML = 'Digite o ano do seu veículo corretamente🤬🤮. Ex: 2013.';
        vh.style.display = 'none'
        burro.style.display = 'block'
        amo.style.display = 'none'




    }
    else{
        ise.innerHTML = 'Seu veiculo não esta isento!😫 Prossiga com as próximas etapas.'
        vh.style.display = 'block'
        burro.style.display = 'none'
        amo.style.display = 'none'


    }
    
}


