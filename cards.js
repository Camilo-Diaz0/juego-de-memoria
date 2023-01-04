let a, b, c = 15, carta = 0, fail = 0;
document.onmousemove = function() {return false}
const subirImg = (num) => {
    const addCards = document.querySelector(".contenedor")
    switch(num){
        case "card1":
            addCards.innerHTML += `<div><img src="../fotos.S/spiderman.jpg" class="mostrando ${num}"</div>`;
            break;
        case "card2":
            addCards.innerHTML += `<div><img src="../fotos.S/Zatana.jpg" class="mostrando ${num}"></div>`;
            break;   
        case "card3":
            addCards.innerHTML += `<div><img src="../fotos.S/ironman.jpg" class="mostrando ${num}"></div>`;
            break;   
        case "card4":
            addCards.innerHTML += `<div><img src="../fotos.S/capitan-america.jpg" class="mostrando ${num}"></div>`;
            break;
        case "card5":
            addCards.innerHTML += `<div><img src="../fotos.S/Wonder.jpg" class="mostrando ${num}"></div>`;
            break;
        case "card6":
            addCards.innerHTML += `<div><img src="../fotos.S/superman.jpg" class="mostrando ${num}"></div></div>`;
            break;
        case "card7":
            addCards.innerHTML += `<div><img src="../fotos.S/batman.jpg" class="mostrando ${num}"></div>`;
            break;
        case "card8":
            addCards.innerHTML += `<div><img src="../fotos.S/green.jpg" class="mostrando ${num}"></div>`;
            break;                
        }                                   

}


const cal = () =>{
    let numeros = Math.random()*c;
    numeros = Math.round(numeros);
    c--;
    return numeros;
}


let cards = ["card1","card2","card3","card4","card5","card6","card7","card8",
"card1","card2","card3","card4","card5","card6","card7","card8"];
for(let i = 0; i<16;i++){
    b = cal(); 
    a = cards[b];
    subirImg(a);
    cards.splice(b,1);
}


    
 const imagenes = document.querySelectorAll(".mostrando");
 
 let icarta;
 imagenes.forEach(imagen =>{

    imagen.addEventListener("click",()=>{
        if(carta != null){
        carta++
        imagen.style.animation="aparecer 1.3s forwards";       
            if(carta === 1 || carta%2 != 0){
                imagen.classList.replace("mostrando","mostrandont")
                icarta = imagen;
                
            }else if(carta === 2){
                carta = null;
                
                if(imagen.getAttribute("src") == icarta.getAttribute("src")){
                    console.log("si son iguales");
                    setTimeout(() => {
                        imagen.style.animation = "acertaste 1.2s forwards";
                        icarta.style.animation = "acertaste 1.2s forwards";
                        imagen.classList.replace("mostrando","mostrandont")
                        carta = 2;    
                    }, 1400);
                    
                }else {
                    console.log("no son iguales");
                    setTimeout(() => {
                        imagen.style.animation ="desaparecer 1.3s forwards";
                        icarta.style.animation ="desaparecer 1.3s forwards";
                        setTimeout(() => {
                            carta = 0;
                            icarta.classList.replace("mostrandont","mostrando");
                        },1400);
                    },1800);    
                }
            }else if(carta%2 == 0 && carta != 2){
                let aux = carta;
                carta = null;
                quehago(icarta,imagen,aux);
            }
        }
            
    })
    
})
const quehago = (ic,im,aux) => {
    fail++;
    if(im.getAttribute("src") == ic.getAttribute("src")){
        console.log("si son iguales");
        setTimeout(() => {
            fail = 0;
            carta = aux;
            im.style.animation = "acertaste 1.2s forwards";
            ic.style.animation = "acertaste 1.2s forwards";
            im.classList.replace("mostrando","mostrandont")
        }, 1400);
        
    }else if(fail<3){
        console.log("no son iguales");
        setTimeout(() => {
            im.style.animation ="desaparecer 1.3s forwards";
            carta = aux-1;
            
        },1800);
    }else{
        imagenes.forEach(imagen => {
            if(imagen.style.animation == "1.3s ease 0s 1 normal forwards running aparecer" || imagen.style.animation == "1.2s ease 0s 1 normal forwards running acertaste"){
                setTimeout(() => {
                    imagen.style.animation = "desaparecer 1.3s forwards";
                    imagen.classList.replace("mostrandont","mostrando")
                },1800);    
            }
            
        })
        
        carta = 0;
        fail = 0;
    }    
}
