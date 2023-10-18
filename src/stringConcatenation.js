function joinStrings(string1, string2){
    if(typeof(string1 |string2) !== String){
   string1.toString()
   string2.toString()}
   return `${string1} ${string2}`
 }
 console.log( joinStrings(true,'false'));
