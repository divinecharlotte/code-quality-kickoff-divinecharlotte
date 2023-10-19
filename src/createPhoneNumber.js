export function createPhoneNumber(numbers: number[]): string {
    let a=[]
    let b=[]
    let c=[];
    for(let i=0;i<3;i++){
      a.push(numbers[i])
     
      
    }
     let p1=a.join('')
    console.log("!!!",p1)
    for(let i=3;i<6;i++){
       b.push(numbers[i])
     
        
    }
    let p2= b.join('')
    console.log("!!!",p2)
      for(let i=6;i<numbers.length;i++){
       c.push(numbers[i])
     
   
    }
    let p3= c.join('')
           console.log("!!!",p3)
  
    
    return `(${p1}) ${p2}-${p3}`
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))