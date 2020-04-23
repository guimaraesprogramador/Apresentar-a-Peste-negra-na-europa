[![voltar](https://raw.githubusercontent.com/google/material-design-icons/master/navigation/2x_web/ic_subdirectory_arrow_left_black_48dp.png)](https://github.com/guimaraesprogramador/zonas_distancia) 

***
# 4. Análise e Design
## 4.1 Arquitetura do Sistema
O digrama proposto abaixo é o de sequência seguindo a frase de ** ARISTÓTELES ** que é “o todo é maior que a soma das partes” foi dividido o conteúdo todo do digrama de sequência em 4 partes e suas descrições para facilidade a visualização e a leitura entre si.

### Parte 1
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%201.png)
#### Descrição
##### iniciando a projeção cartográfica.
A classe “mapa” precisa primeira ter internet para carregar o mapa (bidimensional) e ela faz parte um arquivo html carregado (index.html).
***
Depois disso ela encaminha diretamente para a método denominado “mudar_voz” da classe “mudar_estado” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “false” para a classe “mudar_estado”.
***
Na classe “mudar_estado” que vai encaminha quando terminar a classe “componentes_voz” como o método denominado “threads()” que é um void(função que não retorna nada).
***
Na classe “componentes_voz” o método denominado “threads()”  tem  a variável “threads_voz()” vai carregar três vez que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na última ordem da variável “threads_voz()”vai encaminhar diretamente para a classe “mudar_estado” com o método denominado “mudar_mapa” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “true”.
***
Na classe “mudar_estado” vai encaminha diretamente para classe “componentes_mapa” como o método denominado “threads()” que é um void(função que não retorna nada).
***
Na classe “componentes_mapa” o método “threads()”que é um void(função que não retorna nada) tem um variável “threads_mapa” vai carregar um método da classe “mapa” que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa.
***










### Parte 2
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%202.png)
#### Descrição
***
Quando a variável “threads_mapa()” retorna var encaminhar diretamente para classe “mudar_estado” com o método denominado “mudar_voz” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “false”.
***
Na classe “mudar_estado” que vai encaminha quando terminar a classe “componentes_voz” como o método denominado “threads()” que é um void(função que não retorna nada).
***
Na classe “componentes_voz” o método denominado “threads()”  tem  a variável “threads_voz()” vai carregar cinco vezes que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na última ordem da variável “threads_voz()”vai encaminhar diretamente para a classe “mudar_estado” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “true”.
***
Na classe “mudar_estado”  vai encaminha diretamente para classe “componentes_mapa” como o método denominado “threads()” que é um void(função que não retorna nada).
***
Na classe “componentes_mapa” o método “threads()”que é um void(função que não retorna nada) tem um variável “threads_mapa” vai carregar um método da classe “mapa” que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa.
*** 

### Parte 3
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%203.png)
#### Descrição
Quando a variável “threads_mapa()” retorna var encaminhar diretamente para classe “mudar_estado” com o método denominado “mudar_voz” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “false” e para a classe “mudar_estado”.
***
Na classe “mudar_estado” que vai encaminha quando terminar a classe “componentes_voz” como o método denominado “threads()” que é um void(função que não retorna nada).
***
Na classe “componentes_voz” o método denominado “threads()”  tem  a variável “threads_voz()” vai carregar duas vezes que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
Quando retorna na última ordem da variável “threads_voz()”vai encaminhar diretamente para a classe “mudar_estado” com o método denominado “mudar_mapa” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “true”.
***
** Recebimento para classe “componentes_voz”. **
Na classe “mudar_estado”  vai encaminha diretamente para classe “componentes_mapa” como o método denominado “threads()” que é um void(função que não retorna nada).
***
** Transmissão para classe “componentes_mapa”. **
Na classe “componentes_mapa” o método “threads()”que é um void(função que não retorna nada) tem um variável “threads_mapa” vai carregar um método da classe “mapa” que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa.
*** 
** Recebimento para classe “componentes_mapa”. **
Quando a variável “threads_mapa()” retorna var encaminhar diretamente para classe “mudar_estado” com o método denominado “mudar_voz” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “false” e para a classe “mudar_estado”.
***
** Transmissão para classe “mudar_estado”. **
Na classe “mudar_estado” que vai encaminha quando terminar a classe “componentes_voz” como o método denominado “threads()” que é um void(função que não retorna nada).
***
** Recebimento para classe “mudar_estado”. **
Na classe “componentes_voz” o método denominado “threads()”  tem  a variável “threads_voz()” vai carregar duas vezes que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
** Transmissão para classe “componentes_voz”. **
Quando retorna na última ordem da variável “threads_voz()”vai encaminhar diretamente para a classe “mudar_estado” com o método denominado “mudar_mapa” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “true”.
***
** Recebimento para classe “componentes_voz”. **
Na classe “mudar_estado”  vai encaminha diretamente para classe “componentes_mapa” como o método denominado “threads()” que é um void(função que não retorna nada).
***
** Transmissão para classe “componentes_mapa”. **
Na classe “componentes_mapa” o método “threads()”que é um void(função que não retorna nada) tem um variável “threads_mapa” vai carregar um método da classe “mapa” que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_mapa, por fim vai finalizar a classe “mapa”.


