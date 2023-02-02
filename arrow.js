function sum(a,d){return a+d}
c=sum(2,5)
console.log(c)
let student= (std_info)=>{
    let json=JSON.stringify(std_info)
      return json
}
obj={
    name:"ajay",
    age:23,
    place:"hyd",
}
console.log(JSON.parse(student(obj)))
   


let s =function(obj){ console.log(obj)}
s(obj)
let sample=(arr)=>{
    for(i of arr){ 
        console.log(i) 
        //   yield arr
    }
}
sample([12,2,3,4,5,6,7])
let sl= function(arr){
    for( i in arr){
        console.log(i)
        // yield i
    }
}