/* 
    www.google.com
    com.google.www
    入参domain:['w', 'w', 'w', '.','g', 'o', 'o', 'g','l', 'e', '.', 'c','o', 'm']
    不允许使用额外空间和库函数，原地反转
*/
const swap = (num, i, j) => {
    let temp = num[i];
    num[i] = num[j];
    num[j] = temp;
}
const domain = 'www.google.com'.split('');

const reverseDomain = (domain) => {
    let left = 0;
    let right = domain.length - 1;
    while (left < right) {
        swap(domain, left, right);
        left++
        right--
    }
    left = 0
    right = 0
    while (true) {
        if (right === domain.length - 1) {
            let swapLeft = left;
            let swapRight = right;
            while (swapLeft < swapRight) {
                swap(domain, swapLeft, swapRight)
                swapLeft++;
                swapRight--;
            }
            break
        }
        if (domain[right] === '.') {
            let swapLeft = left;
            let swapRight = right - 1;
            while (swapLeft < swapRight) {
                swap(domain, swapLeft, swapRight)
                swapLeft++;
                swapRight--;
            }
            left = right + 1
        }
        right++
    }
    return domain
}
reverseDomain(domain)
