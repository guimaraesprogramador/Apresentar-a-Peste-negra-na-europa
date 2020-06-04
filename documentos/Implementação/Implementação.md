# 5 Implanta��o
As implanta��es do site referente a Pandemia de peste bub�nica foram feitas baseada em site e livro refer�ncia em hist�ria de Pandemias, utilizam orienta��o a objeto e API de s�ntese de fala inclu�do no browser na linguagem �javascript� e tamb�m web workers que roda no backend dos browsers ajudando na performance da p�gina.
O padr�o utilizado foi o State utilizando uma classe que comp�em duas classes que n�o reconhecimento entre si, mas s�o manipuladas seu estado dependo da ordem na implementa��o na apresenta��o no site.
H� tamb�m aquilo de configura��o no github que � jekyll para sites est�ticos.
O c�digo foi divido em parte para facilidade com a frase de Arist�teles:
" O todo � maior que a soma das partes ".
N�o foi poss�vel a implementa��o em todos os browsers pois, A API de Navegador no m�todo getUserMedia() ,  abaixo uma tabela do dia 26 de mar�o de 2020:
***
Browser compatibility |getUserMedia | Secure context required 
----------------------| ------------|----------------------	
![chorme]( https://img.icons8.com/metro/26/000000/chrome.png) chrome 		     |52		    |Yes
![Edge](https://img.icons8.com/metro/26/000000/ms-edge.png) Edge			     |12		   |79
![Firefox](https://img.icons8.com/metro/26/000000/firefox.png) Firefox			|36		   |68
![Internet Explorer](https://img.icons8.com/metro/26/000000/internet-explorer.png) Internet Explorer    |NO		   |NO
![Opera](https://img.icons8.com/metro/26/000000/opera.png) Opera  		     |40		   |?
![Safari](https://img.icons8.com/ios-filled/26/000000/safari.png) Safari 		     |11 		   |?
![Android webview](https://img.icons8.com/metro/26/000000/android-os.png) Android webview	     | 53	 	  |Yes 
![Chrome for Android](https://img.icons8.com/metro/26/000000/chrome.png) Chrome for Android    |52          |Yes
![Firefox for Android](https://img.icons8.com/metro/26/000000/firefox.png)  Firefox for Android |36		   |68
![Opera for Android](https://img.icons8.com/metro/26/000000/opera.png) Opera for Android	|41 		   |?
![Safari on iOS](https://img.icons8.com/material-rounded/26/000000/adventures.png) Safari on iOS 	     |11 	        |?
![Samsung Internet](https://img.icons8.com/pastel-glyph/26/000000/internet.png) Samsung Internet     |6.0           |?
***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; [![voltar](https://img.icons8.com/material-sharp/24/000000/circled-left-2.png )](https://github.com/guimaraesprogramador/ Apresentar-a-Peste-negra-na-europa./blob/master/documentos/An%C3%A1lise%20e%20Design/An%C3%A1lise%20e%20Design.md)  [![voltar](https://img.icons8.com/material-sharp/24/000000/circled-right-2.png )]( https://github.com/guimaraesprogramador/Apresentar-a-Peste-negra-na-europa./blob/master/documentos/Testes/Testes.md)
