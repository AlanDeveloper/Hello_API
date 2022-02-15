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

<div style="display: flex; flex-direction: row; background-color: #55a532; padding: 5px; border-radius: 10px; color: white; justify-content: space-between; align-items: center;">
	<p style="flex: 1; margin: 0; margin-left: 20px; font-weight: bold;">GET</p>
	<p style="flex: 1; margin: 0;">/category</p>
	<div style="flex: 1; background-color: white; padding: 5px 10px; border-radius: 5px; color: green">
		<p style="margin: 0;">Lista todas as categorias</p>
	</div>
</div>
<div style="display: flex; flex-direction: row; background-color: #55a532; padding: 5px; border-radius: 10px; color: white; justify-content: space-between; align-items: center; margin-top: 10px">
	<p style="flex: 1; margin: 0; margin-left: 20px; font-weight: bold;">GET</p>
	<p style="flex: 1; margin: 0;">/category/:id</p>
	<div style="flex: 1; background-color: white; padding: 5px 10px; border-radius: 5px; color: green">
		<p style="margin: 0;">Lista uma categoria</p>
	</div>
</div>
<div style="display: flex; flex-direction: row; background-color: #f9b944; padding: 5px; border-radius: 10px; color: white; justify-content: space-between; align-items: center; margin-top: 10px">
	<p style="flex: 1; margin: 0; margin-left: 20px; font-weight: bold;">POST</p>
	<p style="flex: 1; margin: 0;">/category</p>
	<div style="flex: 1; background-color: white; padding: 5px 10px; border-radius: 5px; color: orange">
		<p style="margin: 0;">Cria uma nova categoria</p>
	</div>
</div>
<div style="display: flex; flex-direction: row; background-color: #3554b1; padding: 5px; border-radius: 10px; color: white; justify-content: space-between; align-items: center; margin-top: 10px">
	<p style="flex: 1; margin: 0; margin-left: 20px; font-weight: bold;">PUT</p>
	<p style="flex: 1; margin: 0;">/category/:id</p>
	<div style="flex: 1; background-color: white; padding: 5px 10px; border-radius: 5px; color: blue">
		<p style="margin: 0;">Atualiza uma categoria</p>
	</div>
</div>
<div style="display: flex; flex-direction: row; background-color: #ff4141; padding: 5px; border-radius: 10px; color: white; justify-content: space-between; align-items: center; margin-top: 10px">
	<p style="flex: 1; margin: 0; margin-left: 20px; font-weight: bold;">DELETE</p>
	<p style="flex: 1; margin: 0;">/category/:id</p>
	<div style="flex: 1; background-color: white; padding: 5px 10px; border-radius: 5px; color: red">
		<p style="margin: 0;">Deleta uma categoria</p>
	</div>
</div>