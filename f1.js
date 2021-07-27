// function hello() {
//     console.log('dvs');
// }
// hello();
// function Greeting(name) {
//     console.log(`hello ${name}`);

// }
// Greeting('dvs2');
// function sum(a ,b=10 ) {
//     console.log(a+b);
// }
// sum(2);
// function square(n) {
//     let result = n*n;
//     return result;
// }
// console.log(square(5));

// function array1() {
//     return [
//         1,2,3,4,5
//     ]
// }
// for (let n of array1()) {
//     console.log(n);
// }

function studdentdata() {
    let student = [
        {id: 1 , name: "dvs"},
        {id: 2 , name: "bhavik"}
    ]
    return student
}
for(let s of studdentdata()) {
    console.log(`id ${s.id}, name ${s.name}`)
}