class HomeSprite {

    homeSpriteDir = 'left';
    homeSpriteXPos = cnv.width / 2;
    
    updateSprite(){
        if(this.homeSpriteDir === 'left'){
          this.homeSpriteXPos -= 1;
          if(this.homeSpriteXPos <= 0){
            this.homeSpriteDir = 'right';
          }
        }else if (this.homeSpriteDir === 'right'){
            this.homeSpriteXPos += 1;
            if(this.homeSpriteXPos >= cnv.width - 16){
                this.homeSpriteDir = 'left'
            }
        }
      }
      
    showSprite() {
        push();
        image(sprite1, this.homeSpriteXPos, cnv.height - 32, 16, 32);
        pop();
      }



}