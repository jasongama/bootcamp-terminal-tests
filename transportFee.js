module.exports= function(payment){

    if (payment.startsWith("m")){
      
      return "R20";
    
    }else if(payment.startsWith("a")){
    
    return "R10";
    }else{
    
    return "free";
    }
    
    }