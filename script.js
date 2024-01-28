import { ReciboSimples } from './Modulos/ReciboSimples.js';
import { ReciboLocaliz } from './Modulos/ReciboLocaliz.js';
import { ReciboContato } from './Modulos/ReciboContato.js';

document.addEventListener('DOMContentLoaded', function() {
  // Selecione o botão
  const botaoGeraRecibo = document.getElementById('botao-gerar-recibo');

  // Adicione um ouvinte de eventos de clique ao botão
  botaoGeraRecibo.addEventListener('click', geraRecibo);
});

// Função geraRecibo
function geraRecibo() {
    const input = document.getElementById('link');
    const linkValue = input.value.trim(); // Obtém o valor do input e remove espaços em branco extras

    if (linkValue === '') {
        
      ReciboSimples ();

    } else {
    
      var checkbox = document.getElementById("checkboxRecibo");

        if (checkbox.checked) {
            ReciboContato();
        } else {
            ReciboLocaliz();
        }
      
    }
}

// Função para exibir a hora atual
function mostrarHora() {
    const elementoHora = document.getElementById('horaAtual');

    if (elementoHora) {
        const agora = new Date(); // Obtém a data e hora atuais
        const hora = agora.toLocaleTimeString(); // Formata a hora para o formato HH:MM:SS

        elementoHora.textContent = 'Hora do registro: ' + hora; // Atualiza o conteúdo do elemento com a hora atual
    } else {
        console.error('Elemento com ID "horaAtual" não encontrado.');
    }
}


function mostrarOcultarTroco() {
    var formaPagamento = document.getElementById("pagamento").value;
    var caixaTroco = document.getElementById("caixaTroco");
    var trocoResult = document.getElementById("troco_result");
    var resultadoTroco = document.getElementById("resultadoTroco");

    // Se a forma de pagamento for "Dinheiro", mostra o campo de troco, caso contrário, oculta
    if (formaPagamento === "Dinheiro") {
        caixaTroco.style.display = "block";
        trocoResult.style.display = "block";
        resultadoTroco.style.display = "block";
    } else {
        caixaTroco.style.display = "none";
        trocoResult.style.display = "none";
        resultadoTroco.style.display = "none";
    }
}

// Verifica se o documento está pronto antes de executar o código
document.addEventListener('DOMContentLoaded', function() {

    // Chama a função inicialmente para exibir a hora atual
    mostrarHora();
    mostrarOcultarTroco();

    // Atualiza a hora a cada segundo
    setInterval(mostrarHora, 1000);
    setInterval(mostrarOcultarTroco, 1000);
});
