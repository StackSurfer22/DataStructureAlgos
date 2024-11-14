/**
Basic 13 Algos for warm up and refresher
some of these algorithms are made without using any premade functions
for better understanding of the logic
***/



/* Setting and Swapping */
//// “Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.”

function setAndSwap(name,number){
    console.log(`Name: ${name} ` +"& " + `Number: ${number}`)
    var myName= number;
    var myNumber = name;
    console.log("Swapped " + `Name: ${myName} ` + `Number: ${myNumber}`);
}
// setAndSwap("Alex",45); 



////// Print integers from -1 to 50 using a FOR loop.”
function printingNums(){
    for(var i = -1 ; i<51 ; i++){
        console.log("printing number"+i);
    }
}
// printingNums()



//// “Create - goodMorning() - Within it, console.log string "good morning!" Call it 10 times.”

function goodMorning(){
    for(var i=0; i <11 ; i++){ // the computer starts counting from 0 so we need to add 1 to the number.
        console.log("Good Morning" + i);
    }
}
goodMorning() //// <----- Call the Function



///// Using FOR loop, print multiples of 3 from -30 to 0. Skip -3 and -6.”

function multiplesOf3(){
    for(var i = -30 ; i < 0 ; i++){
        if(i == -3 && i == -6){
            console.log("theres a -3 or -6");
        }
        else{console.log(i * 3)};
    }
}
// multiplesOf3();



//// SUMMING odd number to 1000
function sumOdd(){
    let sum = 0;
    for(let i = 0; i <= 1000; i++){
        if(i % 2 == i){
            sum += i;
        }
    }
    return sum;
}
sumOdd();