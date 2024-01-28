

let container = document.getElementById("container");

let cell = 0;
let inputButton = document.getElementById("getValueBtn");
let rangeInput = document.getElementById("rangeInput")
let rangeOutput = document.getElementById("rangeOutput");
let colorFlag = 0;
let linesToggle = true;
let blackColor = document.getElementById("black-color")
let rainbowColor = document.getElementById("rainbow-color")

let erase = document.getElementById("erase")
let gridLines = document.getElementById("grid-lines")
let clear = document.getElementById("clear")
  



// get the value of how many cells on one line

rangeInput.oninput = function(){
    rangeOutput.innerHTML = this.value;
    cell = this.value;
    container.innerHTML = "";
    restartSketch(cell);

  }


function calculateSquareDim(cellsNumber){
     return (500/cellsNumber) - 2;
    }

function getRandomColor() {
    // Generate a random color code
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + '0'.repeat(6 - randomColor.length) + randomColor;
}



function restartSketch(cell){
    for(let i = 0; i < (cell * cell); i++){

       
        let square = document.createElement('div');
        let size = calculateSquareDim(cell)
        square.style.width = size + "px";
        square.style.height = size + "px";
        square.style.border = "1px solid";
        container.appendChild(square);
        

        square.addEventListener('mouseenter', function(){
            if(colorFlag == 0 || colorFlag ==1)
            square.style.backgroundColor = "black";
            else if (colorFlag == 2)
            square.style.backgroundColor = getRandomColor();
            else if (colorFlag == 3)
            square.style.backgroundColor = "antiquewhite";
        });
         
      
    }

}

function intiate(){
    restartSketch(16);
}

intiate();


clear.addEventListener('click', function(){
   
        container.innerHTML = "";
        restartSketch(cell);
    
      });
    


blackColor.addEventListener('click', function(){
    colorFlag = 1;
 });

rainbowColor.addEventListener('click', function(){
    colorFlag = 2;

});

erase.addEventListener('click', function(){
    colorFlag = 3;
});






