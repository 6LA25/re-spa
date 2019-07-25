// 解析url参数
export function getQueryString(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = decodeURI(location.search.substr(1)).match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return null
}
