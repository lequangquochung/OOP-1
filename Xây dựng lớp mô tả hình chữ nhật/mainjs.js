var Rectangle = function (x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    

    this.getwidth = function(){
        return width;
    }

    this.getheight = function(){
        return height;
    }

    this.getArea = function() {
    return this.width*this.height;
    }
    this.getPeri = function(){
        return (this.width + this.height)*2;
    }    

    this.draw = function(ctx){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x,this.y,this.width,this.height);

    }

}
function createrec(){
    var rectangle = new Rectangle(0,0,40,10);
    console.log (rectangle);

    var width = rectangle.getwidth(); 
    var height = rectangle.getheight(); 
    // document.getElementById('print1').innerHTML = 'Chiều dài ' + height +'<br> Chiều rộng ' + width;
   

    var area = rectangle.getArea();
    var peri = rectangle.getPeri();
    // document.getElementById('print').innerHTML = 'Diện tích = ' + area +' <br> Chu vi =' + peri;
   
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    rectangle.draw(ctx);

    
}

