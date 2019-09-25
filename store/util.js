/**
 * +----------------------------------------------------------------------
 * | InitAdmin/vue-admin [ InitAdmin渐进式模块化通用后台 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2018-2019 http://initadmin.net All rights reserved.
 * +----------------------------------------------------------------------
 * | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * +----------------------------------------------------------------------
 * | Author: jry <ijry@qq.com>
 * +----------------------------------------------------------------------
*/
// 2、在main.js中全局引入
// import util from './libs/util';
// Vue.prototype.util = util
// 
// 3、在页面中调用
// 
// async onShow() {
//     let res = await this.util.request({
//         url: '/api1',
//         method: 'get',
//         data: {
//             id: id
//         }
//     });
//     console.log(res);
//     if (res.data.status != 1) {
//         uni.showToast({
//             title: '提示',
//             icon: 'none',
//             duration: 1500
//         });
//     }
// }

import vue from '../main.js'
let util = {};

// request
util.request = function ({
	method = "GET",
    url,
    data,
    success,
    fail,
    complete
}) {
    // 请求
	if (0 != url.indexOf("http")) {
        url = util.baseUrl() + url
    }
    var header = {
        'content-type': 'application/json'
    }
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: method,
			data: data,
			header: header,
			dataType: 'json',
			success: success,
			fail: (res) => {
				let ret = new Object()
				ret.code = 0
				// ret.msg = res.errMsg
				ret.msg = '接口或网络异常'
				reject(ret)
			},
			complete: (res) => {
				if (res.statusCode === 200) { //成功
					resolve(res.data)
				} else {
					let ret = new Object()
					ret.code = 0
					ret.msg = res.errMsg
					reject(ret)
				}
			}
		})
	});
};

export default util;
export function get(url, data = {}, ) {
    return util.request({url:url,data:data,method:'GET'})
}
export function post(url, data = {}) {
   return util.request({url:url,data:data,method:'POST'})
}
