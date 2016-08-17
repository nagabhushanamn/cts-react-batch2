function Person(name, age) {
    this.pname = name;
    this.age = age;

    // var self = this;

    // setInterval(function() {
    //     self.age++;
    //     console.log(self.pname + "-->" + self.age);
    // }, 1000);

    //-------------------------------------

    function agePlus() {
        this.age++;
        console.log(this.pname + "-->" + this.age);
    }

    setInterval(agePlus.bind(this), 1000);

    //-------------------------------------

}


var p1 = new Person('Ria', 0);