***
** Recebimento para classe “componentes_mapa”. **
Quando a variável “threads_mapa()” retorna var encaminhar diretamente para classe “mudar_estado” com o método denominado “mudar_voz” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “false” para a classe “mudar_estado”, por fim vai finalizar a classe “componentes_mapa”.
***
> Transmissão para classe “mudar_estado”. **
Na classe “mudar_estado” que vai encaminha quando terminar a classe “componentes_voz” como o método denominado “threads()” que é um void(função que não retorna nada).
***
** Recebimento para classe “mudar_estado”. **
Na classe “componentes_voz” o método denominado “threads()”  tem  a variável “threads_voz()” vai carregar tres vez que tem como retorno um array(ordem em fila) até fazer a reprodução de todos os threads_voz.
***
** Transmissão para classe “componentes_voz”. **
Quando retorna na primeira ordem da variável “threads_voz()”vai encaminhar diretamente para a classe “mudar_estado” com o método denominado “mudar_mapa” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “true”.
***
** Recebimento para classe “componentes_voz”. **
>1 Na classe “mudar_estado” vai encaminha diretamente para classe “componentes_voz” como o método denominado “threads()” que é um void(função que não retorna nada), por fim vai finalizar classe “mudar_estado”.
***
>2 Na classe “componentes_voz” o método denominado “threads()”  tem  a variável “threads_voz()” vai carregar duas vezes que tem como retorno um array(ordem em fila).
*** 
### Parte 4
![IMAGE]( https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20sequencia_parte%204.png)
#### Descrição
** Transmissão para classe “componentes_voz”. **
Depois disso vai executar a duas última ordem da variável “threads_voz()”vai encaminhar diretamente para a classe “mudar_estado” com o método denominado “mudar_voz” passando parâmetro de uma variável do tipo array(ordem em fila) que é um void(função que não retorna nada)como “true” até fazer a reprodução de todos os threads_voz.
### observação
O software é bastante afetado pelo estado do que se inicia sendo assim descrido abaixo:

1.  O software é ativado independo do usuário precisa dele ou não pois, já carregar os modulo necessário da aplicação e começar a trabalha praticamente os dados filtrados mais primeiramente ele promove um esclarecimento ao usuário suas finalidades, cabe o usuário aceite ou recuse. 

2. Caso o usuário aceito é esperado que fique na página em um curto intervalo de 3 segundos.
3. Caso o usuário recuse, ele pode sair da página antes dos 3 segundos sem se preocupar com seus dados pessoais.
4.Depois de cada história apresentada é exibido a localidade referente a história contada.
5. É por fim é exibir a união dessa localidade mostrada a extensão da Pandemia peste bubônica.
## 4.2 Modelo do Domínio
![IMAGE](https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20classe.png)
### Explicação do Diagrama de Classe 
O software possui duas classes principais: voz e o mapa, mas uma classe intermediaria que é denominada ”mudar_estado”. 
#### A classe “voz”
Esse objeto tem como composição a classe denominada “mudar_estado” que contém somente um método:

1.”Transmitir” que tem um variável denominada “falar” que é tipo string(texto) que é um void(funções que não retorna nada).

#### A classe “componente_voz”
Esse objeto é vinculado com uma associação unilateral (que a classe “mudar_estado” não reconhecer a existência dessa classe) que contém os seguintes atribuídos: 
1. ”Gênero” Definido como parecido com feminino.
2. ”Nome” Definido “Translatotron” criado pela empresa Google.
3. “autor” Definido como “Kévin Vieira Gomes Guimaraes”.
4. “identidade” Definida como “inteligência artificial”. 


Seus atribuído são o caráter do personagem criada pelo software para fazer há transformação de texto ortográfico em som do idioma português Brasileiro. E tem dois métodos que são:
1.O “Roteiro” que tem o atribuído “parte” como o valor de texto e retorna uma construção de frase do tipo texto.
2. A “threads” que não tem nenhuma variável que é um void(funções que não retorna nada).


#### A classe “mapa”
Esse objeto tem como composição a classe denominada “mudar_estado” que tem dois métodos que são:
1.  ”coordenadas” que tem duas variáveis como: lang e long do tipo number(real,inteiro,decimal e etc...).
2. “threads” que não tem nenhuma variável que é um void(funções que não retorna nada).
E uma variável denominada “estado” definhada inicialmente com verdadeira (true).
#### A classe “componentes_exibição”
Esse objeto é vinculado com uma associação unilateral (que a classe “mudar_estado” não reconhecer a existência da classe “componentes_exibição”) que contém os seguintes atributos:

1. ”Ano” Definido como number(real,inteiro,decimal e etc...).
2. “local” Definido como string(texto).
3. “latitude” Definido como number(real,inteiro,decimal e etc...).
4. “longitude” Definido como number(real,inteiro,decimal e etc...).

#### A classe intermediaria ”mudar_estado”
Esse objeto é necessário para caracterizar tanto o mapa que reproduzido tanto para ajudar no conto da história apresentar pela classe “voz”.
Ela é composta de dois métodos que são:
1. “mudar_voz” que representar pela nota a mudança para a classe “voz” e tem a variável denominada “mudança” do tipo Array que é um void(funções que não retorna nada).
2. “mudar_mapa” representa pela nota a mudança para a classe “mapa” e tem a variável denominada “mudança” do tipo Array que é um void(funções que não retorna nada).

E ainda também ela é constantemente em executada uma classe de cada vez para não ter problemas entre os objetos.
## 4.3 Modelo de Dados
### 4.3.1 Modelo Lógico da Base de Dados
![Image](https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20relacionamento%20de%20entidade.png)
