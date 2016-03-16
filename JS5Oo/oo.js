/**
 * Created by wsl on 2016/3/16.
 */
function A(){
    this.sayHehe = function(){
        console.log("He He");
    }
}
A.prototype.sayHello = function(){
    console.log("Hello JS oo");
}

A.sayHi = function(){
    console.log("Hello js Hi");
}

var a = new A();
a.sayHello();

A.sayHi();

function B(){
}
B.prototype = new A();
var b =  new B();
b.sayHello();
b.sayHehe()