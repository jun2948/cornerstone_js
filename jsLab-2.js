//Q1
function rotateLeft3(arr){
    var new_array = [arr[1],arr[2], arr[0]];
    return new_array;
}
console.log('Q1');
console.log(rotateLeft3([1,2,3]));
console.log(rotateLeft3([5,11,9]));
console.log(rotateLeft3([7,0,0]));

//Q2
function reverse3(arr){
    var array = arr.reverse([]);
    return array;
}
console.log('Q2');
console.log(reverse3([1,2,3]));
console.log(reverse3([5,11,9]));
console.log(reverse3([7,0,0]));

//Q3
function has23 (arr) {
    if (arr[0] == 2) {
        return true;
    } else if (arr[0] == 3)  {
        return true;
    } else if (arr[1] == 2) {
        return true;
    } else if (arr[1] == 3) {
        return true;
    } else {
        return false;
    }
}  
console.log('Q3');
console.log(has23([2,5]));
console.log(has23([4,3]));
console.log(has23([4,5]));
//Q4
function fix23(arr){
    if(arr[1] == 3){
        arr.splice(1,1,0);
        return arr;
    }else if(arr[2] == 3){
        var result = arr.splice(2,1,0);
        return arr;
    }else{
        return arr;
    } 
}
console.log('Q4');
console.log(fix23([1,2,3]));
console.log(fix23([2,3,5]));
console.log(fix23([1,2,1]));

//Q5
function maxTriple(arr){
    return  arr.sort([arr])[2];
}
console.log('Q5');
console.log(maxTriple([1,2,3]));
console.log(maxTriple([1,5,3]));
console.log(maxTriple([5,2,3]));

//Q6
function swapEnds(arr){
    var prc1 = arr.push(arr.shift(0));
    return arr;
}
console.log('Q6');
console.log(swapEnds([1,2,3,4]));
console.log(swapEnds([1,2,3]));
console.log(swapEnds([8,6,7,9,5]));

//Q7
function unlucky1(arr){
    if(arr.indexOf(1,3)){
        return true;
    }else{
        return false;
    }
}
console.log('Q7');
console.log(unlucky1([1,3,4,5]));
console.log(unlucky1([2,1,3,4,5]));
console.log(unlucky1([1,1,1]));

//Q8
function front11(a,b){
    arr = [];
    return arr.concat(a[0],b[0]);
}
console.log('Q8');
console.log(front11([1,2,3],[7,8,9]));
console.log(front11([1],[2]));
console.log(front11([1,7],[]));

//Q9

//Q10

//Q11

//Q12
function shiftLeft(arr){
    arr.push(arr.shift(0));
    return arr;
}
console.log('Q12');
console.log(shiftLeft([6,2,5,3]));
console.log(shiftLeft([1,2]));
console.log(shiftLeft([1]));

//Q13
function evenOdd(arr){
    arr.sort(arr);
    return arr;
}
console.log('Q13');
console.log(evenOdd([1,0,1,0,0,1,1]));
console.log(evenOdd([3,3,2]));
console.log(evenOdd([2,2,2]));
//Q14
function fizzBuzz(a,b){
    for(var i = 1; a <= i <= b; i++){
        if(i % 3 === 0){
            return 'fizz';
        }else if(i % 5 === 0){
            return 'Buzz';
        }else{
            return i;
        }
    }

}
console.log('Q14');
console.log(fizzBuzz(1,6));
console.log(fizzBuzz(1,8));
console.log(fizzBuzz(1,11));

//Q15
function countClumps(arr){

}
console.log('Q15');
console.log(countClumps([1,2,2,3,4,4]));
console.log(countClumps([1,1,2,1,1]));
console.log(countClumps([1,1,1,1,1]));