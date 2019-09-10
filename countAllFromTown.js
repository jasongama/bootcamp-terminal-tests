module.exports=function(numbers){
    console.log(numbers)
      var reg=numbers.split(",")
      var reg2=[];
      for(var i= 0; i< reg.length; i++){
      
       if(reg[i].startsWith("CL")){
       
       reg2.push(reg[i])
       
       }
      }
      return reg2.length;
    }