var input = document.getElementById('colourInput')

// This function gets the input text and sends it to the setBAseColour() function
input.addEventListener('input',(e)=>{
    var colour = e.target.value;
    const baseColour =document.getElementById('baseColour')

    if(colour!=''){
        if(colour[0]=='#'){
            setBaseColour(colour);
            setLightOne(colour)
        }
        else{
            colour = '#' + colour;
            setBaseColour(colour);
            setLightOne(colour)
        } 
    }
    else{
        baseColour.style.backgroundColor = 'hex(#f2e6f)';
    }
})

// This function recieves an parameter and sets the background of the baseColour square
function setBaseColour(colour){
    var baseColour = document.getElementById('baseColour');
    baseColour.style.backgroundColor = colour    
}
    
function setLightOne(colour){
    var hsb = hexToHSB(colour)
    var h = hsb[0]
    var s = hsb[1]
    var b = hsb[2]
    
    var yHue = 60
    
    //console.log("hsb: "+ h + " "+ s+" "+b)
}  

const hexToRGB = hex => {
    let alpha = false,
      h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return [parseInt(h >>> (alpha ? 24 : 16)), parseInt((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)), parseInt((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0))]
};

const hexToHSB = (hex) =>{
    var rgb = hexToRGB(hex);
    return rgbToHSB(rgb[0],rgb[1],rgb[2])
}

const rgbToHSB = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b),
      n = v - Math.min(r, g, b);
    const h =
      n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    return [parseInt(60 * (h < 0 ? h + 6 : h)), parseInt(v && (n / v) * 100), parseInt(v * 100)];
};

const hsbToRgb = (h, s, b) => {
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [parseInt(255 * f(5)), parseInt(255 * f(3)), parseInt(255 * f(1))];
  };
  


