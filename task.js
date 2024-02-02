

console.log("-----------------Task-1-----------------------")


// Take four parameters. Multiply the four numbers and then return the result

function MultiplyNo(no1, no2, no3, no4) {

    let mRewsult = no1 * no2 * no3 * no4;

    return mRewsult

}
console.log(MultiplyNo(4, 3, 21, 14));



console.log("-----------------Task-2-----------------------")

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(number) {
    if (number % 2 === 0) {
        return number / 2;
    }
    else {
        return number * 2;
    }
}

let oEresuld = oddEven(12);
console.log(oEresuld);

console.log("-----------------Task-3-----------------------")

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



function make_avg(aa) {
    let aSum = 0;
    for (let i = 0; i < aa.length; i++) {
        aSum = aSum + aa[i];
    }
    let avgValue = aSum / aa.length;
    return avgValue;
}

let aAvg = [3, 5, 7, 12, 21, 6]
console.log(make_avg(aAvg))


console.log("-----------------Task-4-----------------------")

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(zero){
let countZero =0;
for(const strinLnt of zero){


  if ( parseInt(strinLnt)===target ){
countZero++
  }
}
return countZero;
}


let zeroString="010001101010111110"
let target = 1;

let totalZero = count_zero(zeroString);
console.log(totalZero);


console.log("-----------------Task-5-----------------------")

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(oEno){
    if (oEno%2==0){
       
        return oEno ," is even  number" 
    }
    else{
        return oEno ," is odd number" 
    }


}

let oEresult = odd_even(15);

console.log(oEresult);