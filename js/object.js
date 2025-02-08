const obj = {
    name :"sombhu ",
    age : 22,
    dep : "MCA",
    get : function(){
        console.log("this is function "); 
        return " log .... "  
    },
    push: "9878"
}

const obj2 = {
    name :"sourav",
    age :20 ,
    dep : "BCA",
    1:"som"
}

const res = obj.get()
console.log( res  );

// only key 
console.log( Object.keys(obj2));

// value only
console.log( Object.values(obj2));
// key value pair in a array 
console.log(" ---------------------- object entries>");
console.log( Object.entries(obj));

console.log("---> data =====> " , obj2.name )


// assign 

console.log("----------------->");

const assign = Object.assign(obj , obj2)
console.log( assign );

console.log(obj2);


console.log("------->");

for( let key  in obj2)
{
   console.log(key , obj2[key]);
   
}

