package br.com.coldigogeladeiras.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("produto")
public class ProdutoRest extends UtilRest{
	@POST
	@Path("/inserir")
	@Consumes("application/*")
	public Response inserir(String produtoParam) {
		try {
			
		}catch(Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
		
	}
}
