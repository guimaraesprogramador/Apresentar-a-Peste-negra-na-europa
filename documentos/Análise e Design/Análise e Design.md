[![voltar](https://raw.githubusercontent.com/google/material-design-icons/master/navigation/2x_web/ic_subdirectory_arrow_left_black_48dp.png)](https://github.com/guimaraesprogramador/zonas_distancia) 

***
# 4. An�lise e Design
## 4.1 Arquitetura do Sistema
![Image](https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20estado.png)
### Explica��o do Diagrama de estado.
O software � bastante afetado pelo estado do que se inicia sendo assim descrido abaixo:

1.  O software � ativado independo do usu�rio precisa dele ou n�o pois, j� carregar os modulo necess�rio da aplica��o e come�ar a trabalha praticamente os dados filtrados mais primeiramente ele promove um esclarecimento ao usu�rio suas finalidades, sendo usu�rio aceita-las ou recusa-las.

2. Quando o software � recusado, o software n�o tem mais nada fidelidade ainda de ser utilizado. 

3. Caso o software � aceito a apresentar os termos impostos.
4.Depois de cada hist�ria apresentada � exibido a localidade referente a hist�ria contada.
5. � por fim � exibir a uni�o dessa localidade mostrada a extens�o da Pandemia bub�nica.
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
