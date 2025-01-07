// /**
// Basic 13 Algos for warm up and refresher
// some of these algorithms are made without using any premade functions
// for better understanding of the logic
// ***/

//*** 1. return an array of numbers starting from 1-10 ***/
function getArray(){
    var arr = [];
    for(var i = 1; i <= 10; i++){
        arr.push(i);
    }
    console.log(arr);
}
getArray();

/**** 2. return the sum of even numbers from 1-100 ****/
function sumEvenNums(){
    let sum = 0;
    for(var i = 0; i < 100; i++){
        if(i % 2 ==  0){ // using the modulus operator to check if the number is even by dividing it by 2 and checking  IF THERE IS NO remaminder.
            sum += i;
        }
    }
    console.log(sum);
};
sumEvenNums();

// // /**** 3. return the sum of odd numbers from 1-100 ****/
    function sumOfOdds(){
        let sum =0;
        for(var i= 1 ; i<100 ; i++){
            if(i % 2 == 1 ){ // using the modulus operator to check if the number is odd by dividing it by 2 and checking  IF THERE IS a remaminder.
                sum = sum + i;
            };
        };
        console.log(sum);
    };
sumOfOdds();

// /**** 5. Print the max number of an array    ****/
function printMaxNum(arr){
    if(arr.length == 0 || null){
        console.log("Array is empty");
        return;
    }

    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log("Max number is: " + max);
}
printMaxNum([1,2,3,4,5,6,7,8,9,10]);


// /**** 6. Print the average of an array ****/
function arrAverage(arr){
    let sum =0;
    for (var i=0 ; i <arr.length ; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(avg);
};
arrAverage([1,2,3,4,5]);

/*** 7. Return an array of all odd numbers from 1-50 ***/
    function oddNums(){
        let arr = [];
        for(var i =0 ;i< 50 ; i++){
            if(i % 2 !== 0){
                arr.push(i);
            };
        };
        console.log(arr);
    };
    oddNums();

//// 8. return a count of the number of values greater the giveb numbe Y in an array
    function greaterThanY(arr,y){
        let count = 0;
        for(var i = 0 ; i < arr.length; i++){
            if(arr[i] > y){
                count++;
            }
        }
        console.log(count);
    };
    greaterThanY([1,2,3,4,5,6,7,8,9,10,11], 5);

// // 9. Square the values of an array
    function squareValues(arr){
        for(var i = 0 ; i < arr.length; i++){
            arr[i] *= arr[i];
        }
        console.log(arr);
    }
    squareValues([2,4]);

//  10. Replace negative numbers with the string "negNum"
function replaceNegatives(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "negNum";
        };
    }
    console.log(arr);
}
replaceNegatives([-1,0,3,4,-3,5,-5,-7,8,-9,10]);

/*** 11. Find the max, min, and average of an array ***/
    function maxMinAvg(arr){
        let max = arr[0];
        let min = arr[0];
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min){
                min = arr[i];
            }
            sum += arr[i];
        }
        let avg = sum / arr.length;
        console.log("Max:" + max + " Min:" + min + " Avg:" + avg);
    };
maxMinAvg([1,2,3,4,5,6,7,8,9,10]);

/*** 12. swap the first and last values on an array ***/
    function swapFirstLast(arr){
        let temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = temp;
        console.log(arr);
    }
    swapFirstLast([1,2,3,4,5]);

/**** 13. print multiples of 3 from -10 to 0. Skip -3 and -6. ****/
function multiplesOf3(){
    for(var i = -10 ; i < 0 ; i++){
        if(i == -3 && i == -6){
            console.log("theres a -3 or -6");
        }
        else{console.log(i * 3)};
    }
}
multiplesOf3();