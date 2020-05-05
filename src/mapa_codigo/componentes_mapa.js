// dados primarios
class componentes_mapa {
   constructor(){
        this.referencia;
        this.eixo_principal_terra;
        this.linha_imaginada;
   }
     get ANO (){
        return this.ANO;
     }
     set ANO(data){
        this.ANO = data;
     }
     get Local(){
         return this.referencia;
     }
     set Local(referencia){
         this.referencia = referencia
     }
     get latitude(){
        return this.eixo_principal_terra;
     }
     set latitude(numero){
        this.eixo_principal_terra = numero;
     }
     get longitude(){
        return  this.linha_imaginada;;
     }
     set longitude(numero){
      this.linha_imaginada = numero;
     }
    coordenadas(lant,long){
       try{
           
            // constante 
            var radios = 5;
            var metade;
            // verifica local
            var localização = e.Local == "porto de Marselha"? "porto de Marselha" : e.Local;
            if(localização == "porto de Marselha"){
            // porto de Marselha
           this.circulo  = L.circle([lant,long],radios,{
                        color:"red",
                        fillColor: "#dc143c",
                        fillOpacity: 0.5,
                     }).addTo(m.map);
                     console.log(this.circulo);
            e.eixo_principal_terra  = lant;
            e.linha_imaginada = long;
            m.estado = false;
             e.referencia = "aumentar circulo";
            s.mudar_voz([m.estado]);
            }
            // aumenta a contaminazação no porto de Marselha
            else if(localização =="aumentar circulo" ){
               metade =  parseInt(2406/50)/100;
               while(radios <= metade)
               { 
                  if(radios != 630) radios = radios + 100;
                  else radios = radios + 43;
                 this.circulo.setRadius(radios).addTo(m.map);    
               }
            m.estado = false;
            e.referencia = "norte da Itália";
            //s.mudar_voz([m.estado]); 
            
            }
         
        else if(localização == "norte da Itália"){
            // norte da Itália
         /*resultado da distancia entre turm na itaiia com a cidade de Marselha na frança,
         que é  372.1 km.
         */
         // Conversão de km/h em m/s resultado em 1033 m/s.
         metade = parseInt(3721 /3.6 );
         radios = radios - 2;
         while(radios <= metade){
             // somando de 20 em 20
            radios = radios + 20;
            this.circulo.setRadius(radios).addTo(m.map);
         }
         m.estado = false;
         s.mudar_voz([m.estado]); 
         e.referencia = "toda a europa";
         }
         /*
         else {
         // toda o continente europeu
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
         circulo.setRadius(radios).addTo(m.map);
         }
         m.estado = false;
         s.mudar_voz([m.estado]); 
         
         }
         /* fim da historia*/
       }catch(ev){
          console.log(ev);
       }
      
    }
 theads(){
       try{
            let threads_mapa = []
            var caminho_mapa = "src/mapa_codigo/mapa.js";
            if(e.Local == undefined){
               e.referencia  = "porto de Marselha";
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.Local]);
                  threads_mapa[0].onmessage = event=>{
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
               
            }
           
            else if(e.Local == "aumentar circulo"){
                threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.Local,e.latitude,
                  e.longitude]);
               threads_mapa[0].onmessage = event=>{
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
            }
            else if(e.Local == "norte da Itália"){
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.referencia,e.latitude,
                  e.longitude]);
               threads_mapa[0].onmessage = event=>{
                  e.coordenadas(event.data.dados[0],event.data.dados[1]);
                  threads_mapa.pop();
               }
         } 
         else if(e.Local =="toda a europa"){
            threads_mapa.push(new Worker(caminho_mapa));
            threads_mapa[0].postMessage([ e.Local,e.latitude,
              e.longitude]);
               threads_mapa[0].onmessage = event=>{
                  e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
         }   
              
         console.log(e.Local);
       }catch(ev){
         if(v.IA == undefined)  console.error(ev);
         else  v.IA.cancel();
       }
    }
}
const e = new componentes_mapa();
window.onbeforeunload = function(){
   if(v.IA == undefined) console.log("sintese de fala não criada");
   else v.IA.cancel();
}