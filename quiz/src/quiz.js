class perguntar{

    layort(){
  
      this.div = document.createElement("div");
      this.div.textContent = "Teste de Conhecimento \n ";
      this.div.align = "center";
      this.questões = document.createElement("h4");
  
      this.questões.textContent = "A pesquisa ";
      this.nome = "quiz-peste-negra";
      this.radio =[
      document.createElement("input"),
      document.createElement("input"),
      document.createElement("input")
      ]
      this.numero = 0;
      this.radio[0].type = "radio";
      this.radio[1].type = "radio";
      this.radio[2].type = "radio";
      this.radio[0].id = "quiz"+(this.numero++);
      this.radio[1].id = "quiz"+ (this.numero++);
      this.radio[2].id = "quiz" + (this.numero++);
       document.body.appendChild(this.div);
       document.body.appendChild(this.questões);
       document.body.appendChild(this.radio[0]);
       document.body.appendChild(this.radio[1]);
       document.body.appendChild(this.radio[2]);
       
    }
    pergunta()
    {
     
         if(window.ActiveXObject){
            var xhtml= new XMLHttpRequest();
            xhtml.open("GET","../Apresentar-a-Peste-negra-na-europa/quiz/questões/perguntas.json",true);
            xhtml.onload = function(){
                var users = JSON.parse(xhtml.responseText);
                if(xhtml.readyState == 4  && xhtml.status == "200"){
                    console.log(users);
                }
            }
            xhtml.send(null);
         }
         else{
             fetch("../Apresentar-a-Peste-negra-na-europa/quiz/questões/perguntas.json",{
                 method:"GET",
                 referrerPolicy:"origin-when-cross-origin"
             }).then(p=>{
                if(p.status == "200"){
                    p.json().then(q=>{
                        var string = JSON.parse(q);
                        console.log(string);
                    })
                }
             })
         }
    }
  }
  var questões = new perguntar();
  questões.layort();