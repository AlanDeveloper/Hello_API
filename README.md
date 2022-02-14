# Hello_API

## Build and run your container with Docker compose
```
> docker-compose build
> docker-compose up -d
```

## Registry container image on Heroku
```
> docker login
> heroku container:login
> heroku git:remote -a example-app
> heroku container:push web
> heroku container:release web
```

## Deploy with heroku.yml
```
> git add heroku.yml
> git commit -m "Add heroku.yml"
> heroku stack:set container
> git push heroku your-branch
```

Recursos disponíveis para acesso via API:
* [Categorias](#categorias)

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
<br>
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
<br>
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
<br>
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
<br>
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