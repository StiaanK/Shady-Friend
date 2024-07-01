export function hexToRGB(hex){
    let alpha = false,
      h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return [parseInt(h >>> (alpha ? 24 : 16)), parseInt((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)), parseInt((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0))]
};

export function hexToHSB(hex){
    var rgb = hexToRGB(hex);
    return rgbToHSB(rgb[0],rgb[1],rgb[2])
}

export function rgbToHSB(r, g, b){
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b),
      n = v - Math.min(r, g, b);
    const h =
      n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    return [parseInt(60 * (h < 0 ? h + 6 : h)), parseInt(v && (n / v) * 100), parseInt(v * 100)];
};

export function hsbToRgb(h, s, b){
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [parseInt(255 * f(5)), parseInt(255 * f(3)), parseInt(255 * f(1))];
  };
  
export function rgbToHex(r, g, b){
    return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
  }

export function hsbToHex(h, s, b){
    var rgb = hsbToRgb(h, s, b)
    return rgbToHex(rgb[0],rgb[1],rgb[2])
}