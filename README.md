# Hello_API

Recursos disponíveis para acesso via API:
* [Categorias](#categorias-category)

### Métodos
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

### Respostas
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

### Listar [GET /category]
- Request 
	- Headers
		```
		Content-Type: application/json
		```
- Response
	- Body
		```
		[
			{
				"_id": "62092382f17e1d285e85386a",
				"name": "Eletrodoméstico",
				"__v": 0
			}
		]
		```
### Ler [GET /category/:id]
- Request 
	- Headers
		```
		Content-Type: application/json
		```
- Response
	-	Body
		```
		{
			"_id": "62092382f17e1d285e85386a",
			"name": "Eletrodoméstico",
			"__v": 0
		}
		```
### Criar [POST /category]
- Request 
	- Headers
		```
		Content-Type: application/json
		```
	-	Body
		```
		{
			"name": "Livro"
		}
		```
- Response
	- Body
		```
		{
			"_id": "12032452fj7ekd28le85386b",
			"name": "Livro",
			"__v": 0
		}
		```
### Atualizar [PUT /category/:id]
- Request 
	- Headers
		```
		Content-Type: application/json
		```
	- Body
		```
		{
			"name": "Computador",
		}
		```
- Response
	- Body
		```
		Sem corpo
		```
### Deletar [DELETE /category/:id]
- Request 
	- Headers
		```
		Content-Type: application/json
		```
- Response
	- Body
		```
		Sem corpo
		```