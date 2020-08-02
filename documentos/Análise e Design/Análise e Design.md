# 4. Analise e Design
## 4.1 Arquitetura do Sistema
O digrama proposto abaixo é da sequência seguindo a frase de ** ARISTÓTELES ** que é "o todo é maior que a soma das partes" foi dividido o conteudo todo do digrama de sequencia em 4 partes e suas descrições para facilidade a visualização e a leitura entre si.

### Parte 1
![IMAGE]( https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa./blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%201.png)
#### Descrição
A classe "mapa" precisa primeira ter internet para carregar o mapa (bidimensional) e ela faz parte um arquivo html carregado (index.html).
***
Depois disso ela encaminha diretamente para a metodo denominado "mudar_voz" da classe "mudar_estado"   passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "false" para a classe "mudar_estado".
***
Na classe "mudar_estado" que vai encaminha quando terminar a classe "componentes_voz" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_voz" o metodo denominado "threads()"  tem  a variavel "threads_voz()" vai carregar três vez que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na ultima ordem da variavel "threads_voz()"vai encaminhar diretamente para a classe "mudar_estado" com o metodo denominado "mudar_mapa" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "true".
***
Na classe "mudar_estado" vai encaminha diretamente para classe "componentes_mapa" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_mapa" o metodo "threads()"que é um void(função que não retorna nada) tem um variavel "threads_mapa" vai carregar um metodo da classe "mapa' que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa.
***

### Parte 2
![IMAGE]( https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa./blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%202.png)
#### Descrição
***
Quando a variavel "threads_mapa()" retorna var encaminhar diretamente para classe "mudar_estado" com o metodo denominado "mudar_voz" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "false".
***
Na classe "mudar_estado" que vai encaminha quando terminar a classe 'componentes_voz" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_voz" o metodo denominado "threads()"  tem  a variavel threads_voz()é vai carregar cinco vezes que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na ultima ordem da variavel "threads_voz()" vai encaminhar diretamente para a classe "mudar_estado" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "true".
***
Na classe "mudar_estado"  vai encaminha diretamente para classe "componentes_mapa" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_mapa" o metodo "threads()" que é um void(função que não retorna nada) tem um variavel "threads_mapa" vai carregar um metodo da classe "mapa" que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa.
*** 
Quando a variavel "threads_mapa()" retorna var encaminhar diretamente para classe "mudar_estado" com o metodo denominado "mudar_voz" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "false" e para a classe "mudar_estado".
***
Na classe "mudar_estado" que vai encaminha quando terminar a classe "componentes_voz" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_voz" o metodo denominado "threads()"  tem  a variavel "threads_voz()" vai carregar duas vezes que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na ultima ordem da variavel "threads_voz()"vai encaminhar diretamente para a classe "mudar_estado" com o metodo denominado "mudar_mapa" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "true".
***
Na classe "mudar_estado"  vai encaminha diretamente para classe "componentes_mapa" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_mapa" o metodo "threads()"que é um void(função que não retorna nada) tem um variavel "threads_mapa" vai carregar um metodo da classe "mapa" que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa.
*** 
Quando a variavel "threads_mapa()" retorna var encaminhar diretamente para classe "mudar_estado" com o metodo denominado "mudar_voz" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "false" e para a classe "mudar_estado".
***
Na classe "mudar_estado" que vai encaminha quando terminar a classe "componentes_voz" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_voz" o metodo denominado "threads()"  tem  a variavel "threads_voz()" vai carregar duas vezes que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na ultima ordem da variavel "threads_voz()"vai encaminhar diretamente para a classe "mudar_estado" com o metodo denominado "mudar_mapa" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "true".
***
Na classe "mudar_estado"  vai encaminha diretamente para classe "componentes_mapa" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_mapa" o metodo "threads()"que é um void(função que não retorna nada) tem um variavel "threads_mapa" vai carregar um metodo da classe "mapa" que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa, por fim vai finalizar a classe "mapa".
***
Quando a variavel "threads_mapa()" retorna var encaminhar diretamente para classe "mudar_estado" com o metodo denominado "mudar_voz" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "false" para a classe "mudar_estado", por fim vai finalizar a classe "componentes_mapa".
***
Na classe "mudar_estado" que vai encaminha quando terminar a classe "componentes_voz" como o metodo denominado "threads()" que é um void(função que não retorna nada).
***
Na classe "componentes_voz" o metodo denominado "threads()"  tem  a variavel "threads_voz()" vai carregar tres vez que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na primeira ordem da variavel "threads_voz()"vai encaminhar diretamente para a classe "mudar_estado" com o metodo denominado "mudar_mapa" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "true".
***
Na classe "mudar_estado" vai encaminha diretamente para classe "componentes_voz" como o metodo denominado "threads()" que é um void(função que não retorna nada), por fim vai finalizar classe "mudar_estado".
***
Na classe "componentes_voz" o metodo denominado "threads()"  tem  a variavel "threads_voz()" vai carregar duas vezes que tem como retorno um array(ordem em fila).
*** 

### Parte 3
![IMAGE]( https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa./blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%203.png)
#### Descrição
***
Depois disso vai executar a duas ultima ordem da variavel "threads_voz()"vai encaminhar diretamente para a classe "mudar_estado" com o metodo denominado "mudar_voz" passando parametro de uma variavel do tipo array(ordem em fila) que é um void(função que não retorna nada)como "true" até fazer a reprodução de todos os threads_voz.
***

### observação
O software é bastante afetado pelo estado do que se inicia sendo assim descrido abaixo:

1.  O software é ativado independo do usuário precisa dele ou não pois, já carregar os modulo necesserio da aplicação e começar a trabalha praticamente os dados filtrados mais primeiramente ele promove um esclarecimento ao usuário suas finalidades, cabe o usuário aceite ou recuse. 

