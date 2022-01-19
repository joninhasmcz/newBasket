var total_coletivo_time1, total_coletivo_time2, total_individual_time1, total_individual_time2;
var prev_banca;

function printarValor(total_coletivo_time1, total_coletivo_time2,total_individual_time1, total_individual_time2, prev_banca) {

    var conteudo_previsao = "";
    var conteudo = " <h2>Total Coletivo</h2> <br>Primeiro Time: " + total_coletivo_time1 + "<br>Segundo Time: " + total_coletivo_time2 + "<br>" + 
    "<br><h2>Total Individual</h2> <br>Primeiro Time: " + total_individual_time1 + "<br>Segundo Time: " + total_individual_time2 + "<br><br><hr width = 100% align = right noshade><br>" +
    "<br><h2>Médias</h2><br>Previsão da Banca: " + prev_banca + "<br>" + "Média Geral Coletiva: " + (total_coletivo_time1 + total_coletivo_time2)/2 + "<br>" + 
    "Média Geral Individual: " + (total_individual_time1 + total_individual_time2) + "<br>";
    if(prev_banca > (total_coletivo_time1 + total_coletivo_time2)/2) {
        conteudo_previsao += "<h2>Sugestão</h2><br>" + "Apostar para" + ' <i class="fas fa-minus-square"></i> ' + "<br> baseado nos dados COLETIVOS...<br>";
    } else {
        conteudo_previsao += " <h2>Sugestão</h2> <br> Apostar para" + ' <i class="fas fa-plus-square"></i> ' + "<br> baseado nos dados COLETIVOS...<br>";
    }
    conteudo_previsao += "<br><hr width = 100% align = right noshade><br>";

    if(prev_banca > (total_individual_time1 + total_individual_time2)) {
        conteudo_previsao += '<h2>Sugestão</h2><br>' + "Aposte para" + ' <i class="fas fa-minus-square"></i> ' + "<br> baseado nos dados INDIVIDUAIS...<br>";
    } else {
        conteudo_previsao += " <h2>Sugestão</h2> <br> Apostar para" + ' <i class="fas fa-plus-square"></i>' + "<br> baseado nos dados INDIVIDUAIS...<br>";
    }  
    
    // console.log("CONTEUDO PREVISAO" + conteudo_previsao);
    var dados_media = document.getElementById("media");
    var dados_sugestao = document.getElementById("sugestao");

    dados_media.innerHTML = conteudo; 
    dados_sugestao.innerHTML = conteudo_previsao;
    
    
    // <i class="fas fa-minus-square"></i>


    //         <i class="fas fa-plus-square"></i>
    

}


function verificarFormulario(modalName) {
    
    var ponto_fei_1 = document.getElementById("timeFeiTime1id").value;
    var ponto_tom_1 = document.getElementById("timeTomTime1id").value;
    var ponto_fei_2 = document.getElementById("timeFeiTime2id").value;
    var ponto_tom_2 = document.getElementById("timeTomTime2id").value;
    var jogos_1 = document.getElementById("gamesTime1id").value;
    var jogos_2 = document.getElementById("gamesTime2id").value;
    var prev_banca = document.getElementById("previd").value;

    // console.log(ponto_fei_1);


    if (ponto_fei_1 == '' || ponto_tom_1 == '' || ponto_fei_2 == '' || ponto_tom_2 == '' || jogos_1 == '' || jogos_2 == '' || prev_banca == '') {
        alert("Por favor, preencha todos os campos.");
    } else {

        // document.getElementById("meu_form").submit();
        calcular(ponto_fei_1, ponto_tom_1, ponto_fei_2, ponto_tom_2, prev_banca, jogos_1, jogos_2, modalName);               
    }
}

function openModal(modalName) {

    let modal = document.getElementById(modalName);

    // if(typeof modal == 'undefined' || modal === null)
    //     return;

    modal.style.display = 'block';
    // console.log("passou da mudança do modal" + "<br></br>");

}

function closeModal(modalName) {

    let modal = document.getElementById(modalName);

    // if(typeof modal == 'undefined' || modal === null)
    //     return;

    modal.style.display = 'none';

}


function calcular(valor_total1_feito, valor_total1_tomado, valor_total2_feito, valor_total2_tomado, previsao_banca, jogos_time1, jogos_time2, modalName) {

    // console.log("passou do calcular FUNC\n");
    total_coletivo_time1 = (parseInt(valor_total1_feito) + parseInt(valor_total1_tomado))  / jogos_time1;
    total_coletivo_time2 = (parseInt(valor_total2_feito) + parseInt(valor_total2_tomado))  / jogos_time2;
    total_individual_time1 = (valor_total1_feito) / jogos_time1;
    total_individual_time2 = (valor_total2_feito) / jogos_time2;
    prev_banca = previsao_banca;

    printarValor(total_coletivo_time1, total_coletivo_time2, total_individual_time1, total_individual_time2, prev_banca);

    openModal(modalName);


}




// function pegarValor() {
//     var jogos_time1 = prompt("Digite quantos jogos o time 1 fez:", "JOGOS FEITOS TIME 1");
//     var jogos_time2 = prompt("Digite quantos jogos o time 2 fez:", "JOGOS FEITOS TIME 2");
//     var time1_f = prompt("Digite quantos pontos o time 1 fez na temporada:", "PONTOS FEITOS TIME 1");
//     var time1_t = prompt("Digite quantos pontos o time 1 tomou na temporada:", "PONTOS TOMADOS TIME 1");
//     var time2_f = prompt("Digite quantos pontos o time 2 fez na temporada:", "PONTOS FEITOS TIME 1");
//     var time2_t = prompt("Digite quantos pontos o time 2 tomou na temporada:", "PONTOS TOMADOS TIME 2");
//     var previsaoBanca = prompt("Digite a previsão dos pontos da Banca:", "PREVISAO BANCA");

//     if(confirm("Tem certeza que quer fazer esse cálculo?")) {
        
//         calcular(time1_f, time1_t, time2_f, time2_t, previsaoBanca, jogos_time1, jogos_time2);
//     } else {
//         alert("Você optou por sair, obrigado, volte sempre!!");
//     }
// }
