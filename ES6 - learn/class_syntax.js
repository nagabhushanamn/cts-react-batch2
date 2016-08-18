"use strict";

// class Task {

// }

// console.log(typeof Task);

// let task = new Task();
// console.log(typeof task);
// console.log(task instanceof Task);

//---------------------------------------


// let task = new Task();  // Error . Use before declaration

class Task {

    constructor() {
        console.log('constructing Task');
    }

    showId() {
        console.log('999');
    }

}

let task = new Task();
//task.showId();
//console.log(task.showId === Task.prototype.showId);


Task.prototype.newMethod = function() {
    console.log('new method...');
}

task.newMethod();

//---------------------------------------

// let newClass = class Task {
//     constructor() {
//         console.log('constructing Task');
//     }
// }

// new newClass();

//---------------------------------------


// let Task = function() {
//     console.log('constructing Task');
// }

// let task = {};
// Task.call(task);

//---------------------------------------

// class Task {
//     constructor() {
//         console.log('constructing Task');
//     }
// }

// let task = {};
// Task.call(task);

// new Task();

//---------------------------------------


// extends and super


// class Project {
//     constructor(name) {
//         console.log('constructing project - ' + name);
//     }
// }

// class SoftwareProject extends Project {

// }

// let sp = new SoftwareProject('react');

//--------------------------------------------------------


// class Project {
//     constructor() {
//         console.log('constructing project');
//         this.location = 'chennai';
//         let loc = 123;
//     }
//     getTaskCount() {
//         return 50;
//     }

//     static getDefaultId() {
//         return 100;
//     }

// }

// class SoftwareProject extends Project {
//     constructor() {
//         super();
//         console.log('constructing SoftwareProject');
//     }
//     getTaskCount() {
//         return super.getTaskCount() + 500;
//     }
// }

// let sp = new SoftwareProject('react');
// console.log(sp.getTaskCount());
// console.log(sp.location);

// console.log(Project.getDefaultId());


// Project.staMethod = function() {
//     console.log('static...');
// }

// Project.staMethod();

// var p = new Project();
// // p.staMethod(); // Error