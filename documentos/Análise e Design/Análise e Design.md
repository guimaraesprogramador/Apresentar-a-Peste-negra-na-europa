[![voltar](https://raw.githubusercontent.com/google/material-design-icons/master/navigation/2x_web/ic_subdirectory_arrow_left_black_48dp.png)](https://github.com/guimaraesprogramador/zonas_distancia) 

***
# 4. An�lise e Design
## 4.1 Arquitetura do Sistema
O digrama proposto abaixo � o de sequ�ncia seguindo a frase de ** ARIST�TELES ** que � �o todo � maior que a soma das partes� foi dividido o conte�do todo do digrama de sequ�ncia em 4 partes e suas descri��es para facilidade a visualiza��o e a leitura entre si.

### Parte 1
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%201.png)
#### Descri��o
##### iniciando a proje��o cartogr�fica.
A classe �mapa� precisa primeira ter internet para carregar o mapa (bidimensional) e ela faz parte um arquivo html carregado (index.html).
***
Depois disso ela encaminha diretamente para a m�todo denominado �mudar_voz� da classe �mudar_estado� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �false� para a classe �mudar_estado�.
***
Na classe �mudar_estado� que vai encaminha quando terminar a classe �componentes_voz� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
Na classe �componentes_voz� o m�todo denominado �threads()�  tem  a vari�vel �threads_voz()� vai carregar tr�s vez que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_voz.
***
Quando retorna na �ltima ordem da vari�vel �threads_voz()�vai encaminhar diretamente para a classe �mudar_estado� com o m�todo denominado �mudar_mapa� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �true�.
***
Na classe �mudar_estado� vai encaminha diretamente para classe �componentes_mapa� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
Na classe �componentes_mapa� o m�todo �threads()�que � um void(fun��o que n�o retorna nada) tem um vari�vel �threads_mapa� vai carregar um m�todo da classe �mapa� que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_mapa.
***










### Parte 2
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%202.png)
#### Descri��o
***
Quando a vari�vel �threads_mapa()� retorna var encaminhar diretamente para classe �mudar_estado� com o m�todo denominado �mudar_voz� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �false�.
***
Na classe �mudar_estado� que vai encaminha quando terminar a classe �componentes_voz� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
Na classe �componentes_voz� o m�todo denominado �threads()�  tem  a vari�vel �threads_voz()� vai carregar cinco vezes que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_voz.
***
Quando retorna na �ltima ordem da vari�vel �threads_voz()�vai encaminhar diretamente para a classe �mudar_estado� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �true�.
***
Na classe �mudar_estado�  vai encaminha diretamente para classe �componentes_mapa� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
Na classe �componentes_mapa� o m�todo �threads()�que � um void(fun��o que n�o retorna nada) tem um vari�vel �threads_mapa� vai carregar um m�todo da classe �mapa� que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_mapa.
*** 

### Parte 3
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%203.png)
#### Descri��o
Quando a vari�vel �threads_mapa()� retorna var encaminhar diretamente para classe �mudar_estado� com o m�todo denominado �mudar_voz� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �false� e para a classe �mudar_estado�.
***
Na classe �mudar_estado� que vai encaminha quando terminar a classe �componentes_voz� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
Na classe �componentes_voz� o m�todo denominado �threads()�  tem  a vari�vel �threads_voz()� vai carregar duas vezes que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_voz.
***
Quando retorna na �ltima ordem da vari�vel �threads_voz()�vai encaminhar diretamente para a classe �mudar_estado� com o m�todo denominado �mudar_mapa� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �true�.
***
** Recebimento para classe �componentes_voz�. **
Na classe �mudar_estado�  vai encaminha diretamente para classe �componentes_mapa� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
** Transmiss�o para classe �componentes_mapa�. **
Na classe �componentes_mapa� o m�todo �threads()�que � um void(fun��o que n�o retorna nada) tem um vari�vel �threads_mapa� vai carregar um m�todo da classe �mapa� que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_mapa.
*** 
** Recebimento para classe �componentes_mapa�. **
Quando a vari�vel �threads_mapa()� retorna var encaminhar diretamente para classe �mudar_estado� com o m�todo denominado �mudar_voz� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �false� e para a classe �mudar_estado�.
***
** Transmiss�o para classe �mudar_estado�. **
Na classe �mudar_estado� que vai encaminha quando terminar a classe �componentes_voz� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
** Recebimento para classe �mudar_estado�. **
Na classe �componentes_voz� o m�todo denominado �threads()�  tem  a vari�vel �threads_voz()� vai carregar duas vezes que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_voz.
***
** Transmiss�o para classe �componentes_voz�. **
Quando retorna na �ltima ordem da vari�vel �threads_voz()�vai encaminhar diretamente para a classe �mudar_estado� com o m�todo denominado �mudar_mapa� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �true�.
***
** Recebimento para classe �componentes_voz�. **
Na classe �mudar_estado�  vai encaminha diretamente para classe �componentes_mapa� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
** Transmiss�o para classe �componentes_mapa�. **
Na classe �componentes_mapa� o m�todo �threads()�que � um void(fun��o que n�o retorna nada) tem um vari�vel �threads_mapa� vai carregar um m�todo da classe �mapa� que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_mapa, por fim vai finalizar a classe �mapa�.


