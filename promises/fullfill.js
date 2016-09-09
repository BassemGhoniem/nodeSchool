function strict() {
    'use strict';
    var promise = new Promise(function (fulfill, reject) {
        setTimeout(function functionName() {
            fulfill('FULFILLED!');
        }, 300);
    });
    promise.then(function (result) {
        console.log(result);
    });
}

strict();
