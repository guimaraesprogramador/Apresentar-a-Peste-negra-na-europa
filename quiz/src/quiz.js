class quizjs{

    constructor(){
        this.nome = "Teste de Conhecimento";
        this.quiz = document.createElement("h3");
        this.quiz.id ="questão";
          this.button = [document.createElement("input")];
      this.form = document.createElement("form");
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
        this.radio[0].name = "quiz";
        this.radio[1].name = "quiz";
        this.radio[2].name = "quiz";
        this.button[0].type = "submit";
        this.button[0].id = this.button[0].type.toString() +"quiz"+(4);
        
        this.problema;
        this.index;
        this.palavra;
        this.img = document.createElement("img");

        this.img.src = "./documentos/imagens/etapa 2/PIXNIO-842805-725x473.png";
        this.img.id = "imagens1";
        this.index_input;
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
        this.quiz = L.control({ position: "bottomright" });
        this.quiz.onAdd = function(map) {
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
            quiz.radio[0].setAttribute("value",quiz.problema[1]);
            quiz.radio[1].setAttribute("value",quiz.problema[2]);
            quiz.radio[2].setAttribute("value",quiz.problema[3]);

            var radio1 =  input[0] + quiz.radio[index_radio].type.toString() +
            input[1] + quiz.radio[index_radio].value +input[2] +
            quiz.radio[index_radio].id +input[4] + quiz.radio[index_radio].name +" > "+
            quiz.radio[index_radio].value +input[3]+ " ";

            index_radio = index_radio +1;

            var radio2 =   input[0] + quiz.radio[index_radio].type.toString() +
            input[1] + quiz.radio[index_radio].value +input[2] +
            quiz.radio[index_radio].id +input[4] + quiz.radio[index_radio].name +" > "+
            quiz.radio[index_radio].value +input[3]+ " ";

            index_radio = index_radio +1;

            var radio3 =  input[0] + quiz.radio[index_radio].type.toString() +
            input[1] + quiz.radio[index_radio].value +input[2] +
            quiz.radio[index_radio].id +input[4] + quiz.radio[index_radio].name +" > "+
            quiz.radio[index_radio].value +input[3]+ " ";

            quiz.form.append(radio1);
            quiz.form.append(radio2);
            quiz.form.append(radio3);
            this.div.innerHTML += "<form  > "+
            quiz.form.innerText.toString(); +"</form> </br>";
            index_radio = 0;

            quiz.button[index_radio].removeAttribute("value");   
            quiz.button[index_radio].setAttribute("value","Proxima");


            this.div.innerHTML += input[0] + quiz.button[index_radio].type.toString() +
            input[1] + quiz.button[index_radio].value + input[2] +
            quiz.button[index_radio].id + input[2] + "> "+ input[3];

            this.div.innerHTML += "<span id = 'numero' > "+ quiz.numero+"/5"+" </span>";
            quiz.index_input = 3;
            console.log(this.div);
            break;
            };

            return this.div;
        }

        this.quiz.addTo(m.map);
        
        switch(this.quiz.div.children[quiz.index_input].id.toString()){
            case quiz.button[0].id.toString():
            this.quiz.div.children[quiz.index_input].onclick = function(ev){
                quiz.numero = 1;
                //carregar o novo layort;
               dados.http();
               
            }
            case quiz.button[1].id.toString():
            this.quiz.div.children[quiz.index_input].onclick = function(ev){
                quiz.numero = quiz.numero +1;
                //carregar o novo layort;
               dados.http();
               
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
               dados.quiz.removeFrom(m.map);
                var xhtml= new XMLHttpRequest();
                xhtml.open("GET","./quiz/questões/perguntas.json",true);
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
                xhtml.send();

            }

         }
    }
}

const quiz = new quizjs();
const dados = new Carregardados();
dados.http();