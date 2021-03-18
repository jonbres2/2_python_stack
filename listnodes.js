class ListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
    // constructor(value, next = null, nextValue, nextNext = null){
    //     this.value = value;
    //     this.next = next;
    // }
}

// // Creating 3 new instances of the ListNode class and establishing their internal values
// var a = new ListNode(3)
// var b = new ListNode(7)
// var c = new ListNode(4)
// var d = new ListNode(6)
// var e = new ListNode(5)

// // Linking the first node to the second, and the second to the third. This also establishes "a" as the head of the list
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;




//creating an "addToFront(node, value)" function that adds a new node and sets it as the head of the list
// function addToFront(node, value){
//     newNode = new ListNode(value)
//     newNode.next = node
//     return newNode
// }

// var a = new ListNode(1);
// var a = addToFront(a, 7);
// console.log(a.value); // shows 7
// console.log(a.next.value); // shows 1




// addToBack(node, value)
// create a new list node and make it the tail (end) of the linked list represented by node. return the (new???) head
// var a = new ListNode(3);
// var b = addToBack(a, 7);
// var c = addToBack(b, 4);
// note: we do not have immediate access to the tail
// you may want to do this last

// //This was my bizarre attempt to solve it. The function is unfinished, but it does walk its way through each instance of the list properly
// function addToBack(node, value) {
//     for (i = node; i != null; i = i.next){
//         i.next
//         newNode = new ListNode(value)
//         if (i.next = null){
//             console.log("End of list")
//         }
//     }
// }

// function addToBack(node, value){
//     var newNode = new ListNode(value);
//     var runner = node;
//     while (runner.next != null){
//         runner = runner.next;
//     }
//     runner.next = newNode;
//     return node;
// }




  // display(node)
  // return a string representing the values of the
  // linked list in order - something like "3 - 4 - 7 - 2 - 1"
  // for the above examples, something like:
  // "3 - 7 - 4"

// function display(node) { 
//     var output = ""; //creates a blank output to append the strings onto
//     var runner = node; //creates a value that we iterate forward with, "runs" through the list nodes
//     while (runner != null){ //while loop iterates forward until runner is set to null, which is the tail of the list. 
//         output += runner.value + " - ";
//         runner = runner.next;
//     }
//     // This while loop is the "classic" way to iterate through a list node list
//     return output
// }

// // This is a slightly different version that stops the while loop on the node right before the tail, then adds on the final value outside the while loop. This allows you to trim off the final dash
function display(node) { 
    var output = ""; 
    var runner = node; 
    while (runner.next != null){ //changed runner to runner.next
        output += runner.value + " - ";
        runner = runner.next;
    }
    output += runner.value //adds the final value to the end of the list, without a dash
    return output
}

// console.log(display(a))





// contains(node, target)
// return true if the linked list represented by node
// contains the target value, and false otherwise
// var x = new ListNode(8);
// x == 8 -> False
// x.value == 8 -> True
//   function contains(node, target) {

//   }




// removeFront(node)
// remove the head from the linked list 
// (represented by node) and return the new head
// what happens if there's only one node in the list?
// what if there's zero?

// function removeFront(node) {
//   var newHead = node.next
//   node.next = null;
//   return newHead;
// }




// removeBack(node)
// remove the tail from the linked list 
// (represented by node) and return the head
// what happens if there's only one node in the list?
// what if there's zero?
// does the head of the list ever change?

function removeBack(node) {
  if (node == null){ // Similarly, checking if there is NOTHING in the list.
    return null           // If so, nothing to delete, immediately returns null
  }
  else if (node.next == null){ // Checking to see if the provided node is the only
    return null           // item in the ListNode. If it is, simply return null,
  }                       // as we are deleting that entry.
  var runner = node
  while(runner.next.next != null){
      runner = runner.next
  }
  runner.next = null
  return node
}





// bonus: generateNewList(max_value, length)
// return a ListNode object that is the head of a new
// linked list of the given length, with node values
// between 0 and max_value

