// basic function 
function fn(name , id ){
   console.log(name , id );
   
}

fn("name" , 7); 

// self invoking function 
(function fn2 (){
   console.log(
    ' instance calling '
    );
   
})()


//neested function .. 
function fn3(x){
    console.log("fun3" , x );
    
    function sub3(y){
      console.log("nested function " , x , y);
      return x+y;
    }

    return sub3;
    // return { name : "som"};
}

// const function1 =  fn3(2);

// console.log("log function" , function1);

// console.log("log sun fun " , function1(3));
console.log("------->", fn3(5)(7))


// arrow function ...  this keyword not supported ...
const arrowFun = (x , y)=>{
      console.log("arrow func" , x, y);
      return x+y
}


console.log(arrowFun(2,5));
