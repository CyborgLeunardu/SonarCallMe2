# Nvoip-CallPage

Para utilização do Callme da Nvoip, é necessário ter uma conta registrada no site da Nvoip e saldo o suficiente para realizar a ligação.


Com o projeto aberto, no arquivo index.html, se encontra algumas variáveis que serão necessárias o preenchimento para que o Callme possa ser utilizado corretamente.


#1
numbersip: coloque o número sip que desejar utilizar aqui.
Como encontrar: No painel da Nvoip logado, vá em Configurações, Usuários e localize Usuário SIP na tabela

#2
userToken: coloque o número do userToken da conta que está configurado o numbersip para ligar
Como encontrar: No painel da Nvoip logado, vá em API, e localize o userToken no campo User Token.

#3
caller: coloque o número que será utilizado para realizar as ligações das telas de Me Ligue Agora e Me Ligue Depois.
Neste caso pode ser inserido tanto um número válido quanto um número sip.

#4
transferNumber: coloque o número que será redirecionado para o usuário que atender a ligação, ou seja, será o número que aparecerá para o usuário que está sendo ligado.
Pode ser um usuário Sip também ou um número móvel ou fixo e não há necessidade de ser da plataforma. 

#5
ownerEmail: coloque o e-mail para qual será direcionado as mensagens que foram enviadas pela tela de “Deixe uma Mensagem”.
Por exemplo: caso você passe o email: exemplo@gmail.com na variável,  todos os emails enviados irão cair nesse endereço especificado.

#6
internationalCalls: este campo booleano é utilizado para o usuário escolher se o Callme terá ou não suporte a ligações agendadas. 
Se marcar como true: o Callme renderiza as bandeiras para ligações internacionais e é necessário marcar as ligações internacionais ativas no painel, 
caso seja false: as bandeiras serão desabilitadas e ficará apenas o input sem a bandeira e será necessário deixar desabilitado as ligações internacionais no painel.

Erros mais comuns:
Saldo insuficiente
Ramal bloqueado
Discar para um número que não existe
Passar o numbersip errado





