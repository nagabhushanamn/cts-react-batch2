function startReactSession() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function() {
            console.log(this.name + ' teaching JS');

            var self = this;

            function doLearn() {
                console.log(this.name + ' Learning JS from ' + self.name);
            }
            return doLearn;
        }
    }

    var nagTnr = new Trainer('Nag'); // constructor-invocation
    var learnFunc = nagTnr.doTeach(); // method-invocation

    var emp1 = { name: 'A' };
    var emp2 = { name: 'B' };

    learnFunc.call(emp1); // call/apply/bind invocation
    learnFunc.call(emp2);
}

startReactSession(); // function-invocation