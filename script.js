

let container = document.getElementById("container");
let cell = 0;
let inputButton = document.getElementById("getValueBtn");
let rangeInput = document.getElementById("rangeInput")
let rangeOutput = document.getElementById("rangeOutput");

  rangeInput.oninput = function(){
    rangeOutput.innerHTML = this.value;
    cell = this.value;
    container.innerHTML = "";
    restartSketch(cell);

  }


// get the value of how many cells on one line
inputButton.addEventListener('click', function(){
    cell = document.getElementById("textInput").value;
    container.innerHTML = "";
    restartSketch(cell);
      

});



function calculateSquareDim(cellsNumber){
     return (500/cellsNumber) - 2;
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
             square.style.backgroundColor = "black";
    
    
        });
        
    
    }

}

function intiate(){
    restartSketch(16);
}

intiate();





// paint the square when hovering using event listener




