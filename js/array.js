
const user = [
    {
        id:1,
        name:"som",
        email:"som@gmail.com"
    },
    {
        id:2 , 
        name:"dip",
        email:"dip@gmail.com"
    },
    {
        id:3,
        name:"sorav",
        email:"sourav@gmail.com"
    },
    {
        id:4 ,
        name:"soma",
        email:"soma@gmail.com"
    },
]


const arr = [3,5,6,7 , "som " , [6,0,8] , { id:"fttu78"}]

console.log(arr);

const arr2 = Array(6,7,8,"som")
console.log(arr2);


// array function 

console.log(Array.isArray(arr2));

arr.push("dev")

console.log(arr);

arr.pop()
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr.length );

arr.unshift(40)
console.log(arr);


// filter --> return array [ ] 
const num = [1,3,5 ,6 , 5, 8, 9, 8]

const numfilter = num.filter((ele)=> ele > 2 )
console.log(numfilter);


const filterData = user.filter((user , index , arr)=>{
  return user.id < 3
})

console.log(filterData);

// map function --> return array  

const maped  = num.map((ele)=> ele>5 )
console.log("--- mapped val ------>" ,maped);

user.map((user)=>{
    console.log( user.id , "      " ,user.name , "   " , user.email , "    "  );
})

const array = [1,2,3,4]
// reduce fun 
const sum = array.reduce((acc , current )=>
    {  
    const data = acc + current
    return data 
})

console.log("total sum of num", sum);


// {/* <CustomCom  /> */}

// console.log( "237t6t1".replace(1 , 10));

// console.log(num.slice(1, 3))
// console.log(num.reverse())

// console.log(num.some(ele=> ele%2 === 0 )); // bool val
