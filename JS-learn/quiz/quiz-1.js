function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log('im ' + this.name);
    }
}


/*

        best-practice
        ---------------

        never invoke constructor func without 'new' keyword , else we r polluting
        globa-obj.


*/


//Person('Abc', 100); //   function-invocation  ( this --> global-obj )

var p1 = new Person('Abc',100);