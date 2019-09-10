module.exports =function(total){

    var g= total.split(", ");
      var k= [];
      var n= [];
    
      for(var i=0; i<g.length; i++){
      
      if(g[i].startsWith("s") || g[i].startsWith("S")){
      
      k.push(g[i]); 
        
      }  if (g[i].startsWith("c") || g[i].startsWith("C")){
      
      n.push(g[i]);
      }
      
      }
      var m = k.length;
      var o = n.length;
      
      var totalSms = m * 0.65;
      var totalCall = o * 2.75;
     
      var total = totalSms + totalCall;
      return("R" + total.toFixed(2));
      
    }
    