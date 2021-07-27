// let friend = ['bhavik', 'jay', 'jignesh'];

// let f1 = friend[0];
// console.log(f1);

// friend[4] = 'bhavesh';
// console.log(friend[4]);

// let num = [11, 34.67,76,13,75,90];
// // for (let i = 0; i<num.length;i++){
// //     console.log(num[i]);
// // }
// for(let i in num) {
//     console.log(i);
// }
// for(let i of num){
//     console.log(i);
// }

let student = [
    {sId: 1 , sname: "Divyesh", age:13},
    {sId:2 , sname: "i", age:13},
    {sId: 3 , sname: "v", age:12},
    {sId: 4 , sname: "y", age:13},
    {sId: 5 , sname: "e", age:13},
    {sId: 6 , sname: "s", age:13},
    {sId: 7 , sname: "h", age:13},

]
for(let s of student) {
    console.log(`id:${s.sId} name:${s.sname} age:${s.age}`)
}