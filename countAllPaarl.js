module.exports  = function(numbers){
  
     var reg= numbers.split(", ");
     var reg2=[];
     for(var i=0; i<reg.length; i++ ){
     if(reg[i].startsWith("CJ")){
     
     reg2.push(reg[i]);
     }
     } 
     return reg2.length;
   }