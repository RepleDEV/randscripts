function hexStringToRGB(hexString) {
  var r,g,b,rx = `${hexString[1]}${hexString[2]}`,gx = `${hexString[3]}${hexString[4]}`,bx = `${hexString[5]}${hexString[6]}`;  
  function calcVal(str){
    str = str.toLowerCase();
    var values = "0123456789abcdef";
    return 16 * values.indexOf(str[0]) + values.indexOf(str[1]);
  }
  return r = calcVal(rx),g = calcVal(gx),b = calcVal(bx),{r,g,b};
}

function rgbToHEX(o,r,t){return o=(o=o>255?255:o)<0?0:o,r=(r=r>255?255:r)<0?0:r,t=(t=t>255?255:t)<0?0:t,x="0123456789ABCDEF",`${x[Math.floor(o/16)]+x[o-16*Math.floor(o/16)]}${x[Math.floor(r/16)]+x[r-16*Math.floor(r/16)]}${x[Math.floor(t/16)]+x[t-16*Math.floor(t/16)]}`}
