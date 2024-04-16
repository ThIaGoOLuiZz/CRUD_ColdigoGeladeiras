package br.com.coldigogeladeiras.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import br.com.coldigogeladeiras.jdbcinterface.ProdutoDAO;
import br.com.coldigogeladeiras.modelo.Produto;

public class JDBCProdutoDAO implements ProdutoDAO{
	private Connection conexao;
	
	public JDBCProdutoDAO(Connection conexao) {
		this.conexao = conexao;
	}
	
	public boolean inserir(Produto produto) {
		
		String comando = "INSERT INTO produtos " 
					+ "(id, categoria, modelo, capacidade, valor, marcas_id)"
					+ "VALUES (?,?,?,?,?,?)";
		
		PreparedStatement p;
		
		try {
			//PREPARA O COMANDO PARA EXECUÇÃO NO BD EM QUE NOS CONECTAMOS
			p = this.conexao.prepareStatement(comando);
			
			//SUBSTITUI NO COMANDO OS "?" PELOS VALORES DO PRODUTO
			p.setInt(1, produto.getId());
			p.setString(2, produto.getCategoria());
			p.setString(3, produto.getModelo());
			p.setInt(4, produto.getCapacidade());
			p.setFloat(5, produto.getValor());
			p.setInt(6, produto.getMarcaId());
			
			//EXECUTA COMANDO NO BD
			p.execute();
			
		}catch (SQLException e){
			e.printStackTrace();
			return false;
		}
		return true;
	}
}
