# Projeto - Mackenzie Prática Profissional Em Análise Desenvolvimento De Sistemas Turma 05H - 2022/1

Proposta de desenvolvimento:
GoodBrowserGames - Uma comunidade para usuários compartilhar suas experiencias jogando browser games.

---
**Integrantes do grupo:**

- Nome: Jacques Ferreira Especier TIA: 41834011
- Nome: Tiago Nunes Bernardes de Sousa TIA: 31838502

---

**Índice**

- [1. Introdução](#1-introdução)
- [2. Interessados](#2-Interessados)
- [3. Objetivos funcionais](#3-objetivos-funcionais)
- [4. Objetivos não-funcionais](#4-objetivos-nao-funcionais)
- [5. Casos de uso](#5-casos-de-uso)
- [6. Descrição detalhada dos casos de uso principais](#6-detalhamento-casos-de-uso) 
- [7. Wireframes](#7-wireframes)
- [8. Diagrama de classes de domínio](#8-diagrama-de-classes-de-domínio)
- [9. Lista de decisões de arquitetura (com justificativas)](#9-decisoes-de-arquiterura)
- [10. Diagramas de classes de projeto](#10-diagrama-classe-projeto)
- [11. Diagramas de sequência de projeto](#11-diagrama-de-sequencia)

# 1. Introdução
Atualmente há vários jogos disponíveis na web que podem ser jogados a partir do navegador, sem a necessidade de instalar nada mais. É o que estamos chamando neste documento de browser games.GoodBrowserGames deverá ser uma comunidade web onde seus membros poderão compartilhar as suas impressões 
sobre os browser gamers que já jogaram, identificando o que gostaram e o que não gostaram. Com estas informações, o GoodBrowserGames poderá dar para cada membro recomendações de browser games que ele ainda não conhece e que provavelmente irá gostar. A sua equipe recebeu a responsabilidade de 
desenvolver o sistema GoodBrowserGames e este documento descreve o que é desejável ter neste novo sistema.


# 2. Interessados
Administradores - Podem cadastrar jogos para receber reviews ao escolher um genêro, link e descrição e obter os 5 jogos que receberam maior número de avaliações, 5 membros que realizaram o maior número de avaliações, 5 jogos que têm a maior nota média de avaliação e as 3 categorias que receberam maior número de avaliações.

Usuários - Podem dar notas e reviews em jogos selecionados por um administrador, receber recomendações a partir de suas notas, pesquisar por jogos especificos e pelas reviews mais úteis.

# 3. Objetivos funcionais

1. A rede social deverá possibilitar o administrador a cadastrar os browser games.
2. A rede social possibilitará os usuários a se cadastrarem como membros.
3. A rede social mostrará os browser games a partir de buscas.
4. A rede social deverá possibilitar a avaliação por usuários de jogos cadastrados por administradores.
5. A rede social deverá mostrar para o usuário a lista de avaliações de um browser game.
6. A rede social deverá possibilitar o usuário a marcar avaliações de outros usuários como úteis.
7. A rede social deverá possibilitar o usuário a solicitar uma lista das avaliações mais utéis.
8. A rede social deverá mostrar recomendações para seus usuários a partir de suas avaliações.
9. A rede social deverá possibilitar o administrador a obter relatórios divididos por períodos.


# 4. Objetivos não funcionais

1. A rede social deverá estar completamente operacional pelo menos 99.99% do tempo.
2. O tempo fora do ar após uma falha não deverá exceder 30 minutos.
3. O administrador deverá ser capaz de utilizar o sistema em seu trabalho após um treinamento de 2 dias.
4. Um usuário que já sabe qual jogo lhe interessa deve ser capaz de localizar e ver a página do jogo em 30 segundos.
5. O número de páginas web pelas quais o usuário precisa navegar para acessar a informação do jogo a partir da página principal não deve ser maior do que 2.
6. A rede social deverá ser capaz de suportar 50 usuários simultâneos.
7. O tempo médio para visualizar uma página web em uma conexão de 1Mbps não deverá exceder 7 segundos.
8. A rede social deverá oferecer acesso protegido por senha para páginas web que são acessadas somente por administradores.
9. A rede social deverá ser capaz de acomodar novos jogos sem necessidade de alterações na sua implementação.
10. O site web do sistema deverá ser visível nos navegadores Mozilla Firefox, Google Chrome.
11. Os dados da rede social deverão ser persistidos em uma base de dados SQL.


# 5. Casos de uso

A figura a seguir apresenta o diagrama de casos de uso:
![caso de uso](https://github.com/Hypertroly/GoodBrowserGames/blob/64232b0add4f09fe00ae641eabea44288978c0f2/Caso%20de%20uso.jpeg)


# 6. Descrição detalhada dos casos de uso principais

### A. Criar uma conta

Resumo: Um futuro usuário que visita a página inicial da rede social tem a opção de criar uma conta. Criando uma conta, ele poderá avaliar browser games e obter recomendações de browser games. Ator principal: Visitante Pré-condições: Nenhuma Pós-condições: O visitante está registrado como usuário e consegue acessar as funções restritas aos usuários da rede social.

Fluxo principal

O visitante seleciona a opção de criar uma conta.
O sistema solicita os dados para o registro: nome completo, username que gostaria de utilizar para acessar o sistema, senha com o mínimo de 10 caracteres para acessar o sistema e mais uma vez para confirmação, data de nascimento, estado e país.
O visitante fornece os dados solicitados.
O sistema verifica que o username informado está disponível.
O sistema verifica que a senha atende os critérios apresentados e que as duas entradas da senha coincidem.
O sistema registra o visitante como usuário.
O sistema informa o visitante de que ele está registrado e pode acessar o sistema.
Fluxos de exceção

Passo 4 (username não está disponível):

O sistema verifica que o username escolhido já está sendo utilizado e solicita que o visitante escolha outro. O caso de uso retorna para o passo 2 do fluxo principal.

Passo 6 (senha não tem o mínimo de 10 caracteres):

O sistema verifica que a senha escolhida não atende os critérios apresentados e solicita que o visitante escolha outra senha. O caso de uso retorna para o passo 2 do fluxo principal.

Passo 6 (as duas entradas da senha não conferem):

O sistema verifica que as duas entradas da senha não conferem e solicita que o visitante preencha novamente os campos com a senha desejada. O caso de uso retorna para o passo 2 do fluxo principal.

### B. Login

Resumo: Para avaliar e obter recomendações de browser games, que são funções restritas aos usuários da rede social, o usuário deve se autenticar. Ator principal: Usuário Pré-condições: O usuário já deve ser um membro registrado na rede social. Pós-condições: O usuário terá acesso às funções que são restritas apenas aos usuários (avaliar e obter recomendações de browser games).

Fluxo principal

O usuário seleciona a opção de entrar na rede social.
O sistema solicita que o usuário forneça seu username e sua senha.
O usuário fornece seu username e sua senha.
O sistema verifica que o username e a senha correspondem às informações de um de seus usuários registrados.
O sistema verifica que a senha atende os critérios apresentados e que as duas entradas da senha coincidem.
O sistema inicia uma sessão e apresenta as opções de avaliar browser games e de obter recomendações.
Fluxos de exceção

Passo 4 (username e/ou senha inválidos):

O sistema verifica que o username e a senha NÃO correspondem às informações de um de seus usuários registrados e solicita que o usuário entre novamente as informações. O caso de uso retorna para o passo 2 do fluxo principal.

### C. Avaliar browser game

Resumo: O usuário irá entrar uma avaliação de um browser game que ele jogou. Ator principal: Membro Pré-condições: O usuário é um membro registrado na rede social e está autenticado no sistema. Pós-condições: A avaliação é registrada no sistema e passa a ser levada em consideração ao oferecer recomendações para o usuário.

Fluxo principal

O usuário navega até o browser game alvo para a avaliação.
O usuário seleciona a opção de avaliar o browser game.
O sistema apresenta as informações do browser game (nome, genêro) e solicita as informações da avaliação (nota de 1 a 5, comentário de até 255 caracteres).
O usuário fornece as informações da avaliação.
O sistema cria e registra a avaliação, e passa a levá-la em consideração ao oferecer recomendações para o usuário.
D. Obter recomendações
Resumo: O usuário deseja que o sistema ofereça recomendações de browser games com base nas avaliações que ele já fez. Ator principal: Membro Pré-condições: O usuário é um membro registrado na rede social e está autenticado no sistema. Pós-condições: O usuário recebe recomendações de filmes que ele ainda não avaliou e que foram bem avaliados por outros membros que têm um perfil semelhante ao dele.

Fluxo principal

O usuário seleciona a opção de obter recomendações.
O sistema consulta as recomendações geradas para este usuário.
O sistema apresenta a lista das recomendações para o usuário, onde cada recomendação apresenta os dados do browser game e um índice de recomendação (com valor na faixa de 0% a 100%).
E. Cadastrar browser game
Resumo: O administrador deseja cadastrar um jogo para que os usuários possam avaliar. Ator principal: Administrador Pré-condições: Nenhuma. Pós-condições: O administrador cadastra um novo jogo para que os usuários tenham a possibilidade de avaliá-lo.

Fluxo principal

O administrador seleciona a opção de cadastrar um jogo.
O sistema solicita o nome, categoria do jogo, URL de acesso ao jogo, URL do vídeo de demonstração(opcional), descrição em até 255 caracteres e imagem ilustrativa.
O administrador fornece os dados.
O sistema cadastra o novo jogo, disponibilizando-o para os usuários fazerem suas avaliações.
Fluxo de exceção

Passo 3 (já existe um browser game cadastrado com este nome):

O sistema exibe uma mensagem alertando o administrador que um jogo com esse nome já está cadastrado.

# 7. Wireframes

A figura a seguir apresenta o wireframe de cadastro de usuário:
![1. Tela de Login](https://github.com/Hypertroly/GoodBrowserGames/blob/552c134f70734a3103a2c26e1c12de95010e79e4/1.Tela%20de%20login.jpeg)

A figura a seguir apresenta o wireframe cadastrar browser games:
![2. Cadastro de jogos](https://github.com/Hypertroly/GoodBrowserGames/blob/3ca69cf845685a02a9641a7ad53de79c9f809b1f/2.%20Cadastro%20de%20jogos.png)

A figura a seguir apresenta o wireframe buscar browser games:
![3. Buscar Jogos](https://github.com/Hypertroly/GoodBrowserGames/blob/3ca69cf845685a02a9641a7ad53de79c9f809b1f/3.Buscar%20Jogos.png)

A figura a seguir apresenta o wireframe Avaliar browser games:
![3. Avaliar jogos](https://github.com/Hypertroly/GoodBrowserGames/blob/71c8dacff55e51e03bc3e209e5db586f6c424d2d/4.%20Avaliar%20jogo.png)

A figura a seguir apresenta o wireframe Avaliações do browser games:
![3. Avaliar jogos](https://github.com/Hypertroly/GoodBrowserGames/blob/71c8dacff55e51e03bc3e209e5db586f6c424d2d/5.%20Avalia%C3%A7%C3%B5es.png)

A figura a seguir apresenta o wireframe Avaliações do browser games e pergunta se a informação foi útil:
![3. Informacao util](https://github.com/Hypertroly/GoodBrowserGames/blob/8563bf4c8f3b84d51c631f9020e79452d386141c/6.%20Esta%20informa%C3%A7%C3%A3o%20foi%20%C3%BAtil.png)


# 8. Diagrama de classes de domínio


# 9. Lista de decisões de arquitetura (com justificativas)

Decidimos usar, para o frontend, HTML, CSS e Javascript, por serem linguagens padrões para a criação de aplicações web, como uma rede social. Para o backend, decidimos usar Java, por ser uma linguagem a qual temos mais experiência, por usarmos muito no curso. O banco de dados será relacional e também feito em Mysql, pelo mesmo motivo dado acima.


# 10. Diagramas de classes de projeto

![image](https://user-images.githubusercontent.com/43524597/159187497-800e75e3-141a-45df-9d6f-a11d7d0b24c3.png)


# 11. Diagramas de sequência de projeto


Login:
![dsadsadsad](https://user-images.githubusercontent.com/43524597/159187629-2a3e08d4-3bed-4db9-83e7-ae7a8b2129d3.png)

Review:
![Review](https://github.com/Hypertroly/GoodBrowserGames/blob/55fb620d70b0bfaba10017793a9574075cde4de2/Diagrama%20de%20Sequencia%202.png)

Recomendações:
![Recomendações](https://github.com/Hypertroly/GoodBrowserGames/blob/55fb620d70b0bfaba10017793a9574075cde4de2/Diagrama%20de%20Sequencia%203.png)


# 12. URL de acesso ao repositório de código-fonte do grupo


# 13. URL de acesso ao quadro de acompanhamento do projeto do grupo