function generateNewList(max_value, length){
    var value = Math.round(Math.random() * max_value);
    var head = new ListNode(value);
    var temp = head;

    for (var i = 0; i < length - 1; i++){
        var value = Math.round(Math.random() * max_value);
        var new_node = new ListNode(value);
        temp.next = new_node;
        temp = temp.next; 
    }

    return head
}

// var x = generateNewList(10, 7);
// console.log(display(x));
// x = removeBack(x);
// console.log(display(x));
// x = removeFront(x);
// console.log(display(x));




  // moveMaxToBack(node)
  // find the node with the largest value in the linked list
  // then, put it at the end of the list (make it the tail), and return the (new) head
  // if two nodes share the largest value, just move one of them
  // note: do not create another ListNode
  // suggestion: make this a two-part problem
  // part A: find the node with the largest value
  // part B: rearrange the linked list so that node is the last node
  // consider the following:
  // - what if the node with the largest value is already the tail?
  // - what if the node with the largest value is the head?
  // - what if the list has two nodes in it? one? zero???
  // fyi:
  // node_a > node_b -> doesn't work
  // node_a.value > node_b.value -> does

  // bonus:
  // our ListNode constructor works, but any time we create a new node,
  // we gotta do something like this:
  // var newNode = new ListNode(n)
  // var x.next = newNode -or- var newNode.next = x
  // can we change the constructor to get this done in one line?





function moveMaxToBack(node){
    var max = node; 
    var runner = node;
    // var beforeMax = node;
    // var tailNode = node;
    while (runner != null) {
        if (runner.value > max.value) { // Finding the max value
            max = runner;
        }
        if (runner.next == null){ // Finding the tail of the list
            var tailNode = runner;
        }
        runner = runner.next;
    }

    //Conditional statements for edge conditions
    if (max == tailNode) { //If max is already the tail, returns the head without re-arranging
        return node;
    }
    else if (max == node) { //If max is the head of the list, sets the 2nd node as the new head, then resets the original head as the new tail
        var newHead = max.next;
        tailNode.next = max;
        max.next = null;
        return newHead;
    }

    runner = node; //resetting the runner back to the head
    while (runner != null){
        if (runner.next == max){ //capturing the node BEFORE the max 
            var beforeMax = runner
        }
    runner = runner.next;
    }

    beforeMax.next = max.next; //Sets the .next value of the node before the max to max's .next node
    tailNode.next = max; //Sets the .next value to the max, which will be the new tail
    max.next = null; //Sets the max value as the tail of the list
    return node
}


// appendValue(node, value, target)
// create a new node with the given value,
// then insert it into the linked list (represented
// by node) after the node with the target value.
// return the head
// if value is 7, target is 4 and the list is:
// 1 - 3 - 4 - 8 - 2
// output should be:
// 1 - 3 - 4 - 7 - 8 - 2
// if the target value does not exist within the list,
// insert your new node at the end
// again, we can split this into multiple parts:
// - create our node
// - find the target node within the list
// - insert our new node into the list
// - IF the target is not found, place node at end of list
// if the input linked list has zero nodes, just
// return the new node
// Creating a "ListNode" class and defining two internal functions--one to establish the class' value on creation, and the other to establish the next node in the list



// var d = new ListNode(3);
// var c = new ListNode(1, d);
// var b = new ListNode(9, c);
// var a = new ListNode(25, b);

function appendValue(node, value, target) {
    var newNode = new ListNode(value)
    var runner = node
    if(node == null) { // if list empty, return newNode
        return newNode
    }
    while (runner != null){ // walking through list nodes
        if (runner.value == target){  // exiting if target value found, with runner set to target
            break;
        }
        var tail = runner
        runner = runner.next
    }
    if (tail.next == null){ //if target not detected, add to end of list
        tail.next = newNode;
        newNode.next = null;
        return node;
    }
    newNode.next = runner.next; //adding in newNode after point of target
    runner.next = newNode;
    return node
}