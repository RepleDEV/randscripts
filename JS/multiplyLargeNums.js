/* A sub-optimal solution to multiplying large numbers... nice
i aint gonna comment all of this out it's too "complex"

*/

function multiply(a, b){
  a = a.toString(),b = b.toString();
  var lNum,sNum;
  
  var res = [];
  
  if(a.length > b.length){
    lNum = a.split("");sNum = b.split("");
  } else{
    lNum = b.split("");sNum = a.split("");
  }
  
  while(lNum[0] == "0"){
    lNum.shift();
  }
  while(sNum[0] == "0"){
    sNum.shift();
  }
  
  for(let i = 0;i <= sNum.length - 1;i++){
    res.push("");
  }
  
  var addStack = [];
  
  for(var i = sNum.length - 1;i >= 0;i--){
    var sNum_ld = parseInt(sNum[i]);
    
    for(var j = lNum.length - 1;j >= 0;j--){
      var lNum_ld = parseInt(lNum[j]);
      
      var newAdd = 0, addStackRes = 0;
      
      addStack.forEach(val => addStackRes += val);
      addStack = [];
      newAdd += lNum_ld * sNum_ld + addStackRes;
      var newAddStr = newAdd.toString();
      if (newAddStr.length > 1){
        if (j != 0 ){
          addStack.push(parseInt(newAddStr[0]));
          res[i] += newAddStr[1];
        } else {
          res[i] += newAddStr[1];
          res[i] += newAddStr[0];
        }
      } else {
        res[i] += newAddStr;
      }
    }
  }
  
  var reslen = res.length
  for (let i = 0;i < reslen;i++){
    res[i] = ((res[i].split("")).reverse()).join(""); // explanation: split, reverse, then join back. nice
    for(let j = 0;j < reslen - i - 1;j++){res[i] += "0";}
  }
  
  var result = res[0];
  
  for (let i = 1;i < reslen;i++){result = sumLargeNums(result,res[i]);}
  
  return result == '' || result == undefined ? '0' : result;
}

// Function from sumLargeString.js . just copypastaaaa
function sumLargeNums(a,b) {
  var lNum,sNum; // Variable for the longer and shorter nums.
  
  // This updates the 2 variables
  if (a.length > b.length) { 
    lNum = a.split("");sNum = b.split(""); // If "a" variable is longer, lNum is updated to "a" converted to an array using .split("")
  } else {
    lNum = b.split("");sNum = a.split(""); // Vice Versa
  }
  
  // These remove the zeroes that appear in the front of the strings (if they do appear)
  while(lNum[0] == "0"){
    lNum.shift();
  }
  while(sNum[0] == "0"){
    sNum.shift();
  }
  
  var addStack = []; // Addstack variable. If the sum of the first digits has 2 digits, the first digit will be pushed to here and will sum up the NEXT digit.
  
  var j = sNum.length - 1; // "j" index variable for sNum
  
  for(var i = lNum.length - 1;i >= 0;i--) { // Reverse for loop
    // Variables for the LAST DIGIT of lNum and sNum, then converted to an integer/number
    var lNum_ld = parseInt(lNum[i]);
    var sNum_ld = parseInt(sNum[j]);
    
    var newAdd = 0; // Sum of the current digit
    
    if (addStack.length > 0) { // Checks if there's something in addStack
      let res = 0; // Local variable for res. Later updated for the sum of the numbers in addStack
      addStack.forEach(val => res+=val); // Iterates through addStack, values are added in res
      addStack = []; // Flushes (cleans/deletes) addStack
      newAdd += res; // Update newAdd to the sum of newAdd and res
    }
    
    if (j >= 0) { // If j is greater than or equal to 0
      newAdd += lNum_ld + sNum_ld; // Make newAdd the sum of newAdd lNum_ld and sNum_ld
      j--; // Decrement j
    } else {
      newAdd += lNum_ld; // If not, add lNum_ld to newAdd
    }
    
    let newAddStr = newAdd.toString(); // String of newAdd

    if (newAddStr.length > 1) { // Checks if newAdd has 2 digits by checking its length of the string
      if (i == 0) { // If i is 0 indicating that it has iterated back to the FIRST digit
        lNum[i] = newAddStr[1] // Update the current digit of lNum to the SECOND digit of newAddStr
        lNum.unshift(newAddStr[0]); // Adds a new element to the beginning of the lNum array. Adds the FIRST digit of newAddStr
      } else { // If not?
        addStack.push(parseInt(newAddStr[0]));  // Add the FIRST digit of newAddStr to the addStack array
        lNum[i] = newAddStr[1]; // Updates current digit to the SECOND digit of newAddStr
      }
    } else { // If newAddStr is only 1 digit
      lNum[i] = newAddStr; // Update current digit to it
    }
  }
  
  // These iterate through the lNum array to flatten it
  var res = "";
  lNum.forEach(val => res += val);

  return res; // Return the flattened array
}