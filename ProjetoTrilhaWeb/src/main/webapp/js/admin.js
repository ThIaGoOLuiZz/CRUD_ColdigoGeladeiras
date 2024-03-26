/*CRIA O OBJETO COLDIGO, QUE SERÁ USADO COMO IDENTIFICADOR DO PROJETO*/
COLDIGO = new Object();

$(document).ready(function() {
    $("header").load("http://localhost:8085/ProjetoTrilhaWeb/pages/admin/general/header.html");
    $("footer").load("http://localhost:8085/ProjetoTrilhaWeb/pages/admin/general/footer.html");
    
    //FUNÇÃO PARA CARREGAMENTO DE PÁGINAS DE CONTEÚDO, QUE RECEBE COMO PARAMETRO O NOME DA PASTA COM A PÁGINA A SER CARREGADA
    
    COLDIGO.carregaPagina = function(pagename){
		//LIMPA A TAG SECTION, EXCLUINDO TODO O CONTEUDO DE DENTRO DELA
		$("section").empty();
		//CARREGA A PÁGINA SOLICITADA DENTRO 	DA TAG SECTION
		$("section").load(pagename+"/", function(response, status, info){
			if(status == "error"){
				var msg = "Houve um erro ao encontrar a página: " + info.status + " - " + info.statusText;
				$("section").html(msg); 
			}
		}
	)};
});