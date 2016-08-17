/*

A closure is a function having access to the parent scope,
even after the parent function has closed.

when to use ? or adv

  --> to abstract public behav of any modules.
  --> while executing functions asychronously , able to access parent-scoped data.

*/


function teach(sub) {
    console.log('teaching....' + sub);

    var notes = sub + " notes";
    var i = 100;

    function learn() {
        console.log('learning with ' + notes);
    }

    console.log('teaching...end');

    return learn;

} // context-destroyed ( all args & local variables removed from stack-memory)


var learnFunc = teach("JS"); // new-context with args & local variables

learnFunc();
learnFunc();