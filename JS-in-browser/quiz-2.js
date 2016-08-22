/*

   event-listener always binded with event-emiiter ( context-obj )

*/


var tnrService = {
    doTeach: function() {
        console.dir(this);
        console.log(this.name + " going to teach React");
    }
};

var trainer = {
    name:'Nag'
}

var reactBtn = document.getElementById('reactBtn');
//reactBtn.addEventListener('click', tnrService.doTeach);
reactBtn.addEventListener('click', tnrService.doTeach.bind(trainer));

// reactBtn.addEventListener('click', function (e) { 
//     tnrService.doTeach.call(trainer);       
// });