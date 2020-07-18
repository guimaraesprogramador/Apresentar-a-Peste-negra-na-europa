class quizjs{

    constructor(){
        this.nome = "Teste de Conhecimento";
        this.quizlegenda = document.createElement("h3");
        this.quizlegenda.id ="questão";
          this.button = [document.createElement("input")];
      this.form = document.createElement("form");
        this.input =[
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
        ]
        this.numero;
        this.input[0].type = "radio";
        this.input[1].type = "radio";
        this.input[2].type = "radio"
        this.input[0].required = true;
        this.input[1].required = true;
        this.input[2].required = true;
        this.input[3].type = "text";
        this.input[0].id = this.input[0].type.toString() +"quiz"+(1);
        this.input[1].id = this.input[1].type.toString() + "quiz"+ (2);
        this.input[2].id = this.input[2].type.toString() +"quiz" + (3);
        this.input[3].id = this.input[3].type.toString() +"quiz" + (1);
        this.input[0].name = "quiz";
        this.input[1].name = "quiz";
        this.input[2].name = "quiz";
        this.input[3].name = "quiz";
        this.button[0].type = "submit";
        this.button[0].id = this.button[0].type.toString() +"quiz"+(4);
        
        this.problema;
        this.index;
        this.palavra;
        this.img = document.createElement("img");

        this.img.src = "./documentos/imagens/etapa 2/PIXNIO-842805-725x473.png";
        this.img.id = "imagens1";
        this.index_input;
        this.sucesso  = [];
        this.fracasso = [];
    }
    get numero(){
        return this.index;
    }
    set numero(t){
         this.numero = t;
    }
    get problema (){
        return this.palavra;
    }
    set problema (q){
         this.palavra = q;
    }
  }
class Carregardados{

    escolharradio(radio){
        var i = 0;
        var erro  = 0;
        while(i<radio.length){
            if(radio[i].checked){
            
                if(radio[i].value == quiz.problema[1]){
                    quiz.sucesso.push("acerto");
                    quiz.numero = quiz.numero + 1;   
                    dados.http();
                    
                }
            }
            else erro = erro +1;
            i = i +1;
        }
        if(erro == radio.length){
                alert("marque uma opção pelo menos");
        } 
        else{
            quiz.fracasso.push("errado");
            quiz.numero = quiz.numero + 1;   
            dados.http()
        }
        console.clear();
    }
    layort(){


            
            this.quizlegenda = L.control({ position: "bottomright" });
        this.quizlegenda.onAdd = function(map) {
            
            this.div = L.DomUtil.create("div", "quiz");
            
            switch(quiz.index){
            case 0:
            this.div.innerHTML += primeira_parte(this.div)
            break;

            case 1:
            this.div.innerHTML += segunda_parte(this.div);
            break;
            case 2:
            this.div.innerHTML += terceira_parte(this.div);
            break;
            
            case 3:
            this.div.innerHTML += quarta_parte(this.div);

            break;
            case 4:

            this.div.innerHTML += quinta_parte(this.div);
            
            break;
            };
            return this.div;
        }

        this.quizlegenda.addTo(m.map);
        
        if(quiz.index == 0){
            
            this.quizlegenda.div.children[quiz.index_input].onclick = function(ev){
                quiz.index = quiz.numero + 1;
                dados.http();    
            }
            
        }
        else if(quiz.index == 1) 
        {
            
            
            this.quizlegenda.div.children[quiz.index_input].onclick = function(ev){
               
                var radio = document.getElementsByName("quiz");
                dados.escolharradio(radio);
            }
            
        }
        else if(quiz.index == 2)
        {
            this.quizlegenda.div.children[quiz.index_input].onclick = function(ev)
            {
                var texto = document.getElementsByName("quiz");

                if(texto[0].value == quiz.problema[1]){
                    quiz.sucesso.push("acerto");
                            quiz.numero = quiz.numero +1;   
                            dados.http();
                }
                else if(quiz.sucesso.length != 2){
                    
                    if(texto[0].value == ""){
                        alert("preeenchar o texto");
                    }
                    else{
                        quiz.fracasso.push("errado");
                        quiz.numero = quiz.numero +1;   
                        dados.http()
                    }
                } 
                
            }
        }
        else if(quiz.index = 3){
            this.quizlegenda.div.children[quiz.index_input].onclick = function(ev)
            {
                var radio = document.getElementsByName("quiz");
                dados.escolharradio(radio);
            }   
        }
        else if(quiz.index == 4){
            this.quizlegenda.div.children[quiz.index_input].onclick = function(ev)
            {
            var radio = document.getElementsByName("quiz");
            dados.escolharradio(radio);
            }
        }
    }
  http()
    {

         if(window.XMLHttpRequest){

            if(quiz.numero == undefined){
                quiz.index = 0;
                this.layort();
            }
            else{
                this.quizlegenda.removeFrom(m.map);
                var xhtml= new XMLHttpRequest();
                xhtml.open("GET","./quiz/questões/perguntas.json",true);
                xhtml.onload = function(){
                    
                    if(xhtml.readyState == 4  && xhtml.status == "200"){
                        var users = JSON.parse(xhtml.responseText);
                        switch(quiz.index){
                            case 1:
                             quiz.problema = [users.perguntas.primeira,
                                users.questão.multescola.primeira[0],
                                users.questão.multescola.primeira[1],
                                users.questão.multescola.primeira[2]];
                            break;
                            case 2:
                            quiz.problema = [
                                users.perguntas.segunda,
                                users.perguntas.escolhaunica
                            ]
                            break;
                            case 3:
                            quiz.problema = [
                                users.perguntas.terceira,
                                users.questão.multescola.segunda[0],
                                users.questão.multescola.segunda[1],
                                users.questão.multescola.segunda[2],
                                users.questão.multescola.segunda[3]
                            ]
                            break;
                            case 4:
                            quiz.problema = [
                                users.perguntas.quarta,
                                users.questão.multescola.terceira[0],
                                users.questão.multescola.terceira[1],
                                users.questão.multescola.terceira[2],
                                users.questão.multescola.terceira[3]
                            ]
                            break;
                        }
                    dados.layort();
                    }
                }
                xhtml.send();

            }

         }
    }
}

const quiz = new quizjs();
const dados = new Carregardados();
dados.http();