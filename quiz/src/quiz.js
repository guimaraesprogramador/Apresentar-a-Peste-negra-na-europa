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
        this.input[2].type = "radio";
        this.input[0].id = this.input[0].type.toString() +"quiz"+(1);
        this.input[1].id = this.input[1].type.toString() + "quiz"+ (2);
        this.input[2].id = this.input[2].type.toString() +"quiz" + (3);
        this.input[0].name = "quiz";
        this.input[1].name = "quiz";
        this.input[2].name = "quiz";
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


        var input = [ "<input type = "," value ="," id = "," </input>"," name ="];
        this.quizlegenda = L.control({ position: "bottomright" });
        this.quizlegenda.onAdd = function(map) {
            var index_radio = 0;
            this.div = L.DomUtil.create("div", "quiz");
            
            switch(quiz.numero){
            case 0:
            this.div.innerHTML += '<h4> '+quiz.nome +' </h4>';
            quiz.button[index_radio].setAttribute("value","Inicio");;
            this.div.innerHTML += input[0] + quiz.button[index_radio].type.toString() +
            input[1] + quiz.button[index_radio].value + input[2] +
            quiz.button[index_radio].id + input[2] + "> "+ input[3];
            this.div.innerHTML += "</br>";
            quiz.index_input = 1;
            break;
            case 1:
            this.div.innerHTML += "<img src='"+quiz.img.src.toString() +"' "+
            "id = "+ quiz.img.id+" />";
            this.div.innerHTML += '<h4> '+ quiz.problema[0] +' </h4> ';
            quiz.input[0].setAttribute("value",quiz.problema[1]);
            quiz.input[1].setAttribute("value",quiz.problema[2]);
            quiz.input[2].setAttribute("value",quiz.problema[3]);

            var radio1 =  input[0] + quiz.input[index_radio].type.toString() +
            input[1] + quiz.input[index_radio].value +input[2] +
            quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
            quiz.input[index_radio].value +input[3]+ " ";

            index_radio = index_radio +1;

            var radio2 =   input[0] + quiz.input[index_radio].type.toString() +
            input[1] + quiz.input[index_radio].value +input[2] +
            quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
            quiz.input[index_radio].value +input[3]+ " ";

            index_radio = index_radio +1;

            var radio3 =  input[0] + quiz.input[index_radio].type.toString() +
            input[1] + quiz.input[index_radio].value +input[2] +
            quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
            quiz.input[index_radio].value +input[3]+ " ";

            quiz.form.append(radio1);
            quiz.form.append(radio2);
            quiz.form.append(radio3);
            this.div.innerHTML += "<form  id='form' > "+
            quiz.form.innerText.toString(); +"</form> </br>";
            index_radio = 0;

            quiz.button[index_radio].removeAttribute("value");   
            quiz.button[index_radio].setAttribute("value","Proxima");


            this.div.innerHTML += input[0] + quiz.button[index_radio].type.toString() +
            input[1] + quiz.button[index_radio].value + input[2] +
            quiz.button[index_radio].id + input[2] + "> "+ input[3];

            this.div.innerHTML += "<span id = 'numero' > "+ quiz.numero+"/5"+" </span>";
            quiz.index_input = 3;
            break;
            case 2:
            this.div.innerHTML += '<h4> '+ quiz.problema[0] +' </h4> ';
            break;
            };

            return this.div;
        }

        this.quizlegenda.addTo(m.map);
        
        if(quiz.numero == 0){
            
            this.quizlegenda.div.children[quiz.index_input].onclick = function(ev){
                quiz.numero = quiz.numero +1;
                dados.http();    
            }
            
        }
        else if(quiz.numero == 1) 
        {
            
            
            this.quizlegenda.div.children[quiz.index_input].onclick = function(ev){
               
                var radio = document.getElementsByName("quiz");
                var i = 0;
                while(i<3){
                    if(radio[i].checked){
                    
                        if(radio[i].value == quiz.problema[1]){
                            quiz.sucesso.push("acerto");
                        }
                    }
                    i = i +1;
                }
                if(quiz.sucesso.length == 0)quiz.fracasso.push("errado"); 
                quiz.numero = quiz.numero +1;   
                dados.http()
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