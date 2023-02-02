arr=[1,2,34,56,7,8,9]
arr.forEach((ele, i ,arr)=> {
    console.log(ele)
    console.log(i)
    console.log(arr)
    
});
                                                                
var dict={};
arr.forEach(function(ele,i, arr){
    for (let i=0;i<arr.length;i++){
        for( j=i+1;j<arr.length;j++)
        if( arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=arr[i]
        }
        console.log(arr)


    }
})
arr.forEach((ele,i)=>{
    
    dict[ele]=i
    console.log(dict)
    
    
    //console.log(d)
 
    
})

console.log(dict)