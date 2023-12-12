
// 一、给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"，输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 输入: s = "pwwkew"，输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
function test(s) {
    let res = 0
    let len = s.length
    if (len === 1) {
        return 1
    }
    for (let left = 0; left < len; left++) {
        let hash = {}
        for (let right = left; right < len; right++) {
            if (hash[s[right]]) {
                break
            } else {
                hash[s[right]] = true
                res = Math.max(res, right - left +1)
            }
        }
    }
    return res
}
console.log(test('pwwkew'))


/