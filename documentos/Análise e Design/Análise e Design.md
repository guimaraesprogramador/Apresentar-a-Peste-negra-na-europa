[![voltar](https://raw.githubusercontent.com/google/material-design-icons/master/navigation/2x_web/ic_subdirectory_arrow_left_black_48dp.png)](https://github.com/guimaraesprogramador/zonas_distancia) 

***
# 4. Análise e Design
## 4.1 Arquitetura do Sistema
![Image](https://github.com/guimaraesprogramador/zonas_distancia/blob/master/documentos/imagens/diagrama%20de%20estado.png)
### Explicação do Diagrama de estado.
O software é bastante afetado pelo estado do que se inicia sendo assim descrido abaixo:

1.  O software é ativado independo do usuário precisa dele ou não pois, já carregar os modulo necessário da aplicação e começar a trabalha praticamente os dados filtrados mais primeiramente ele promove um esclarecimento ao usuário suas finalidades, sendo usuário aceita-las ou recusa-las.

2. Quando o software é recusado, o software não tem mais nada fidelidade ainda de ser utilizado. 

3. Caso o software é aceito a apresentar os termos impostos.
4.Depois de cada história apresentada é exibido a localidade referente a história contada.
5. É por fim é exibir a união dessa localidade mostrada a extensão da Pandemia bubônica.
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
