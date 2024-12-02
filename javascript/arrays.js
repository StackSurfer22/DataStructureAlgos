
//Manipulating arrays without using built-in methods
// like push, pop, shift, unshift, splice, slice, etc.


/*** mimics the unshift method ***/
// add an element to the front of the array
function pushFront(arr,num){
    // check if the array is empty
    if(arr.length === 0){
        return "Array is empty";
    };

    for(let i = arr.length; i >= 0; i--){
        arr[i] = arr[i - 1]; // shift all elements to the right
        console.log(`pushFront() \n lengthOfArr:${arr.length} | i:${i} | push:${num} | arr: ` + arr);
    };
    
    console.log(`pushFront() \n lengthOfArr:${arr.length} | numPushedtoFront:${num} | arr: ` + arr );
    arr[0] = num; // set the first element to the number passed in
    return arr;
};

/*** mimics the push and shift method ***/
//remove the first element of the array
function popFront(arr){
    if(arr.length === 0){
        return "Array is empty";
    };

    for(let i = 0; i <arr.length; i++){
        arr[i] = arr[i + 1]; // shift all elements to the left
        console.log(`popFront() \n lengthOfArr:${arr.length} | i:${i} | arr: ${arr}` + "\n");
    };

    arr.length = arr.length - 1; // reduce the length of the array by 1
    return arr; // return the array
};

/***   mimics the pop method  ***/
//insert an element at the index passed in
function insertAt(arr,idx,val){ 
    // check if the index is out of range
    if(idx<0 || idx > arr.length){
        return "Index out of range";
    };

    for(let i = arr.length; i >= idx; i--){
        arr[i] = arr[i - 1]; // shift all elements to the right
        console.log(`insertAt() \n lengthOfArr:${arr.length} | i:${i} | arridx:${idx} | InsertVal:${val} | arr: ${arr}` + "\n");
    };

    arr[idx] = val; // set the value at the idx passed in
    return arr; // return the array
};

/***   mimics the splice method  ***/
//remove an element at the index passed in
function removeAt(arr,idx){
    // check if the index is out of range
    if (idx < 0 || idx > arr.length){
        console.log("Index out of range");
    };

    // loop length of the array - 1 so we don't go out of bounds making an extra iteration for nothing. 
    for(let i = idx; i < arr.length-1; i++){
        arr[i] = arr[i + 1]; // shift all elements to the left
        console.log(`removeAt() \n lengthOfArr:${arr.length} | i:${i} | idx:${idx} | arr:` + arr + "\n");
    };
    console.log('arr.length decremented now length is: ' + (arr.length - 1));
    arr.length = arr.length - 1; // reduce the length of the array by 1
    return arr; 
}

function swapPairs(arr){
    for (let i = 0; i < arr.length-1; i+=2){
        let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
    }
        return arr;
}

function removeDuplicates(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            arr[x] = arr[i];
            x++;
        }
    }
    arr.length = x;
    return arr;
};


// test cases
myarr = [1,1,2,2,3,4,4,5];
console.log(removeDuplicates(myarr)); // [1,2,3,4,5]
// console.log(swapPairs(myarr));// [2,1,4,3,5]
// console.log(pushFront(myarr,3)); // [0,1,2,3,4,5]
// console.log(popFront(myarr));// [2,3,4,5]
// console.log(insertAt(myarr,3,0)); // [1,2,3,0,4,5]
// console.log(removeAt(myarr,2)); // [1,2,4,5]

