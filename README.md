

# R2D2
## Projeto de conclusão do curso

> Api desenvolvida em NodeJS para consultar e gerenciar informações do universo Star Wars consumindo serviços de terceiros e próprios
-	Desenvolver API em NodeJS
	-	Requisições para:
		-	Filmes 
			-	Ler
				- ```GET/api/movies ```
			-	Inserir
				- ```POST/api/movies ```
			-	Alterar
				-	 ```PUT/api/movies/:index ```
			-	Deletar
				-	 ```DELETE/api/movies/:index ```
		-	Swapi
			-	Espécies
				-	```GET/api/species```
			-	Planetas
				-	```GET/api/planets```
			-	Personagens
				-	```GET/api/people```
			-	Naves 
				-	```GET/api/spaceships```
			-	Veículos
				-	```GET/api/vehicles```
	-	Todas as requisições devem ter o padrão *"/api/"*
	-	Todas as requisições de ***Listagem*** devem seguir o seguinte padrão:
		-	```javascript
			//api/people
			{ 
			  "count": 1,
			  "data": [
						{
			      		  "name": "Luke Skywalker"
						}
					  ] 
			}
			```

		-	Onde **count**	representa o total de registros da consulta e **data** são efetivamente os registros contendo sempre o **name** de cada item
		-	Para a a Consulta de Filmes especificamente, o modelo de cada filme deverá ser:
		-	```javascript
			//api/movies
			{ 
			  "count": 1,
			  "data": [
						{
						  "name": "A New Hope",
						  "type": "Classic",
						  "sequential": 4,
						  "index": 0
						}
					  ] 
			}
			```
		- Onde **index** é a posição/índice do filme em sua lista de filmes, **sequential** é a ordem que você considera que o filme deve ser assistido e **type** é a qual trilogia o filme pertence, sendo possíveis:
			- Classic
			- Prequel
			- Sequel
			- Spin-Off
	-	Importante que as funções estejam documentadas usando JSDoc
	-	A API deve estar devidamente publicada no heroku e devidamente testada no [**Portal do Padawan**](https://iniciativapadawan.com.br/Reuniao/ApiStarWars)
	-	Este repositório deverá estar atualizado com a versão final do código na sua respectiva ramificação
	-	Data de Entrega: até 24/01
