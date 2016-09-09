function strict() {
    'use strict';
    var promise = new Promise(function (fulfill, reject) {
        setTimeout(function functionName() {
            reject(new Error('REJECTED!'));
        }, 300);
    });
    promise.then(null, function (error) {
        console.log(error.message);
    });

}

strict();
