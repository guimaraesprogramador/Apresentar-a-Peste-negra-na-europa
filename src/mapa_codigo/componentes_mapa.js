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
            if(localização == e.Local){
            // porto de Marselha
           this.circulo  = L.circle([lant,long],radios,{
                        color:"red",
                        fillColor: "#dc143c",
                        fillOpacity: 0.5,
                     }).addTo(m.map);
            e.eixo_principal_terra  = lant;
            e.linha_imaginada = long;
            m.estado = false;
             e.referencia = "aumentar circulo";
            // s.mudar_voz([m.estado]);
            }
            // aumenta a contaminazação no porto de Marselha
            else if(localização =="aumentar circulo" ){
            radios =  radios + 163;
            metade =  parseInt(2406/3.6);
               while(radios != metade)
               {   
                 this.circulo.setRadius(radios).addTo(m.map);
                   // somando em 100 em 100
                     radios = e.longitude == long && e.lantitude == lant
                     ? radios = radios + 100:0;
               }
            e.referencia = localização;
            m.estado = false;
            s.mudar_voz([m.estado]); 
            }
         
        else if(localização == "norte da Itália"){
            // norte da Itália
         /*resultado da distancia entre turm na itaiia com a cidade de Marselha na frança,
         que é  372.1 km.
         */
         // Conversão de km/h em m/s resultado em 1033 m/s.
        var resultado = parseInt(3721 /3.6 );
         radios = radios - 2;
         while(radios !=  resultado){
             // somando de 20 em 20
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 20 :radios;
            this.circulo.setRadius(radios).addTo(m.map);
         }
         m.estado = false;
         s.mudar_voz([m.estado]); 
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
               e.referencia  = "ponto inicial";
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.referencia]);
                  threads_mapa[0].onmessage = event=>{
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
               
            }
           
            else if(e.Local == "aumentar circulo"){
                threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.referencia,e.latitude,
                  e.longitude]);
               threads_mapa[0].onmessage = event=>{
                     e.referencia = "norte da Itália";
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
            }
            else if(e.Local == "norte da Itália"){
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.referencia,e.latitude,
                  e.longitude]);
               threads_mapa[0].onmessage = event=>{
                  e.referencia = "toda a europa";
                  e.coordenadas(event.data.dados[0],event.data.dados[1]);
                  threads_mapa.pop();
               }
         } 
         else if(e.Local =="toda a europa"){
            threads_mapa.push(new Worker(caminho_mapa));
            threads_mapa[0].postMessage([ e.referencia,e.latitude,
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