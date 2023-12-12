let url = 'https://m.kwai.com/photo/150001348762740/5237273520015174653?userId=150001348762740&photoId=5237273520015174653&cc=COPY_LINK&timestamp=1676293042490&language=zh-cn&share_device_id=ANDROID_5e1680ef9697b299&share_uid=150001375631008&share_id=ANDROID_5e1680ef9697b299_1676293040842&sharePage=photo&share_item_type=photo&share_item_info=5237273520015174653&fid=150001375631008&et=1_a%2F4765859780539496992_se2325&shareEnter=1&kpn=KWAI&translateKey=catarandom_text9_082302&shareBucket=spa&shareCountry=BRA&shareBiz=photo&short_key=ebPCCLxK'

function getQuery() {
    let searchParams = new URLSearchParams(window.location.search)
    let res = {}
    for (let [key, value] of searchParams) {
        res[key] = value
    }
    return res
}

// 方法2
let a = `?hl=zh-CN&sl=auto&tl=zh-CN&text=Lexical%20analysis%20(scanning)%3A%20The%20first%20step%20in%20the%20compilation%20process%20is%20lexical%20analysis%2C%20also%20known%20as%20scanning.%20The%20TypeScript%20compiler%20scans%20the%20input%20source%20code%20and%20breaks%20it%20down%20into%20individual%20tokens%20(such%20as%20keywords%2C%20identifiers%2C%20literals%2C%20operators)%20through%20a%20process%20called%20tokenization&op=translate`
function queryToObj(queryStr) {
  let params = new URLSearchParams(queryStr)
  let res = {}
  console.log(params.entries())
  for (let [key, value] of params.entries) {
    if (!res[key]) {
      res[key] =  convertValue(value)
    } else if (Array.isArray(result[key])) {
      result[key].push(convertValue(value));
    } else {
      result[key] = [result[key], convertValue(value)];
    }
  }
  return res
}
const convertValue = (value) => {
  return isNaN(value) ? value : Number(value)
}
queryToObj(a)
