# Hello_API
Este repositório tem como objetivo ilustrar uma API simples em Node.js e MongoDB, usando Express.js, e construir uma imagem do Docker.


Recursos disponíveis para acesso via API:
* [Categorias](#categorias-category)
* [Produtos](#produtos-product)
* [Usuários](#usuários-user)
* [Compras](#compras-purchase)

## Métodos
Requisições para a API devem seguir os padrões:

<table>
	<thead>
		<tr>
			<th>Método</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>GET</td>
			<td>Retorna informações de um ou mais registros.</td>
		</tr>
		<tr>
			<td>POST</td>
			<td>Utilizado para criar um novo registro.</td>
		</tr>
		<tr>
			<td>PUT</td>
			<td>Atualiza dados de um registro ou altera sua situação.</td>
		</tr>
		<tr>
			<td>DELETE</td>
			<td>Remove um registro do sistema.</td>
		</tr>
	</tbody>
</table>

## Respostas
Respostas da API seguem os padrões:

<table>
	<thead>
		<tr>
			<th>Código</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>200</td>
			<td>A requisição foi bem sucedida.</td>
		</tr>
		<tr>
			<td>201</td>
			<td>A requisição foi bem sucedida e um novo recurso foi criado como resultado.</td>
		</tr>
		<tr>
			<td>204</td>
			<td>A requisição foi bem sucedida e não há conteúdo de resposta.</td>
		</tr>
		<tr>
			<td>404</td>
			<td>O servidor não pode encontrar o recurso solicitado.</td>
		</tr>
		<tr>
			<td>500</td>
			<td>O servidor encontrou uma situação com a qual não sabe lidar.</td>
		</tr>
	</tbody>
</table>

# Categorias [/category]
Aqui você encontrada as rotas para essa tópico.

<table>
	<thead>
		<tr>
			<th>URL</th>
			<th>Método</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/category</td>
			<td>GET</td>
			<td>Lista todas as categorias.</td>
		</tr>
		<tr>
			<td>/category/:id</td>
			<td>GET</td>
			<td>Lista uma categoria.</td>
		</tr>
		<tr>
			<td>/category</td>
			<td>POST</td>
			<td>Cria uma nova categoria.</td>
		</tr>
		<tr>
			<td>/category/:id</td>
			<td>PUT</td>
			<td>Atualiza uma categoria.</td>
		</tr>
		<tr>
			<td>/category/:id</td>
			<td>DELETE</td>
			<td>Deleta uma categoria.</td>
		</tr>
	</tbody>
</table>

# Produtos [/product]
Aqui você encontrada as rotas para essa tópico.

<table>
	<thead>
		<tr>
			<th>URL</th>
			<th>Método</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/product</td>
			<td>GET</td>
			<td>Lista todos os produtos.</td>
		</tr>
		<tr>
			<td>/product/:id</td>
			<td>GET</td>
			<td>Lista um produto.</td>
		</tr>
		<tr>
			<td>/product</td>
			<td>POST</td>
			<td>Cria um novo produto.</td>
		</tr>
		<tr>
			<td>/product/:id</td>
			<td>PUT</td>
			<td>Atualiza um produto.</td>
		</tr>
		<tr>
			<td>/product/:id</td>
			<td>DELETE</td>
			<td>Deleta um produto.</td>
		</tr>
	</tbody>
</table>

# Usuários [/user]
Aqui você encontrada as rotas para essa tópico.

<table>
	<thead>
		<tr>
			<th>URL</th>
			<th>Método</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/user</td>
			<td>GET</td>
			<td>Lista todos os usuários.</td>
		</tr>
		<tr>
			<td>/user/:id</td>
			<td>GET</td>
			<td>Lista um usuário.</td>
		</tr>
		<tr>
			<td>/user</td>
			<td>POST</td>
			<td>Cria um novo usuário.</td>
		</tr>
		<tr>
			<td>/user/:id</td>
			<td>PUT</td>
			<td>Atualiza um usuário.</td>
		</tr>
		<tr>
			<td>/user/:id</td>
			<td>DELETE</td>
			<td>Deleta um usuário.</td>
		</tr>
	</tbody>
</table>

# Compras [/purchase]
Aqui você encontrada as rotas para essa tópico.

<table>
	<thead>
		<tr>
			<th>URL</th>
			<th>Método</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/purchase</td>
			<td>GET</td>
			<td>Lista todas as compras.</td>
		</tr>
		<tr>
			<td>/purchase/:id</td>
			<td>GET</td>
			<td>Lista uma compra.</td>
		</tr>
		<tr>
			<td>/purchase</td>
			<td>POST</td>
			<td>Cria uma nova compra.</td>
		</tr>
		<tr>
			<td>/purchase/:id</td>
			<td>DELETE</td>
			<td>Deleta uma compra.</td>
		</tr>
	</tbody>
</table>