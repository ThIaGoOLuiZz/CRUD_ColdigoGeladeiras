COLDIGO.produto = new Object();

$(documento).ready(function() {
	
	//CARREGA AS MARCAS REGISTRADAS NO BD NO SELECT DO FORMULÁRIO DE INSERIR
	COLDIGO.produto.carregaMarcas = function(){
		$.ajax({
			type: "GET",
			url: "/ProjetoTrilhaWeb/rest/marca/buscar",
			success: function() {
				
			},
			error: function() {
				
			}
		})
	}
});