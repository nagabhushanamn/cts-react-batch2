var trainer = {
    name: 'Nag',
    doTeach: function() {
        //var name = 'Nag';  // moved to heap before context-destroy for closures access
        console.log(this.name + ' teaching JS');
        var self = this;
        setTimeout(function() {
            try {
                // var i = 200;
                // if (i === 100) { // false
                //     throw new Error('ooops ,hate 100');
                // }
                console.log(self.name + " further teaching after timeout");
            } catch (e) {
                console.log('i caught ' + e.message);
            }
        }, 2000);
    }
};

trainer.doTeach();