function Slist(){
    this.head = null;
};
function Node(val){
    this.value = val;
    this.next = null;
}
function slQueue(){
    var head = null;
    var tail= null;
}

slQueue.prototype.enqueue= function (int){
    var node = new Node(int);
    if(this.head === null){
        this.head = node.value;
        this.tail = node.next;
    };
    while(this.head){
        this.head = this.head
    }
}

linkedlist = new Slist();
console.log(linkedlist)
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
