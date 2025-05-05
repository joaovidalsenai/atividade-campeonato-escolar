
SILÊNCIO E FOCO!!!
====>>>> Acesse: https://dontpad.com/nemsenai

Projeto: Inscrição para o Campeonato Escolar - Site Responsivo - dupla

Contexto: A escola vai realizar um campeonato esportivo entre turmas e precisa de um site para receber as inscrições dos alunos. Seu papel como desenvolvedor web será criar esse site, utilizando HTML para estrutura, Bootstrap para layout e aparência, e JavaScript para validar os dados inseridos no formulário.

Instruções Gerais
Crie uma pasta chamada campeonato-escolar.

Crie os arquivos:

index.html
style.css
script.js

TAREFAS
1. Estrutura da Página (HTML):  Crie a estrutura básica do HTML5 com 
<!DOCTYPE html> 
e adicione as tags <head> e <body>. Insira o título da página como “Campeonato Escolar 2025”.


2. Cabeçalho com Bootstrap
Usando Bootstrap, crie um menu de navegação (navbar) com:
Nome da escola - Links: “Início”, “Sobre o campeonato” e “Inscreva-se”

3. Seção de Apresentação
Adicione uma seção com um jumbotron ou card grande (Bootstrap) explicando o que é o campeonato, quem pode participar e a data do evento.

4. Formulário de Inscrição (HTML + Bootstrap). Crie um formulário com os seguintes campos:

Nome completo (input text)
Idade (input number)
Série (select com opções 1º, 2º, 3º ano)
Modalidade esportiva (select com opções como Futsal, Basquete, Queimada)
Aceite dos termos (checkbox)
Use classes do Bootstrap (form-control, form-group, etc.) para o layout do formulário.

 Estilização com CSS - Crie um arquivo style.css com personalizações adicionais:

Altere a cor de fundo do cabeçalho
Adicione margens ao formulário
Centralize os textos principais



6. Validação com JavaScript
No script.js, escreva um código que:
Impede o envio do formulário se algum campo obrigatório estiver vazio
Exibe alertas personalizados usando alert() para avisar o aluno do erro


7. Validação adicional com JavaScript
Ainda no script.js, crie uma regra onde:
Se a idade for menor que 12 anos, o aluno não pode se inscrever (mostrar alerta e impedir envio)

8. Confirmação de Inscrição
Se tudo estiver correto, exiba um alerta de sucesso dizendo: "Inscrição realizada com sucesso! Boa sorte no campeonato!"


9. Responsividade
Teste o site em modo de tela pequena (celular) e ajuste com Bootstrap (colunas, grid, classes como col-md, container, row) para garantir que tudo fique bem visível.


10. Desafio extra (opcional e com nota bônus)
Adicione um contador JavaScript mostrando quantos dias faltam para o campeonato, e exiba esse número no topo da página com uma frase como:
Faltam X dias para o campeonato começar!