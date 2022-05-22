"use stict";

// task3
let a = Number(prompt("Введитете число а"));
let b = Number(prompt("Введитете число b"));

if (a >= 0 && b >= 0){
    alert(a-b);
}
if (a < 0 && b < 0){
    alert(a*b);
}
if  ((a < 0 && b >= 0)||(a >= 0 && b < 0)){
    alert(a+b);
}
