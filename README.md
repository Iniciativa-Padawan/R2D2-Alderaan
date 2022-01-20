

# R2D2
## Projeto de conclusão do curso

> Api desenvolvida em NodeJS para consultar e gerenciar informações do universo Star Wars consumindo serviços de terceiros e próprios

-	Desenvolver API em NodeJS
	-	Requisições para:
		-	Filmes 
			-	Ler
			-	Inserir
			-	Alterar
			-	Deletar
		-	Swapi
			-	Espécies
			-	Planetas
			-	Personagens
			-	Naves 
			-	Veículos
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
						  "sequential": 4
						}
					  ] 
			}
			```
		- Onde **sequential** é a ordem que você considera que o filme deve ser assistido e **type** é a qual trilogia o filme pertence, sendo possíveis:
			- Classic
			- Prequel
			- Sequel
			- Spin-Off
	-	Importante que as funções estejam documentadas usando JSDoc
	-	A API deve estar devidamente publicada no heroku e devidamente testada no [**Portal do Padawan**](https://iniciativapadawan.com.br/Reuniao/ApiStarWars)
	-	Este repositório deverá estar atualizado com a versão final do código na sua respectiva ramificação
	-	Data de Entrega: até 24/01


## Desafio Extra

- Transformar esse *Readme* na documentação/manual da sua **API**. Explicando o que cada **rota** faz e quais os parâmetros esperados por cada uma delas

- Transformar a **rota raiz**(rota inicial) da sua **API** em exibição do próprio *Readme*, utilizando o plugin **[express-readme](https://www.npmjs.com/package/express-readme)**, para que quando alguém acesse a **API**, consiga entender como usá-la. 