2. No caso do Chrome, o software precisa que o usuário aceitei o acesso ao microfone.
3. Caso o usuário recuse, ele pode sair da página sem se preocupar com seus dados pessoais.
4.Depois de cada história apresentada é exibido a localidade referente a estória contada.
5. Por fim é exibir a extensão da Pandemia peste bubônica.
6. Na parte 4 será exibido um bloco com o link do site da documentação.

7. Existem um carregando paralelo no arquivo "quiz" que permite interação com o usuário que utilizar um arquivo json na forma assicrona, abaixo um diagrama de sequência ilustrado o inicio:

![iMAGE](https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa/blob/master/documentos/imagens/etapa%202/diagrama%20de%20sequ%C3%AAncia-inicial%20do%20quiz.png)

 Isso se repetir quandas veses necessaria de acordo com as questões impostas e por fim ela termina assim com o diagrama de sequência abaixo: 
 
![image](https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa/blob/master/documentos/imagens/etapa%202/diagrama%20de%20sequ%C3%AAncia-final%20do%20quiz.png)
 
 É por fim foi feito um diagrama de class representação o quiz abaixo:
 
 ![image](https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa/blob/master/documentos/imagens/etapa%202/diagrama%20de%20class%20do%20quiz.png)
 
 
8. Também um carregamento paralelo no arquvio "icones" que permite 
um animação e interação de controle de volume com o usuário quase ao mesmo tempo, abaixo um diagrama de classe:
 
 ![image](https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa/blob/master/documentos/imagens/etapa%202/diagrama%20de%20class%20de%20icones.png)

Com isso foi possivel manipular a história contada para que usuário tenha mais disponibilidade em usa e abusa do software e foi feito também um diagrama de sequência  do arquivo abaixo:

![image](https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa/blob/master/documentos/imagens/etapa%202/Diagrama%20de%20Sequ%C3%AAncia%20Cont%C3%ADnua%20dos%20icones.png)

 
## 4.2 Modelo do Domonio
![IMAGE](https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa./blob/master/documentos/imagens/diagrama%20de%20classe.png)
### Explicação do Diagrama de Classe 
O software possui duas classes principais: voz e o mapa, mas uma classe intermediaria que é denominada "mudar_estado". 
#### A classe "voz"
Esse objeto tem como composição a classe denominada "mudar_estado" que contém somente um metodo:

1. "Transmitir" que tem um variavel denominada "falar" que é tipo string(texto) que é um void(funções que não retorna nada).

#### A classe "componente_voz"
Esse objeto é vinculado com uma associação unilateral (que a classe "mudar_estado" não reconhecer a existencia dessa classe) que contem os seguintes atribuédos: 
1. "Genero" Definido como parecido com voz humana.
2. "Nome" Definido como uma voz.
3. "autor" Definido como "Kévin Vieira Gomes Guimaraes".
4. "identidade" Definida como "inteligencia artificial". 


Seus atribuédo são o carâter do personagem criada pelo software para fazer há transformação de texto ortografico em som do idioma português Brasileiro. E tem dois metodos que são:
1.O "Roteiro" que tem o atribu"do "parte" como o valor de texto e retorna uma constru""o de frase do tipo texto.
2. A "threads" que não tem nenhuma variavel que é um void(fun""es que não retorna nada).


#### A classe "mapa"
Esse objeto tem como composição a classe denominada "mudar_estado" que tem dois metodos que são:
1.  "coordenadas" que tem duas variaveis como: lang e long do tipo number(real,inteiro,decimal e etc...).
2. "threads" que não tem nenhuma variavel que é um void(fun""es que não retorna nada).
E uma variavel denominada "estado" definhada inicialmente com verdadeira (true).
#### A classe "componentes_exibição"
Esse objeto é vincular com uma associaçaão unilateral (que a classe "mudar_estado" não reconhecer a existência da classe "componentes_exibição") que cont"m os seguintes atributos:

1. "Ano" Definido como number(real,inteiro,decimal e etc...).
2. "local" Definido como string(texto), para ler o local de referẽncia.
3. "latitude" Definido como number(real,inteiro,decimal e etc...), para ler a latitude do mapa.
4. "longitude" Definido como number(real,inteiro,decimal e etc...), para ler a longitude do mapa.
5. "eixo_principal_terra" Definido como number(real,inteiro,decimal e etc...), para gravar a latitude do mapa.
6. "linha_imaginada" Definido como number(real,inteiro,decimal e etc...), para gravar a longitude do mapa.
7. "referencia" Definido como string(texto), para gravar o local de referẽncia.
#### A classe intermediaria "mudar_estado"
Esse objeto é necessério para caracterizar tanto o mapa que reproduzido tanto para ajudar no conto da história apresentar pela classe "voz".
Ela é composta de dois metodos que são:
1. "mudar_voz" que representar pela nota a mudança para a classe "voz" e tem a variavel denominada "mudança" do tipo Array que é um void(funções que não retorna nada).
2. "mudar_mapa" representa pela nota a mudança para a classe "mapa" e tem a variavel denominada "mudança" do tipo Array que é um void(funções que não retorna nada).

E ainda também ela é constantemente em executada uma classe de cada vez para não ter problemas entre os objetos.

***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; [![voltar](https://img.icons8.com/material-sharp/24/000000/circled-left-2.png )]( https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa./blob/master/documentos/Requisito%20do%20Sistema/Requisito%20do%20Sistema.md) [![voltar](https://img.icons8.com/material-sharp/24/000000/circled-right-2.png )](https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa./blob/master/documentos/Implementa%C3%A7%C3%A3o/Implementa%C3%A7%C3%A3o.md)
