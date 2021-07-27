//date object
let date =  new Date();
console.log(date);
console.log('year : '+ date.getFullYear()+ '  month : '+ Number(date.getMonth()+1)+ '  day : '+ date.getDate());

console.log('date & time :'+date.toLocaleString());
console.log('full date :'+date.toISOString());