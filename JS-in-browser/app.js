document.addEventListener('DOMContentLoaded', function(e) {

    console.log('DOM ready');
    // using DOM API

    // query 

    var box = document.querySelector('.jumbotron');
    var hideBtn = document.querySelector('.btn-danger');
    var showBtn = document.querySelector('.btn-primary');

    // bind event-listeners

    hideBtn.addEventListener('click', function(e) {
        box.style.display = 'none';
    });
    showBtn.addEventListener('click', function(e) {
        box.style.display = '';
    });

});