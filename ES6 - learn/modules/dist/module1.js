define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.doIt = doIt;
    // export let productId = 123;
    // export let productName = "Laptop";

    //---------------------------------


    // let productId = 123;
    // let productName = "Laptop";

    // export { productId, productName };

    //-----------------------------------


    // export let productId = 123;
    // let productName = "Laptop";
    // export default productName;

    //------------------------------------

    // let productId = 123;
    // let productName = "Laptop";
    // export {default as productName,productId};

    //------------------------------------


    // export let product = {
    //     id: 1234,
    //     name: 'Laptop'
    // };

    //-----------------------------------

    function doIt() {
        console.log('doing something...');
    }

    console.log('in module1');
});