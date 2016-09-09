function strict() {
    'use strict';
    function first() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('Hi');
            }, 300);
        });
    }
    function second(param) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(param);
            });
        });
    }

    var promise = first();
    promise.then(second).then(console.log);
}

strict();
