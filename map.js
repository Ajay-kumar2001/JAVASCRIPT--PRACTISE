arr=["123425","2346","46","123"]
 let res=arr.map((ele,i,arr)=>{
    if (ele.length<=3)
    return ele
})
console.log(res)
