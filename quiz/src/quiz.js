class quizjs{

    constructor(){
        this.nome = "Teste de Conhecimento \n ";
        this.questões = document.createElement("h3");
        this.questões.id ="questão";
          this.button = [document.createElement("button"),
      document.createElement("button")];
        this.radio =[
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
        ]
        this.numero;
        this.radio[0].type = "radio";
        this.radio[1].type = "radio";
        this.radio[2].type = "radio";
        this.radio[0].id = "quiz"+(1);
        this.radio[1].id = "quiz"+ (2);
        this.radio[2].id = "quiz" + (3);
        this.button[0].id = "quiz"+(4);
        this.button[0].id = "quiz"+(5);
        this.problema;
        this.index;
        this.palavra ;
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

    layort(){
  
      
        var input = [ "<input type = "," value ="," id = "," </input>"];
        var quiz = L.control({ position: "bottomright" });
        quiz.onAdd = function(map) {
            var index_radio = 0;
            var div = L.DomUtil.create("div", "quiz");
              
            switch(questões.numero){
            case 0:
            div.innerHTML += '<h4> '+questões.nome +' </h4>'; 
            break;
            case 1:
            div.innerHTML += '<h3> '+ questões.problema[0] +' </h3>';
            questões.radio[0].setAttribute("value",questões.problema[1]);
            questões.radio[1].setAttribute("value",questões.problema[2]);
            questões.radio[2].setAttribute("value",questões.problema[3]);
            
            div.innerHTML +=  input[0] + questões.radio[index_radio].type.toString() +
            input[1] + questões.radio[index_radio].value +input[2] +
            questões.radio[index_radio].id +"> "+
            questões.radio[index_radio].value +input[3];

            index_radio = index_radio +1;

            div.innerHTML +=  input[0] + questões.radio[index_radio].type.toString() +
            input[1] + questões.radio[index_radio].value +input[2] +
            questões.radio[index_radio].id +"> "+
            questões.radio[index_radio].value +input[3];

            index_radio = index_radio +1;
            
            div.innerHTML +=  input[0] + questões.radio[index_radio].type.toString() +
            input[1] + questões.radio[index_radio].value +input[2] +
            questões.radio[index_radio].id +"> "+
            questões.radio[index_radio].value +input[3] +"</br>";
            
            break;    
            }
            
            console.log(div);
            return div;
        }
        quiz.addTo(m.map);
       
      
    }
  http()
    {

         if(window.XMLHttpRequest){
            var xhtml= new XMLHttpRequest();
            if(this.numero == undefined)this.index = 0;
            xhtml.open("GET","./quiz/questões/perguntas.json",true);
            xhtml.onload = function(){
                var users = JSON.parse(xhtml.responseText);
                if(xhtml.readyState == 4  && xhtml.status == "200"){
                    if(questões.index == 1){
                         questões.problema = [users.perguntas.primeira,
                            users.questão.multescola.primeira[0],
                            users.questão.multescola.primeira[1],
                            users.questão.multescola.primeira[2]];
                    }
                    questões.layort();
                }
            }
            
            xhtml.send(null);
         }
    }
  }
const questões = new quizjs();
questões.http();

//   questões.pergunta().then(ordem=>{
//     questões.layort();
//   });
  