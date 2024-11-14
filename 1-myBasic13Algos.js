//////// Coding Dojo Algo Book //////

////Chapter 1 fundamentals ///

//// Setting and Swapping////
////
//// “Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.”

/////// function setAndSwap(name,number){
///////     console.log(`Name: ${name} ` +"& " + `Number: ${number}`)
///////     var myName= number;
///////     var myNumber = name;
///////     console.log("Swapped " + `Name: ${myName} ` + `Number: ${myNumber}`);
/////// }
///////setAndSwap("Alex",45); //// <----- Call the Function


////// Printing -52 to 1006
///
//////“Print integers from -52 to 1066 using a FOR loop.”

/////// function printingNums(){
///////     for(var i = -52 ; i<1067 ; i++){
///////         console.log(i);
///////     }
/////// }
/////// printingNums() //// <----- Call the Function


////// Don't worry be happy
/////////
///“Create - beCheerful() - Within it, console.log string "good morning!" Call it 98 times.”

////// function beCheerful(){
//////     for(var i=0; i <98 ; i++){
//////         console.log("Good Morning")
//////     }
////// }
////// beCheerful() //// <----- Call the Function


////“Multiples of Three – but Not All
//////
///// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.”

function multiplesOf3(){
    for(var i = -300 ; i < 0 ; i++){
        if(i == -3 && i == -6){
            console.log("theres a 3 or a 6");
        }
        else{console.log(i * 3)};
    }
}
multiplesOf3();