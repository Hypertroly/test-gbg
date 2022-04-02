	
		// mapeamento das variaveis html
		const txtNome = document.querySelector('#txtNome');
		const txtURL = document.querySelector('#txtURL');
		const txtURLVideo = document.querySelector('#txtURLVideo');
		const txtDescricao = document.querySelector('#txtDescricao');
		const txtCategoria = document.querySelector('#txtCategoria');
		
		const btnNovo = document.querySelector('#btnNovo');
		const btnSalvar = document.querySelector('#btnSalvar');
		const btnApagar = document.querySelector('#btnApagar');
		const btnCancelar = document.querySelector('#btnCancelar');
		
		const paragrafoMensagem = document.querySelector('#paragrafoMensagem');
		const corpoTabelaGames = document.querySelector('#corpoTabelaGames');
		
		var criandoNovo = false;
		
		// inicializando os campos
		function inicializar(){
			criandoNovo = false;
			txtNome.value = '';
			txtURLVideo.value = '';
			txtURL.value = '';
			txtDescricao.value = '';
			txtCategoria.value = '';
	
			txtNome.disabled = true;
			txtURLVideo.disabled = true;
			txtURL.disabled = true;
			txtDescricao.disabled = true;
			txtCategoria.disabled = true;
			
			btnNovo.disabled = false;
			btnSalvar.disabled = true;
			btnApagar.disabled = true;
			btnCancelar.disabled = true;
			
			paragrafoMensagem.innerHTML = 'Pressione o botão Novo ou escolha um Game da lista abaixo:';	
			
			// get na lista de Games
			listarGames();
		}
		
		function cancelar(){
			inicializar();
		}
		
		// criando novo Game
		function novoGame(){
			criandoNovo = true;
			txtNome.value = '';
			txtURLVideo.value = '';
			txtURL.value = '';			
			txtDescricao.value = '';
			txtCategoria.value = '';
			
			txtNome.disabled = false;
			txtURL.disabled = false;
			txtURLVideo.disabled = false;
			txtDescricao.disabled = false;
			txtCategoria.disabled = false;
			
			btnNovo.disabled = true;
			btnSalvar.disabled = false;
			btnApagar.disabled = false;
			btnCancelar.disabled = false;
			
			paragrafoMensagem.innerHTML = 'Preencha os dados de cadastro do novo Game e pressione o botão salvar:';
		}
		
		function salvarGame(){
			if(criandoNovo){
				criarGame();
			} else {
				alterarGame();
			}
		}
		
		function preencherTabela(Games){
			var Tabela = '';
			var n = Games.length;
			for (var i = 0; i<n; i++){
				var c = Games[i];
				linha = '<tr><td><a href="javascript:void(0)" onclick="selecionar(' + c.nome + ')">' + c.nome + '</a></td>'
				  + '<td>' + c.urlvideo + '</td>'
				  + '<td>' + c.url + '</td>'
				  + '<td>' + c.descricao + '</td>'
				  + '<td>' + c.categoria + '</td>';
				
				Tabela += linha;
			}
			
			corpoTabelaGames.innerHTML = Tabela;
		}
		
		function preencherFormulario(Game){
			txtNome.value = Game.nome;
			txtURLVideo.value = Game.url;
			txtURL.value = Game.urlvideo;
			txtDescricao.value = Game.descricao;
			txtCategoria.value = Game.categoria;
			
			txtNome.disabled = true;
			txtURLVideo.disabled = false;
			txtURL.disabled = false;
			txtDescricao.disabled = false;
			txtCategoria.disabled = false;
			
			btnNovo.disabled = true;
			btnSalvar.disabled = false;
			btnApagar.disabled = false;
			btnCancelar.disabled = false;
			
			paragrafoMensagem.innerHTML = 'Altere os dados do Game e pressione o botão salvar:';
		}
		
		function selecionar(Nome){
			const URL = 'http://localhost:8080/api/games/' + Nome;
			fetch(URL)
				.then(resposta => {if (!resposta.ok) throw Error(resposta.status); return resposta;})
				.then(resposta => resposta.json())
				.then(jsonResponse => preencherFormulario(jsonResponse))
				.catch(function(error){
					paragrafoMensagem.innerHTML = 'Erro ao selecionar (código ' + error.message + ')';	
				});
		}
		
		async function listarGames(){
			const URL = 'http://localhost:8080/api/games';
			fetch(URL)
				.then(resposta => {if (!resposta.ok) throw Error(resposta.status); return resposta;})
				.then(resposta => resposta.json())
				.then(jsonResponse => preencherTabela(jsonResponse))
				.catch(function(error){
					paragrafoMensagem.innerHTML = 'Erro ao listar (código ' + error.message + ')';	
				});
		}
		
		async function criarGame(){
			const URL = 'http://localhost:8080/api/games';
			const dados = {
					'nome': txtNome.value,
					'url': txtURL.value,
					'urlvideo': txtURLVideo.value,
					'descricao': txtDescricao.value,
					'categoria': txtCategoria.value
			};
			const req = {
					method: 'POST',
					body: JSON.stringify(dados),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
			};
			fetch(URL, req)
				.then(resposta => {if (!resposta.ok) throw Error(resposta.status); return resposta;})
				.then(resposta => resposta.json())
				.then(jsonResponse => inicializar())
				.catch(function(error){
					paragrafoMensagem.innerHTML = 'Erro ao criar (código ' + error.message + ')';	
				});
		}
		
		async function alterarGame(){
			const URL = 'http://localhost:8080/api/games/' + txtNome.value;
			const dados = {
					'nome': txtNome.value,
					'urlvideo': txtURL.value,
					'url': txtURLVideo.value,
					'descricao': txtDescricao.value,
					'categoria': txtCategoria.value,
			};
			const req = {
					method: 'PUT',
					body: JSON.stringify(dados),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
			};
			fetch(URL, req)
				.then(resposta => {if (!resposta.ok) throw Error(resposta.status); return resposta;})
				.then(resposta => resposta.json())
				.then(jsonResponse => inicializar())
				.catch(function(error){
					paragrafoMensagem.innerHTML = 'Erro ao alterar (código ' + error.message + ')';	
				});
		}
		
		async function apagarGame(){
			const URL = 'http://localhost:8080/api/games/' + txtNome.value;
			const req = {
					method: 'DELETE',
			};
			fetch(URL, req)
				.then(resposta => {if (!resposta.ok) throw Error(resposta.status); return resposta;})
				.then(resposta => resposta.json())
				.then(jsonResponse => inicializar())
				.catch(function(error){
					paragrafoMensagem.innerHTML = 'Erro ao apagar (código ' + error.message + ')';	
				});
		}
		
		inicializar();
