async function QUIZ(){
    
        var verificar = await caches.has("quiz");
        this.add  = null;
        if(verificar == false){
            this.add = await caches.open("quiz");
          //  add.add("./quiz/src/quiz.js");
        
          this.add.add("./css/estilo.css");
          
    }
   else{
       
       await caches.match("./css/estilo.css").then(r=>{
          
       })
     
   }
    
    
}
QUIZ();
