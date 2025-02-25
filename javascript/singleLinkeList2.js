// Single linked list
// MAX,MIN methods
// add new node to the front method
// what node is at the front of the list
// and a method that removes the front of the node
// contain method that returns the if the list contains a value given
//Display method showing a string representation of the list.

function Slist(){
    this.head = null;
};

function node(num){
    this.value = num;
    this.next = null;
};

Slist.prototype.addToFront = function (val) {
    temp = this.head;
    this.head = new node(val);
    this.head.next = temp;
    console.log("Node added to the front with value of ", val)
};
Slist.prototype.removeFront = function(){
    var nodeVal = null;
    
    if(this.head === null){
        console.log(-1);
    }
    else if ( this.head != null){
        nodeVal = this.head.value;
        this.head = this.head.next
        console.log("Remove node with the value of ",nodeVal)
    };
};

Slist.prototype.front = function (){
    current = this.head;
    if(current){
        console.log("Front Node value =>", current.value)
    }
    else{
        console.log(-1)
        return null;
    };
};

Slist.prototype.lengthOfNodes = function (){
    var num = 0;
    var runner = this.head;
    while(runner){
        num ++;
        runner = runner.next;
    };
    console.log("The lenght of nodes linked are => ",num);
};

Slist.prototype.contains = function (num){
    var runner = this.head;
    while(runner){
        if(runner.value == num){
            console.log(true,"it does contain",num);
            return true;
        };
        runner = runner.next;
    }

    console.log(false,"it does not contain",num)
    return false;
};

Slist.prototype.Display = function(){
    var currentHead = this.head;
    var input = "Head => ";
    if(currentHead === null){
        console.log(-1);
    };
    while(currentHead != null){
        input += currentHead.value + " => ";
        currentHead = currentHead.next;
    };
    input += "null"
    console.log(input);
};

Slist.prototype.maxVal = function(){
    var node = this.head;
    var max = 0;
    if(node === null){
        console.log(null)
        return;
    };
    while( node != null){
        if(node.value > max){
            max = node.value;
        };
        node = node.next;
    };
    console.log(" The maximum value is => ",max);
};

Slist.prototype.minVal = function(){
    var node = this.head;
    var min = node.value

    if(node === null){
        console.log(-1)
        return;
    };
    while(node != null){
        if(node.value < min){
            min = node.value;
        };
        node = node.next;
    };
    console.log("The minimum value is ", min);
};

// name a variable to declare a new Single linked list 
var Mylist = new Slist();

Mylist.addToFront(2);
Mylist.addToFront(4);
Mylist.addToFront(6);
Mylist.addToFront(9);
Mylist.addToFront(1);
Mylist.addToFront(3);
Mylist.addToFront(5);

// Mylist.minVal();
// Mylist.maxVal();

// Mylist.front();
Mylist.Display();
// Mylist.lengthOfNodes();

Mylist.contains(10);
Mylist.contains(9);