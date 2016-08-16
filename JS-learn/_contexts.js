/*

    Execution Context
    ------------------

    memory/context holds all local and arg variables to execute set of instructions.

   

    execution-context - 2 phases
    ===========================

     1st - context-creation:

        --> all the variables declared any-where, they are hoisted(lifting up)
            to top of context with default value ( undefined )


     2nd - context-execution:

        --> all the instructions execute in sequence


    -------------------------------------------------------------------


    imp note :-

    -->  by default every JS-runtme has one 'global-execution-context' ,
         created when JS-runtme booted

        after , JS runtme will create one 'global-obj'

        in browser  --> 'window'  === this

        in NodeJS   --> 'global'

        
     --> all global variables , will become properties 'global-obj'



    --------------------------------------------------------------------


        best-practice

        always declare variables top of js-file/function to avoid hoisting confuse

    --------------------------------------------------------------------

    every function-invocation , also creates one new-execution-context which is child of
    above context. 



*/




// --------------------------------------------------------------------

//console.log('hello.......');


// console.log(a);
// var a = 12;

//  --------------------------------------------------------------------


// var a = 12;

// function f1() {
//     var a = undefined;
//     console.log(a);
//     var a = 13;
// }

// f1(); // creates new-context

//  --------------------------------------------------------------------

// Quiz-1

var a = 12;

function f1() {

    function f2() {
        console.log(a);
    }

    //f2(); // f2-context child-of f1-context

    //var a = 13;

    //f2(); // f2-context child-of f1-context

    return f2;
}

var f2 = f1(); // f1-context   child-of 'global-context'

f2(); // f2-context child-of f1-context

//  --------------------------------------------------------------------