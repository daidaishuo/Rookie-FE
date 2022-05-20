let PromiseWithAbort = function (promise) {
    let _abort = null;
    let Pabort = new Promise((res, rej) => {
        _abort = function (reason = 'abort !') {
            console.warn(reason);
            rej(reason);
        }
    });

    let race = Promise.race([promise, Pabort]);
    race.abort = _abort;
    console.log(promise, Pabort);
    return race;
}