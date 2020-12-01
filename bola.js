var bola,radio;
var bola2, radio2;
var bola3, radio3;

var posX=(Math.random()*(50-550)+550);
var posY=(Math.random()*(50-550)+550);
var incX=(Math.random()*((-5)-5)+5);
var incY=(Math.random()*((-5)-5)+5);

var posX2=(Math.random()*(50-550)+550);
var posY2=(Math.random()*(50-550)+550);
var incX2=(Math.random()*((-5)-5)+5);
var incY2=(Math.random()*((-5)-5)+5);

var posX3 =(Math.random()*(50-550)+550);
var posY3 =(Math.random()*(50-550)+550);
var incX3 =(Math.random()*((-5)-5)+5);;
var incY3 =(Math.random()*((-5)-5)+5);;

window.onload = () =>
    {
    
    bola= document.getElementById("bola");
    radio= parseInt(bola.getAttribute("r"));
    bola2= document.getElementById("bola2");
    radio2= parseInt(bola2.getAttribute("r"));
    bola3= document.getElementById("bola3");
    radio3= parseInt(bola3.getAttribute("r"))

    setInterval(anima, 10);
}



function anima(){
    let bola= document.getElementById("bola");
    bola.setAttribute("cx",posX);
    bola.setAttribute("cy",posY);
    posX+=incX;
    posY+=incY;
    
    if(posX+radio >= 700 || posX-radio<=0){
        incX*=-1;
    }
    if(posY+radio >= 700 || posY-radio<=0){
        incY*=-1;
    }

    
    let bola2 = document.getElementById("bola2");
    bola2.setAttribute("cx", posX2); 
    bola2.setAttribute("cy",posY2);
    posX2+=incX2;
    posY2+=incY2;
    
    if(posX2+radio2 >= 700 || posX2-radio2<=0){
        incX2*=-1;
    }
    if(posY2+radio2 >= 700 || posY2-radio2<=0){
        incY2*=-1;
    }



    let bola3 = document.getElementById("bola3");
    bola3.setAttribute("cx", posX3); 
    bola3.setAttribute("cy",posY3);
    posX3+=incX3;
    posY3+=incY3;
    
    if(posX3+radio3 >= 700 || posX3-radio3<=0){
        incX3*=-1;
    }
    if(posY3+radio3 >= 700 || posY3-radio3<=0){
        incY3*=-1;
    }
}

function distancia(bola1,bola2){
    var a= e;
}
    


// crear circulos   esto en el onload


/*/
for(i=1; i<10; 1++){

let circ= document.createElementNS("http://www.w3.org/2000/svg","circle");
circ.setAttribute(null,"cx", 20+(i*3));
circ.setAttribute(null,"cy", 20+(i*3));
circ.setAttribute(null,"r", 2*i);
circ.setAttribute(null,"fill", "red");

document.getElementsByTagName("svg")[0].appendChild(circ);
}

setInterval

bolas= document.get
/*/


// crear clase

/*/
    class bola{
        costructor(radio, color, x,y, velx, vely){
            this.r=radio;
            this.color=color;
            this.x=x;
            this.y=y;
            this.velx=velx;
            this.vely=vely;
        }

        let circ= document.createElementNS("http://www.w3.org/2000/svg","circle");
        circ.setAttribute(null,"cx", 20+(i*3));
        circ.setAttribute(null,"cy", 20+(i*3));
        circ.setAttribute(null,"r", 2*i);
        circ.setAttribute(null,"fill", "red");

        document.getElementsByTagName("svg")[0].appendChild(circ);
    }
    /*/