function Slist(){
    this.head = null;
};
function Node(num){
    this.value = num;
    this.next = null;
};

Slist.prototype.addtoFront = function (val){
    temp = this.head;
    this.head = new Node(val);
    this.head.next = temp;
};

Slist.prototype.contains = function(num){
    var runner = this.head
    while(runner){
        if(runner.value === num){
            // console.log("The value is in the list => ", num);
            return true; /// the return is not return true
        }
        runner = runner.next;
    }
    return false;
};
Slist.prototype.removefront= function(){
    var nodeVal =null;
    
    if (this.head === null){
        console.log(-1)
    }
    else if (this.head != null){
        nodeVal = this.head.value
        this.head = this.head.next;
        console.log( "Removed Node with Val of =>", nodeVal)
    }

}
Slist.prototype.front = function(){
    current = this.head
    if(current){
        console.log( "Front Node value =>" , current.value)
    }
    else{
        console.log(-1)
        return null;
    };
}
Slist.prototype.lengthOfnodes = function(){
    var num = 0;
    var runner = this.head;
    while(runner.next !=null){
        num++;
        runner = runner.next
    }
    console.log("The length of nodes linked =>",num, "\n");
} 

Slist.prototype.Display = function(){
    var current = this.head;
    var input = " \n Head => ";
    if(current === null){
        console.log(-1);
    }
    while(current != null){
        input += current.value + " => ";
        current = current.next ;
    }
    input+= "null \n";
    console.log(input);
}
Slist.prototype.maxVal = function(){
    var node = this.head;
    var max = 0;
    //if there is no node return -1
    if (node === null){
        console.log(-1);
        return;
    }
    //while node is not null 
    while(node != null){
        // if that value in that node is greater than max set it to new max
        if(node.value > max ){
            max = node.value;
        }
        node = node.next; //keep running through the list
    }
    console.log("The maximum value is =>",max,"\n")
}
Slist.prototype.minVal =function(){
    var node = this.head; // set node to head of the list
    if(node === null){ //if the list is empty
        console.log(-1)// return -1
        return;
    }
    var min = node.value // ifthe list is not empty set the min to be the first value of the list.
    while(node != null){ //Until is null run through the list
        if (node.value < min){
            min = node.value;
        }
        node=node.next; // to keep running through the list.
    }
    console.log(" \n The minimum value is =>",min,"\n");
}



var list = new Slist();


list.addtoFront(4);
list.addtoFront(3);
list.addtoFront(0);
list.addtoFront(1); 
list.lengthOfnodes();
// list.minVal();
// list.maxVal();
// list.front();
list.Display();
list.contains(1);

// if (1==1){
//     return true;
// }