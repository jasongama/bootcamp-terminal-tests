module.exports =function(speed){
    console.log(speed);
    if(speed.startsWith("CY")){
    
    return "Bellville";
    }else if (speed.startsWith("CJ")){
    
    return "Paarl";
    }else if (speed.startsWith("CA")){
    
    return "Cape Town";
    
    }else{
      
    
    return "Some other place!";
    }
    
    }