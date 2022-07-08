function ajax(option) {
  // 1 如果没指定请求类型,默认为GET
  const type = option.type || 'GET',
    url = option.url,
    success = option.success,
    // 2 异步请求(async为true)
    async = option.async || true,
    // 3 转化为查询字符串格式
    params = option.params
      ? Object.keys(option.params)
          .map((key) => `${key}=${option.params[key]}`)
          .join('&')
      : '',
    data = option.data
      ? Object.keys(option.data)
          .map((key) => `${key}=${option.data[key]}`)
          .join('&')
      : ''
  let xhr = null
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    // 4 兼容IE浏览器
    xhr = new ActiveXObject()
  }
  xhr.open(type, `${url}?${params}`, async)
  if (type.toUpperCase() === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  }
  xhr.send(data)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success && success(JSON.parse(xhr.responseText))
    }
  }
}
