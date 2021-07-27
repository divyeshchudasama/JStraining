// if else-if
let a = 40,
  b = 60,
  c = 60;
let toatl = a + b + c;
let avg = toatl / 3;
if (avg > 70) console.log("distinction");
else if (avg >= 60 && avg <= 70) console.log("FC");
else if (avg >= 50 && avg <= 60) console.log("SC");
else if (avg >= 35 && avg <= 50) console.log("TC");
else console.log("fail");
