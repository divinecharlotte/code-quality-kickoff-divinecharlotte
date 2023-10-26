function dec2bin(num) {
  return (num >>> 0).toString(2);
}
console.log(dec2bin(3));

const fibonnaciSequence = (num)=>{
  let fibonacci = [0,1];
  let i = 2;
  let nextFabonnacci = fibonacci[i-1] + fibonacci[i-2];
  while(nextFabonnacci < num){
    fibonacci[i] = nextFabonnacci;
    i++;
    nextFabonnacci = fibonacci[i-1] + fibonacci[i-2];
  }
  return fibonacci
}
console.log(fibonnaciSequence(5));