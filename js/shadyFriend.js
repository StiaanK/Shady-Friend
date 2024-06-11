var input = document.getElementById('colourInput')
let hInc = 5
let sInc = 10
let bInc = 10
let inc = 1
/*
let lightTwo = document.getElementById('lightTwo')

lightTwo.addEventListener('click',()=>{
    lightTwo.style.transform = "scale(3)"
    console.log('tye')
})
*/


// This function gets the input text and sends it to the setBAseColour() function
input.addEventListener('input',(e)=>{
    var colour = e.target.value;
    const baseColour =document.getElementById('baseColour')

    if(colour!=''){
        if(colour[0]=='#'){
            setBaseColour(colour);
            setLightOne(colour);
            setLightTwo(colour);
            setDarkOne(colour);
            setDarkTwo(colour);
        }
        else{
            colour = '#' + colour;
            setBaseColour(colour);
            setLightOne(colour);
            setLightTwo(colour);
            setDarkOne(colour);
            setDarkTwo(colour);
        } 
    }
    else{
        baseColour.style.backgroundColor = 'hex(#f2e6f)';
    }
})

// This function recieves an parameter and sets the background of the baseColour square
function setBaseColour(colour){
    var baseColour = document.getElementById('baseColour');
    var txt = document.getElementById('baseTxt')
    baseColour.style.backgroundColor = colour   
    txt.textContent = colour
}
    
function setLightOne(colour){
    var hsb = hexToHSB(colour)
    var h = hsb[0]
    var s = hsb[1]
    var b = hsb[2]
    const yHue = 60
    var lightOne = document.getElementById("lightOne")
    var txt = document.getElementById("lightOneTxt")
    let hex =""

    //check how close the hue is to yellow
    
    // Calculate the difference in both directions
    let clockwiseDiff = (yHue- h + 360) % 360;
    let counterClockwiseDiff = (h - yHue + 360) % 360;
    
    if (clockwiseDiff <= counterClockwiseDiff) {
        h = h + inc*hInc
    } else {
        h = h - inc*hInc
    }
   
    //decreasing the saturation
    s = s - inc*sInc

    //increasing brightness
    b = b + inc*bInc
    
    //checks to enusre colours exists
    h = h % 360;
    if (h < 0) {
        h += 360;
    }
    if(s<=0){
        s=0
    }
    if(b<=0){
        b=0
    }

    if(s>=100){
        s=100
    }
    if(b>=100){
        b=100
    }

    //getting hex code
    hex = "#" + hsbToHex(h,s,b)
    //console.log("l1 hsb: "+ h + " "+ s+" "+b)
    //console.log(" hex: "+hex)
    
    lightOne.style.backgroundColor= hex
    txt.textContent = hex
}  

const setLightTwo = colour =>{
    var hsb = hexToHSB(colour)
    var h = hsb[0]
    var s = hsb[1]
    var b = hsb[2]
    const yHue = 60
    var txt = document.getElementById("lightTwoTxt")
    let hex =""

    //check how close the hue is to yellow
    let clockwiseDiff = (yHue- h + 360) % 360;
    let counterClockwiseDiff = (h - yHue + 360) % 360;
    
    if (clockwiseDiff <= counterClockwiseDiff) {
        h = h + inc*(hInc*2)
    } else {
        h = h - inc*(hInc*2)
    }
    
    //decreasing the saturation
    s = s - inc*(sInc*2)

    //increasing brightness
    b = b + inc*(bInc*2)
    
    //checks to enusre colours exists
    h = h % 360;
    if (h < 0) {
        h += 360;
    }
    if(s<=0){
        s=0
    }
    if(b<=0){
        b=0
    }

    if(s>=100){
        s=100
    }
    if(b>=100){
        b=100
    }

    //getting hex code
    hex = "#" + hsbToHex(h,s,b)
    //console.log("l2 hsb: "+ h + " "+ s+" "+b)
    //console.log(" hex: "+hex)
    
    lightTwo.style.backgroundColor= hex
    txt.textContent = hex
}

const setDarkOne = colour =>{
    var hsb = hexToHSB(colour)
    var h = hsb[0]
    var s = hsb[1]
    var b = hsb[2]
    const pHue = 300
    var darkOne = document.getElementById("darkOne")
    var txt = document.getElementById("darkOneTxt")
    let hex =""

    //check how close the hue is to yellow
    let clockwiseDiff = (pHue- h + 360) % 360;
    let counterClockwiseDiff = (h - pHue + 360) % 360;
    
    if (clockwiseDiff <= counterClockwiseDiff) {
        h = h + inc*hInc
    } else {
        h = h - inc*hInc
    }
    
    //increasing the saturation
    s = s + inc*sInc

    //decreasing brightness
    b = b - inc*bInc
    
    //checks to enusre colours exists
    h = h % 360;
    if (h < 0) {
        h += 360;
    }
    if(s<=0){
        s=0
    }
    if(b<=0){
        b=0
    }

    if(s>=100){
        s=100
    }
    if(b>=100){
        b=100
    }

    //getting hex code
    hex = "#" + hsbToHex(h,s,b)
    //console.log("b1 hsb: "+ h + " "+ s+" "+b)
    //console.log(" hex: "+hex)
    
    darkOne.style.backgroundColor = hex
    txt.textContent = hex
}

const setDarkTwo = colour =>{
    var hsb = hexToHSB(colour)
    var h = hsb[0]
    var s = hsb[1]
    var b = hsb[2]
    const pHue = 300
    var darkTwo = document.getElementById("darkTwo")
    var txt = document.getElementById("darkTwoTxt")
    let hex =""

    //check how close the hue is to yellow
    let clockwiseDiff = (pHue- h + 360) % 360;
    let counterClockwiseDiff = (h - pHue + 360) % 360;
    
    if (clockwiseDiff <= counterClockwiseDiff) {
        h = h + inc*(hInc*2)
    } else {
        h = h - inc*(hInc*2)
    }
    
    
    //increasing the saturation
    s = s + inc*(sInc*2)

    //decreasing brightness
    b = b - inc*(bInc*2)
    
    //checks to enusre colours exists
    h = h % 360;
    if (h < 0) {
        h += 360;
    }
    if(s<=0){
        s=0
    }
    if(b<=0){
        b=0
    }

    if(s>=100){
        s=100
    }
    if(b>=100){
        b=100
    }
    //getting hex code
    hex = "#" + hsbToHex(h,s,b)
    //console.log("b2 hsb: "+ h + " "+ s+" "+b)
    //console.log(" hex: "+hex)
    
    darkTwo.style.backgroundColor=hex
    txt.textContent=hex
}

//make it's own script

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
  
const rgbToHex = (r, g, b) =>{
    return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
  }

const hsbToHex = (h, s, b) =>{
    var rgb = hsbToRgb(h, s, b)
    return rgbToHex(rgb[0],rgb[1],rgb[2])
}