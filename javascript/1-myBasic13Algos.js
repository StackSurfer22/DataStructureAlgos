// /**
// Basic 13 Algos for warm up and refresher
// some of these algorithms are made without using any premade functions
// for better understanding of the logic
// ***/



 /**** Setting and Swapping my name and a number ****/

function setAndSwap(name,number){
    console.log(`Name: ${name} ` +"& " + `Number: ${number}`)
    var myName= number;
    var myNumber = name;
    console.log("Swapped " + `Name: ${myName} ` + `Number: ${myNumber}`);
}
setAndSwap("Alex",45);
setAndSwap("Mike", 23);


/****  Print integers from -1 to 10 using a FOR loop.” ****/
for(var i = -1 ; i<10 ; i++){
    function printingNums(){
        console.log("printing number "+i);
    }
}
printingNums()



// /****  create a function that says good morning 10 times ****/

function goodMorning(){
    for(var i=0; i <11 ; i++){ // the computer starts counting from 0 so we need to add 1 to the number.
        console.log("Good Morning " + i);
    }
}
goodMorning();



/**** Using FOR loop, print multiples of 3 from -10 to 0. Skip -3 and -6. ****/

function multiplesOf3(){
    for(var i = -10 ; i < 0 ; i++){
        if(i == -3 && i == -6){
            console.log("theres a -3 or -6");
        }
        else{console.log(i * 3)};
    }
}
multiplesOf3();

/**** Return the sum of odd numbers in a array ****/
function sumOdd(){
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        if(i % 2 == 1){
            sum += i;
        }
    }
    console.log("Sum of odd number is: " + sum);
}
sumOdd();

/**** Shifting array values left ****/

function shiftArray(arr){
    temp = arr[0];
    for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;
    console.log(arr);
}
shiftArray([1,2,3,4,5,6,7,8,9,10]);



/**** Replacing negative numbers with the string "negNum" ****/
function replaceNegatives(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "negNum";
        };
    }
    console.log(arr);
}
replaceNegatives([-1,0,-3,4,-5,6,-7,8,-9,10]);




/**** Print the max number of an array    ****/
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
printMaxNum([])
printMaxNum([1,2,3,4,5,6,7,8,9,10]);