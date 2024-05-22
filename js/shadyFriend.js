var input = document.getElementById('colourInput')

// This function gets the input text and sends it to the setBAseColour() function
input.addEventListener('input',(e)=>{
    const colour = e.target.value;
    console.log(colour);
    setBaseColour(colour);
})


// This function recieves an parameter and sets the background of the baseColour square
function setBaseColour(colour){
    var baseColour = document.getElementById('baseColour');
    
    
    //add a hex code check
    if(colour!=''){
        if(colour[0]=='#'){
            baseColour.style.backgroundColor = colour;
        }
        else{
            colour = '#' + colour;
            console.log(colour)
            baseColour.style.backgroundColor = colour
        }
        
    }
    else{
        baseColour.style.backgroundColor = 'hex(#f2e6f)';
    }
}
    
    

