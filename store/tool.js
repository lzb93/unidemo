// 工具类文件

//时间戳转成日期
export function js_date_time(unixtime,type) {
  var dateTime = new Date(parseInt(unixtime) * 1000)
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescript转换写法  
  var milliseconds = now_new - dateTime;
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute  
  }
  if (second < 10) {
    second = '0' + second
  }
  if(type=0){
	  var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  }else if(type=1){
	  var timeSpanStr = year + '.' + month + '.' + day;
  }
  return timeSpanStr;
}

// 对象形式参数转url形式参数 a=1&b=2
export function json2Form(json) {
  let str = []
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]))
  }
  return str.join("&")
}
// 地址加上参数
export function modifyUrl(url, params) {
  params = json2Form(params)
  if (url.indexOf('?') != -1) {
    url = url + '&' + params
  } else {
    url = url + '?' + params
  }
  return url
}
// 随机一个任意长度的字符串
export function randomString(len) {
  len = len || 32
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const maxPos = chars.length;
  let pwd = ''
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * (maxPos + 1)))
  }
  return pwd
}
