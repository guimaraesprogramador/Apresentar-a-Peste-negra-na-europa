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
     get latitude(){
        return this.lantitude;
     }
     set latitude(numero){
        this.lantitude = numero;
     }
     get longitude(){
        return this.longitude;
     }
     set longitude(numero){
        this.longitude = numero;
     }
    constructor(){
        
    }
    coordenadas(lant,long){
       // porto de Marselha
       let porto_Marselha= [lant,long];
       // verifica a lantitude e longitude 
       var radios = 0;
       var metade = null;
       let circulos_localizados = [];
       var circulo = null;
       var localização = this.Local == "porto de Marselha"? "porto de Marselha" : this.Local;
       if(localização == this.Local){
         metade =  Number.parseInt(240.6 /2);
         while(radios <= metade)
         {
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 5 :0;
            circulo = L.circle(porto_Marselha).setRadius(radios).addTo(m.map);
          }
       }
       else if(localização == "norte da Itália"){
         let norte = [lant,long];
        circulo = L.circle([norte[0],norte[1]],{
         color:"red",
         fillColor: "#dc143c",
       fillOpacity: 0.5,
       radius: 5
       }).addTo(this.map);
         radios = circulo.getRadius();
         metade = Math.trunc(301338 /2 );
         while(radios <= metade){
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 10 :radios;
            circulo.setRadius(radios).addTo(m.map);
         }
         circulos_localizados.push(circulo);
         circulo = null;
       }
      else {
        var area_europa = 10180000;
        circulo  = circulos_localizados[0];
        while(radios != area_europa)
        {
         if(radios == 5000000|| radios == 10090000){
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 90000 :radios;
         }
         else{
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 1000000 :radios;
         }
        circulo.setRadius(radios).addTo(this.map);
        }
      }
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
                     var resposta =  event.data.resposta == sequencia_primeira[0] +" completo"
                     ?false : true;
                       sequencia_primeira.pop();
                       let sequencia_segunda = ["norte da Itália"];
                       sequencia_primeira = sequencia_segunda.slice();
                       threads_mapa[0].terminate();
                       threads_mapa[0] = null;
                       threads_mapa.pop();
                       m.estado = resposta;
                       sequencia_segunda.pop();
                       s.mudar_voz([m.estado]);
               }

               })
               
            }
            else if(sequencia_primeira[0] == "norte da Itália"){
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ sequencia_primeira[0]]);
               return new Promise((resolve,reject)=>{
               threads_mapa[0].onmessage = event=>{
                  var resposta =  event.data.resposta == sequencia_primeira[0] +" completo"
                     ?false : true;
                     sequencia_primeira.pop();
                     let sequencia_segunda = ["toda a europa"];
                     sequencia_primeira = sequencia_segunda.slice();
                     threads_mapa[0].terminate();
                     threads_mapa[0] = null;
                     threads_mapa.pop();
                     m.estado = resposta;
                     sequencia_segunda.pop();
                     s.mudar_voz([m.estado]); 
               }
            });
         } 
         else if(sequencia_primeira[0] =="toda a europa"){
            threads_mapa.push(new Worker(caminho_mapa));
            threads_mapa[0].postMessage([ sequencia_primeira[0]]);
            return new Promise((resolve,reject)=>{
               threads_mapa[0].onmessage = event=>{
                  var resposta =  event.data.resposta == sequencia_primeira[0] +" completo"
                     ?false : true;
                     threads_mapa[0].terminate();
                     threads_mapa[0] = null;
                     threads_mapa.pop();
                     m.estado = resposta;
                     s.mudar_voz([m.estado]);
               }
            });
         }   
              
         
       }catch(ev){
         console.log(ev);
       }
    }
}
const e = new componentes_mapa();