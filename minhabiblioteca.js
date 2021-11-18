function isTouching(retangulo1, retangulo2){

    if(retangulo1.x - retangulo2.x < retangulo2.width/2 + retangulo1.width/2
      && retangulo2.x - retangulo1.x < retangulo2.width/2 + retangulo1.width/2
      && retangulo1.y - retangulo2.y < retangulo2.height/2 + retangulo1.height/2
      && retangulo2.y - retangulo1.y < retangulo2.height/2 + retangulo1.height/2){
        return true;
    }
    else{
      
      return false;
    }
  
  }
  
  function bounceOff(objeto1,objeto2) {
    if(objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2 &&
          objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2){
  
            objeto1.velocityX = objeto1.velocityX * (-1);
            objeto2.velocityX = objeto2.velocityX * (-1);
          }
          if(objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2 &&
            objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2)  {
              objeto1.velocityY = objeto1.velocityY * (-1);
              objeto2.velocityY = objeto2.velocityY * (-1);
            } 
  }