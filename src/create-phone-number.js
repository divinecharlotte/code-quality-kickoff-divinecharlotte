export function createPhoneNumber(numbers){
    let a=[]
    let b=[]
    let c=[];
    for(let index=0;index<3;index++){
      a.push(numbers[index])
     
      
    }
     let p1=a.join('')
    for(let index=3;index<6;index++){
       b.push(numbers[index])
 
    }
    let p2= b.join('')
      for(let index=6;index<numbers.length;index++){
       c.push(numbers[index])
    }
    let p3= c.join('')
    return `(${p1}) ${p2}-${p3}`
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))