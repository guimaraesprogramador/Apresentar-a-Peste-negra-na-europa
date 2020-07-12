class quizjs{

    constructor(){
        this.nome = "Teste de Conhecimento";
        this.quiz = document.createElement("h3");
        this.quiz.id ="questão";
          this.button = [document.createElement("input"),
      document.createElement("input"),
      document.createElement("input")];
        this.radio =[
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
        ]
        this.numero;
        this.radio[0].type = "radio";
        this.radio[1].type = "radio";
        this.radio[2].type = "radio";
        this.radio[0].id = this.radio[0].type.toString() +"quiz"+(1);
        this.radio[1].id = this.radio[1].type.toString() + "quiz"+ (2);
        this.radio[2].id = this.radio[2].type.toString() +"quiz" + (3);
        this.button[0].type = "submit";
        this.button[1].type = "submit";
        this.button[2].type = "submit";
        this.button[0].id = this.button[0].type.toString() +"quiz"+(4);
        this.button[1].id = this.button[1].type.toString() +"quiz"+(5);
        this.button[2].id = this.button[2].type.toString() +"quiz"+(6);
         
        this.problema;
        this.index;
        this.palavra;
        
    }
    get numero(){
        return this.index;
    }
    set numero(t){
         this.index = t;
    }
    get problema (){
        return this.palavra;
    }
    set problema (q){
         this.palavra = q;
    }
  }
class Carregardados{
    
    layort(){
  
      
        var input = [ "<input type = "," value ="," id = "," </input>"];
        this.quiz = L.control({ position: "bottomright" });
        this.quiz.onAdd = function(map) {
            var index_radio = 0;
            this.div = L.DomUtil.create("div", "quiz");
              
            switch(quiz.numero){
            case 0:
            this.div.innerHTML += '<h4> '+quiz.nome +' </h4>';
            quiz.button[index_radio].setAttribute("value","Inicio"); 
            this.div.innerHTML += input[0] + quiz.button[index_radio].type.toString() +
            input[1] + quiz.button[index_radio].value + input[2] +
            quiz.button[index_radio].id + input[2] + "> "+ input[3];
            this.div.innerHTML += "</br>";
            
            break;
            case 1:
            this.div.innerHTML += '<h3> '+ quiz.problema[0] +' </h3>';
            quiz.radio[0].setAttribute("value",quiz.problema[1]);
            quiz.radio[1].setAttribute("value",quiz.problema[2]);
            quiz.radio[2].setAttribute("value",quiz.problema[3]);
            
            this.div.innerHTML +=  input[0] + quiz.radio[index_radio].type.toString() +
            input[1] + quiz.radio[index_radio].value +input[2] +
            quiz.radio[index_radio].id +"> "+
            quiz.radio[index_radio].value +input[3];

            index_radio = index_radio +1;

            this.div.innerHTML +=  input[0] + quiz.radio[index_radio].type.toString() +
            input[1] + quiz.radio[index_radio].value +input[2] +
            quiz.radio[index_radio].id +"> "+
            quiz.radio[index_radio].value +input[3];

            index_radio = index_radio +1;
            
            this.div.innerHTML +=  input[0] + quiz.radio[index_radio].type.toString() +
            input[1] + quiz.radio[index_radio].value +input[2] +
            quiz.radio[index_radio].id +"> "+
            quiz.radio[index_radio].value +input[3] +"</br>";
            
            break;    
            };
            console.log(this.div);
            return this.div;
        }
        
        this.quiz.addTo(m.map);
        switch(this.quiz.div.children[1].id){
           case this.button[0].id.toString():
           //click no botão inicio.
        this.quiz.div.children[1].onclick = function(ev){
            quiz.numero = 1;
            //carregar o novo layort;
           // quiz.http();
        }
           break;
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
                var xhtml= new XMLHttpRequest();
                xhtml.open("GET","./quiz/quiz/perguntas.json",true);
                xhtml.onload = function(){
                    var users = JSON.parse(xhtml.responseText);
                    if(xhtml.readyState == 4  && xhtml.status == "200"){
                        if(quiz.index == 1){
                             quiz.problema = [users.perguntas.primeira,
                                users.questão.multescola.primeira[0],
                                users.questão.multescola.primeira[1],
                                users.questão.multescola.primeira[2]];
                        }
                    dados.layort();
                    }
                }
                
                xhtml.send(null);
            }
            
         }
    }
}

const quiz = new quizjs();
const dados = new Carregardados();
dados.http();