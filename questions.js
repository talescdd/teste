// Pour construire de nouveaux objets
function question(answer, support, question, a, b, c, d) {
	this.answer = answer;
    this.support = support;
	this.question = question;
	this.a = a;
	this.b = b; 
	this.c = c;
	this.d = d;
	return this;
	}

// Le tableau des questions, r�ponses, options et explications
var units = new Array(
	new question("a","�baco","Primeiro instrumento inventado para realizar c�lculos.","�baco","Pascalina","Z1","Mark I"),
new question("b","Pascalina","Primeira calculadora mec�nica.","�baco","Pascalina","Z1","Mark I"),
new question("c","Z1","Primeiro computador eletromec�nico.","�baco","Pascalina","Z1","Mark I"),
new question("a","ENIAC","Primeiro computador eletr�nico.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("b","Tradic","Primeiro computador 100% transistorizado.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("c","Lisa","Primeiro computador com mouse e interface gr�fica.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("a","Charles Babbage","Conhecido como pai da Inform�tica.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("b","Ada Lovelace","Primeira programadora da hist�ria.","Charles Babbage","Ada Lovelace","Alan Turing","Joan Clarke"),
new question("c","Alan Turing","Desenvolveu conceitos de algoritmos e intelig�ncia artificial.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("d","Von Neumann","Respons�vel pela arquitetura dos computadores.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("a","V�lvulas, enormes, fia��o exposta.","S�o caracter�sticas da 1� Gera��o.","V�lvulas, enormes, fia��o exposta.","Transistores, armazenamento em disco.","Circuitos integrados, teclado, monitor.","Microprocessador, mouse, interface gr�fica."),
new question("b","Transistores, armazenamento em disco.","S�o caracter�sticas da 2� Gera��o.","V�lvulas, enormes, fia��o exposta.","Transistores, armazenamento em disco.","Circuitos integrados, teclado, monitor.","Intelig�ncia artificial, computa��o nas nuvens."),
new question("c","Circuitos integrados, teclado, monitor.","S�o caracter�sticas da 3� Gera��o.","V�lvulas, enormes, fia��o exposta.","Microprocessador, mouse, interface gr�fica.","Circuitos integrados, teclado, monitor.","Intelig�ncia artificial, computa��o nas nuvens."),
new question("d","Intelig�ncia artificial, computa��o nas nuvens.","S�o caracter�sticas da 5� Gera��o.","Circuitos integrados, teclado, monitor.","Microprocessador, mouse, interface gr�fica.","Transistores, armazenamento em disco.","Intelig�ncia artificial, computa��o nas nuvens."),
new question("b","Microprocessador, mouse, interface gr�fica.","S�o caracter�sticas da 4� Gera��o.","V�lvulas, enormes, fia��o exposta.","Microprocessador, mouse, interface gr�fica.","Transistores, armazenamento em disco.","Intelig�ncia artificial, computa��o nas nuvens."),
new question("b","Alan Turing","Qual o personagem principal do filme O Jogo da Imita��o?","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("d","decifrou o c�digo enigma.","No filme Alan Turing","localizou a base de Penemonde.","coordenou o Projeto Manhatan.","identificou o Bunker.","decifrou o c�digo enigma."),
new question("c","Hugh Alexander","Campe�o brit�nico de xadrez.","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("a","Joan Clarke","Excelente em cruzadinha.","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("a","Hardware","Parte f�sica do computador.","Hardware","Software","Peopleware","Firmware"),
new question("c","Peopleware","Usu�rio do computador.","Hardware","Software","Peopleware","Firmware"),
new question("b","Software","Parte l�gica do computador.","Hardware","Software","Peopleware","Firmware"),
new question("a","Desktop","Famosos computadores de mesa, ideais para casas, escrit�rios e escolas.","Desktop","Notebook","Smartphone","Tablet"),
new question("c","Smartphone","Celulares com funcionalidades avan�adas.","Desktop","Notebook","Smartphone","Tablet"),
new question("b","Notebook","Computadores port�teis conhecidos como laptops.","Desktop","Notebook","Smartphone","Tablet"),
new question("a","Bit","Menor unidade da informa��o.","Bit","Byte","Caractere","KB"),
new question("b","Byte (B)","Conjunto de 8 bits ou 1 caractere.","Bit (b)","Byte (B)","Kilobyte (KB)","Megabyte (MB)"),
new question("c","KB - MB - GB - TB","Qual op��o da escala de BIT est� em ordem crescente.","TB - GB - MB - KB","TB - KB - GB - MB","KB - MB - GB - TB","KB - TB - MB - GB"),
new question("b","7 B","Qual a quantidade de bytes da palavra Revis�o?","0,007 B","7 B","7000 B","0,7 bytes"),
new question("b","7 filmes","Quantos filmes de 1 GB posso colocar em um cart�o de mem�ria de 7450 MB?","0,007 filmes","7 filmes","7,45 filmes","7000 filmes"),
new question("d","Processador","Conhecido como c�rebro do computador.","Barramento","Chipstet","Placa m�e","Processador"),
new question("c","Placa m�e","Respons�vel por conectar e interligar todos os dispositivos quem comp�em o computador.","Barramento","Chipset","Placa m�e","Processador"),
new question("b","Chipset","Divide-se em ponte norte e ponte sul.","Barramento","Chipset","Placa m�e","Processador"),
new question("a","Barramento","Conjunto de trilhas que permitem a interliga��o entre os componentes do PC.","Barramento","Chipset","Placa m�e","Processador"),
new question("d","Barramento","Respons�veis pela execu��o de c�lculos, decis�es l�gicas e instru��es.","Barramento","Chipset","Placa m�e","Processador"),
new question("c","Mem�ria RAM","Armazena todos os programas e dados que est�o em uso.","Mem�ria auxiliar","Mem�ria cache","Mem�ria RAM","Mem�ria ROM"),
new question("d","Mem�ria ROM","Mem�ria somente leitura.","Mem�ria auxiliar","Mem�ria cache","Mem�ria RAM","Mem�ria ROM"),
new question("a","Mem�ria auxiliar","Mem�ria de armazenamento permanente.","Mem�ria auxiliar","Mem�ria cache","Mem�ria RAM","Mem�ria ROM"),
new question("b","Cache","Mem�ria de alta velocidade que armazena os dados mais frequentemente solicitados.","Auxiliar","Cache","RAM","ROM"),
new question("d","Registradores","Mem�ria mais r�pida que existe.","HD","Cache","RAM","Registradores"),
new question("b","HD","Tipo de mem�ria auxiliar mais utilizado, tamb�m conhecido como disco r�gido.","CD/DVD/BD","HD","Pendrive","SSD"),
new question("b","Placa de som","Dispositivo que envia e recebe sinais sonoros entre equipamentos de som e um computador,","Placa de rede","Placa de som","Placa de v�deo","Placa m�e"),
new question("c","Placa de v�deo","Dispositivo que envia sinais do computador para o monitor.","Placa de rede","Placa de som","Placa de v�deo","Placa m�e"),
new question("a","Placa de rede","Dispositivo de hardware respons�vel pela comunica��o entre os computadores.","Placa de rede","Placa de som","Placa de v�deo","Placa m�e"),
new question("b","Fonte de alimenta��o","Respons�vel por receber a energia da rede el�trica e gerenciar a mesma para o computador.","Estabilizador","Fonte de alimenta��o","M�dulo Isolador","Nobreak"),
new question("d","Nobreak","Equipamento de prote��o qeue mant�m o PC funcionando em caso de falta de energia.","Estabilizador","Fonte de alimenta��o","M�dulo Isolador","Nobreak"),
new question("d","Monitor CRT; caixa de som; Plotter.","Dispositivos somente de sa�da de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c�digo de barras; webcam.","Caneta �ptica; impressora; cart�o de mem�ria.","Monitor CRT; caixa de som; Plotter."),
new question("b","Microfone; leitor de c�digo de barras; webcam.","Dispositivos somente de entrada de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c�digo de barras; webcam.","Caneta �ptica; impressora; cart�o de mem�ria.","Monitor CRT; caixa de som; Plotter."),
new question("a","Monitor touchscreen; HD externo; modem.","Dispositivos de entrada e sa�da de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c�digo de barras; webcam.","Caneta �ptica; impressora; cart�o de mem�ria.","Monitor CRT; caixa de som; Plotter."),
new question("c","Caneta �ptica; impressora; cart�o de mem�ria.","S�o dispositivos s� de entrada; s� de sa�da; de entrada e sa�da, respectivamente.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c�digo de barras; webcam.","Caneta �ptica; impressora; cart�o de mem�ria.","Monitor CRT; caixa de som; Plotter."),
new question("a","Blaise Pascal","Desenvolveu a primeira calculadora mec�nica.","Blaise Pascal","Alan Turing","Ada Lovelace","Charles Babbage"),
new question("c","executar, estudar, redistribuir e aperfei�oar.","As 4 liberdades do software livre","fabricar, desenvolver, oferecer e vender.","distribuir, conectar, vender e fechar.","executar, estudar, redistribuir e aperfei�oar.","abrir, conectar, utilizar e fechar."),
new question("a","Windows","F�cil aprendizagem de uso, interface simples e facilidade de adquirir c�digos maliciosos.","Windows","iOS","Linux","Android"),
new question("c","Linux","Seguran�a, software livre e incompatibilidade com diversos softwares populares.","Windows","iOS","Linux","Android"),
new question("b","iOS","Design otimizado, �timo desempenho e pre�o de compra elevado.","Windows","iOS","Linux","Android"),
new question("d","Android","C�digo aberto, grande variedade de aplicativos e desvaloriza��o dos dispositivos.","Windows","iOS","Linux","Android"),
new question("a","Software comercial","Uso condicionado a pagamento pr�vio (compra).","Software comercial","Demo","Adware","Software livre"),
new question("c","Adware","Uso condicionado a exibi��o de propagandas e an�ncios.","Software comercial","Demo","Adware","Software livre"),
new question("b","Demo","Uso limitado, normalmente para avalia��o.","Software comercial","Demo","Adware","Software livre"),
new question("d","Microsoft Windows","Exemplos de aplicativos, exceto.","Google Chrome","Microsoft Excel","Windows Movie Maker","Microsoft Windows"),
new question("a","VLC Media Player","Exemplos de softwares b�sicos, exceto.","VLC Media Player","Linux Ubuntu","macOS Monterey","Android"),
new question("d","iOS 15","Exemplos de aplicativos, exceto.","Microsoft Word","Internet Explorer","Mozilla Firefox","iOS 15")

	);
