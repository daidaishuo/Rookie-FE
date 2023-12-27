let searchIndex = 0
let createSearchReq = (res, delay) => {
    let _searchIndex = ++searchIndex;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // // request completed
            if (_searchIndex === searchIndex) {
                resolve(res);
            } else {
                resolve({
                    msg: 'not last promise'
                });
            };
        }, delay);
    })
}

function search() {
    createSearchReq('1', 1000).then(res => console.log(res));
    createSearchReq('2', 1000).then(res => console.log(res));
    createSearchReq('3', 2000).then(res => console.log(res));
    createSearchReq('4', 500).then(res => console.log(res));
};
search();