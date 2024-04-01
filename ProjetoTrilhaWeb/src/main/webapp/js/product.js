COLDIGO.produto = new Object();

$(document).ready(function() {
	
	//CARREGA AS MARCAS REGISTRADAS NO BD NO SELECT DO FORMULÁRIO DE INSERIR
	COLDIGO.produto.carregaMarcas = function(){
		alert("Tentando buscar marcas");
		$.ajax({
			type: "GET",
			url: "/ProjetoTrilhaWeb/rest/marca/buscar",
			success: function(marcas) {
				alert("Sucesso");
			},
			error: function(info) {
				COLDIGO.exibirAviso("Erro ao buscar as marcas: " + info.status + " _ " + info.statusText);
				
				$("#selMarca").html("");
				var option = document.createElement("option");
				option.setAttribute("value", "");
				option.innerHTML = ("Erro ao carregar marcas!");
				$("#selMarca").append(option);
				$("#selMarca").addClass("aviso");
			}
		})
	}
	
	COLDIGO.produto.carregaMarcas();
});
