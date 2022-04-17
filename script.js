let colors=[]
var cuadrado=document.querySelectorAll('.square')
var colorDisplay=document.querySelector('#colorDisplay')
var pickedColor
var message=document.querySelector('#message')
var reiniciar=document.querySelector('#reiniciar')
var h1=document.querySelector('h1')
var botones=document.querySelectorAll('.dificultad')
var numCuadrados=6

iniciar()
 function iniciar(){
     reset()
    crearBotones()
 }

function reset(){
    colors=generateRandomColors(numCuadrados)
    pickedColor=pickColor()
    pickColor()
    colorDisplay.textContent=pickedColor
    h1.style.color='white'
    message.textContent=''
    reiniciar.textContent='New Colors'
    document.querySelector('h1').style.backgroundColor='steelblue'
    for(i=0;i<colors.length;i++){
        cuadrado[i].addEventListener('click',function(){
         var clickedColor=this.style.backgroundColor
         if (clickedColor[0]!==pickedColor){
             this.style.backgroundColor='#232323'
             message.textContent='Try Again!'
             }
        if (clickedColor===pickedColor){
        message.textContent='Correct!'
        document.querySelector('h1').style.backgroundColor=pickedColor
        changeColors()
        reiniciar.textContent='Play again?'
        }
        })
     }
     for(i=0;i<cuadrado.length;i++){
         if(colors[i]===undefined){
            cuadrado[i].style.display='none'
         }
         else{
             cuadrado[i].style.backgroundColor=colors[i]
             cuadrado[i].style.display='block'
         }
     }
}


function changeColors(){
    for(i=0;i<colors.length;i++){
        cuadrado[i].style.backgroundColor=pickedColor
    }}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length)
    return colors[random]
}
function randomColor(){
    var r=Math.floor(Math.random()*256)
 var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    return 'rgb('+r+', '+g+', '+b+')'
}

function generateRandomColors(num){
  var arr=[]
  for (var i = 0; i <num ; i++) {
    arr[i]=randomColor()
  }
  return arr
}
reiniciar.addEventListener('click',function(){
    reset()
})

function crearBotones(){ 
    
    for(i=0;i<botones.length;i++){
        botones[i].addEventListener('click',function(){

        botones[0].classList.remove('selected')
        botones[1].classList.remove('selected')
            this.classList.add('selected')
            numCuadrados=(this.textContent==='Easy')? 3:6
            reset()
        }
        )}}