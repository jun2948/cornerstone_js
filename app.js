//document.write("Hello");

// Q1.
function makeAbba(a, b) {
	// body 
    return a + b + b + a;
}

document.write(makeAbba("Hi", "Bye")); // "HiByeByeHi"
document.write(makeAbba("Yo", "Alice")); // "YoAliceAliceYo"
document.write(makeAbba("What", "Up")); // "WhatUpUpWhat"


//Q2
function endsLy(str){
    if(str.slice(-2) == "ly"){
        return true;
    }else{
        return false;
    }
}
document.write(endsLy("oddly"));
document.write(endsLy("y"));
document.write(endsLy("oddy"));
//@3
function firstHalf (str) {
    if (str.length % 2 == 0) {
        var result = str.slice(0, str.length/2);
        return result;
    }
}

document.write(firstHalf("WooHoo"));
document.write(firstHalf("HelloThere"));
document.write(firstHalf("abcdef"));

//Q4
function right2(str){
    var result = (str.slice(0,3) + str.slice(-2,0));
    return result;
}

document.write(right2("Hello"));
document.write(right2("java"));

//Q5
function conCat(a,b){
    if(a.slice(2) == b.slice(0)){
        var result = a.replace(/c/g,"")+b;
        return result;
    }else{
        return a + b;
    }
}
document.write(conCat("abc","cat"));
document.write(conCat("dog","cat"));
document.write(conCat("abc",""));

//Q6
function frontAgain(str){
    if(str.slice(-2) == "ed"){
        return true;
    }else{
        return false;
    }
}
document.write(frontAgain("edited"));
document.write(frontAgain("edit"));
document.write(frontAgain("ed"));


//Q8
function withoutX2 (str) {
    var result = str.replace(/x/g, "");
    return result;
}

document.write(withoutX2("xHi"));
document.write(withoutX2("Hxi"));
document.write(wihtoutX2("Hi"));

//Q9
function lastChars(a,b){
    if(b.slice(-1,0) == ""){
        return a.slice(0,1) + "@";
    }else{
        return a.slice(0,1) + b.slice(-1,0);
    }
}
document.write(lastChars("last","chars"));
document.write(lastChars("yo","java"));
document.write(lastChars("last",""));