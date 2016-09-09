function strict() {
    'use strict';
    var promise = Promise.reject(new Error('I DID NOT FIRE'));
    promise.catch(function (error) {
        console.log(error.message);
    });

}

strict();
