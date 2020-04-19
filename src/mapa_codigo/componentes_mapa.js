// dados primarios
class componentes_mapa {
     get ANO (){
        return this.ANO;
     }
     set ANO(data){
        this.ANO = data;
     }
     get Local(){
         return this.Local;
     }
     set Local(referencia){
         this.Local = referencia;
     }
     get numero(){
        return this.numero;
     }
     set lantitude(numero){
        this.lantitude = numero;
     }
     set longitude(numero){
        this.longitude = numero;
     }
    constructor(){
        
    }
    coordenadas(lant,long){
       lant = this.lantitude;
       long = this.longitude;
    }
 theads(){
       try{
            let sequencia_primeira =[];
            let threads_mapa = []
            var caminho_mapa = "src/mapa_codigo/mapa.js";
            if(sequencia.length == 0){
               sequencia_primeira = ["abertura"];
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ sequencia_primeira[0]]);
               return new Promise((resolve,reject)=>{
                  threads_mapa[0].onmessage = event=>{
                     var resposta =  event.data.resposta;
                      if(resposta == "primeira_parte_compelta"){
                       sequencia_primeira.shift();
                       let sequencia_segunda = ["parte_1","parte_2","parte_3"];
                       sequencia_primeira = sequencia_segunda.slice();
                       threads_mapa.pop();
                       threads_mapa = null;
                       s.mudar_voz([false]); 
                      }
               }
               })
               
            }
            else if(sequencia_primeira[0] == "parte_1"){
               console.log(sequencia_primeira.toString());
               // threads_mapa.push(new Worker(caminho_mapa));
               // threads_mapa.push(new Worker(caminho_mapa));
               // threads_mapa.push(new Worker(caminho_mapa));
               // threads_mapa[0]
            }      
         
       }catch(ev){
         console.log(ev);
       }
    }
}
const e = new componentes_mapa();