***
** Recebimento para classe �componentes_mapa�. **
Quando a vari�vel �threads_mapa()� retorna var encaminhar diretamente para classe �mudar_estado� com o m�todo denominado �mudar_voz� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �false� para a classe �mudar_estado�, por fim vai finalizar a classe �componentes_mapa�.
***
> Transmiss�o para classe �mudar_estado�. **
Na classe �mudar_estado� que vai encaminha quando terminar a classe �componentes_voz� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada).
***
** Recebimento para classe �mudar_estado�. **
Na classe �componentes_voz� o m�todo denominado �threads()�  tem  a vari�vel �threads_voz()� vai carregar tres vez que tem como retorno um array(ordem em fila) at� fazer a reprodu��o de todos os threads_voz.
***
** Transmiss�o para classe �componentes_voz�. **
Quando retorna na primeira ordem da vari�vel �threads_voz()�vai encaminhar diretamente para a classe �mudar_estado� com o m�todo denominado �mudar_mapa� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �true�.
***
** Recebimento para classe �componentes_voz�. **
>1 Na classe �mudar_estado� vai encaminha diretamente para classe �componentes_voz� como o m�todo denominado �threads()� que � um void(fun��o que n�o retorna nada), por fim vai finalizar classe �mudar_estado�.
***
>2 Na classe �componentes_voz� o m�todo denominado �threads()�  tem  a vari�vel �threads_voz()� vai carregar duas vezes que tem como retorno um array(ordem em fila).
*** 
### Parte 4
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%204.png)
#### Descri��o
** Transmiss�o para classe �componentes_voz�. **
Depois disso vai executar a duas �ltima ordem da vari�vel �threads_voz()�vai encaminhar diretamente para a classe �mudar_estado� com o m�todo denominado �mudar_voz� passando par�metro de uma vari�vel do tipo array(ordem em fila) que � um void(fun��o que n�o retorna nada)como �true� at� fazer a reprodu��o de todos os threads_voz.
### observa��o
O software � bastante afetado pelo estado do que se inicia sendo assim descrido abaixo:

1.  O software � ativado independo do usu�rio precisa dele ou n�o pois, j� carregar os modulo necess�rio da aplica��o e come�ar a trabalha praticamente os dados filtrados mais primeiramente ele promove um esclarecimento ao usu�rio suas finalidades, cabe o usu�rio aceite ou recuse. 

2. Caso o usu�rio aceito � esperado que fique na p�gina em um curto intervalo de 3 segundos.
3. Caso o usu�rio recuse, ele pode sair da p�gina antes dos 3 segundos sem se preocupar com seus dados pessoais.
4.Depois de cada hist�ria apresentada � exibido a localidade referente a hist�ria contada.
5. � por fim � exibir a uni�o dessa localidade mostrada a extens�o da Pandemia peste bub�nica.
## 4.2 Modelo do Dom�nio
![IMAGE](https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20classe.png)
### Explica��o do Diagrama de Classe 
O software possui duas classes principais: voz e o mapa, mas uma classe intermediaria que � denominada �mudar_estado�. 
#### A classe �voz�
Esse objeto tem como composi��o a classe denominada �mudar_estado� que cont�m somente um m�todo:

1.�Transmitir� que tem um vari�vel denominada �falar� que � tipo string(texto) que � um void(fun��es que n�o retorna nada).

#### A classe �componente_voz�
Esse objeto � vinculado com uma associa��o unilateral (que a classe �mudar_estado� n�o reconhecer a exist�ncia dessa classe) que cont�m os seguintes atribu�dos: 
1. �G�nero� Definido como parecido com feminino.
2. �Nome� Definido �Translatotron� criado pela empresa Google.
3. �autor� Definido como �K�vin Vieira Gomes Guimaraes�.
4. �identidade� Definida como �intelig�ncia artificial�. 


Seus atribu�do s�o o car�ter do personagem criada pelo software para fazer h� transforma��o de texto ortogr�fico em som do idioma portugu�s Brasileiro. E tem dois m�todos que s�o:
1.O �Roteiro� que tem o atribu�do �parte� como o valor de texto e retorna uma constru��o de frase do tipo texto.
2. A �threads� que n�o tem nenhuma vari�vel que � um void(fun��es que n�o retorna nada).


#### A classe �mapa�
Esse objeto tem como composi��o a classe denominada �mudar_estado� que tem dois m�todos que s�o:
1.  �coordenadas� que tem duas vari�veis como: lang e long do tipo number(real,inteiro,decimal e etc...).
2. �threads� que n�o tem nenhuma vari�vel que � um void(fun��es que n�o retorna nada).
E uma vari�vel denominada �estado� definhada inicialmente com verdadeira (true).
#### A classe �componentes_exibi��o�
Esse objeto � vinculado com uma associa��o unilateral (que a classe �mudar_estado� n�o reconhecer a exist�ncia da classe �componentes_exibi��o�) que cont�m os seguintes atributos:

1. �Ano� Definido como number(real,inteiro,decimal e etc...).
2. �local� Definido como string(texto).
3. �latitude� Definido como number(real,inteiro,decimal e etc...).
4. �longitude� Definido como number(real,inteiro,decimal e etc...).

#### A classe intermediaria �mudar_estado�
Esse objeto � necess�rio para caracterizar tanto o mapa que reproduzido tanto para ajudar no conto da hist�ria apresentar pela classe �voz�.
Ela � composta de dois m�todos que s�o:
1. �mudar_voz� que representar pela nota a mudan�a para a classe �voz� e tem a vari�vel denominada �mudan�a� do tipo Array que � um void(fun��es que n�o retorna nada).
2. �mudar_mapa� representa pela nota a mudan�a para a classe �mapa� e tem a vari�vel denominada �mudan�a� do tipo Array que � um void(fun��es que n�o retorna nada).

E ainda tamb�m ela � constantemente em executada uma classe de cada vez para n�o ter problemas entre os objetos.
## 4.3 Modelo de Dados
### 4.3.1 Modelo L�gico da Base de Dados
![Image](https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20relacionamento%20de%20entidade.png)
