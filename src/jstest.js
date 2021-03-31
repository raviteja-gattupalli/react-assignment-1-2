
/*var promise  =new Promise(function(resolve,reject){


let x=10;
let y=10;
if(x===y)
{
    resolve("both are equal");
}

});

promise.then(function(x){
    console.log(x);
}).catch(function(){

    console.log(error);
});

*/

function person(name,age){
    this.name=name;
    this.age=age;
}
function employee(name,age,id)
{

    person(name,age);
    this.id=id;
    console.log(name);
    console.log(age);
}

employee.prototype=person
let emp=new employee("ravi",21,"FL1505")
console.log(emp.__proto__)
