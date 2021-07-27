let hello = () => "hello world";
let res = hello();
console.log(res);
let greet = (n) => "hello " + n +"!";
console.log(greet("dvs"))
greet("dvs");

console.log(greet('neha'));
let f = (f1, f2) => {
    return f1() +' '+ f2();
};
res1 = f(()=>"hello ", ()=>"dvs");
console.log(res1);
let age = 18;
let msg = age>=18 ? ()=>"vote" : "try next time";
console.log(msg());