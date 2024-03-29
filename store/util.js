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
	login,
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
	if(login){
		// ym: (Code,data,vi 请求bind接口获取id 拼接出Authorization作为用户登录凭证)
		
		var header = {
		    'content-type': 'application/json',
			'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NjJ9._vDoDQFKnhxj83vQS-rnsyjE_rjVVQ7-SATGpVgUINY',
			'X-WX-Code': '011Is9Te1sNzzy0AHnSe1WhnTe1Is9To',
			'X-WX-Encrypted-Data': 'BPsTfSliBTKULjCk5byHhuVgkL2sxpzyspNMJNz0s0Dcuo6jERbQZbuPv+kS1nvpVFgb9BZdtbotvcuHRkzVP91rQJQNriW4nBUPwp6lA+I6zjCDu7853lacmJ9JNSfMpwyRlEeVRJx5N9E0vE8cSSeK7kG12/P2x2B3ar7A9BmgybTqP6x9+3QW1pNsVGhnJuYkBsFJBajvKA5cVOwhARZQRG3cTCNuR2eB56CDCjXf36UNtQzsBZQ9BNn3wpnEIbPt6jc319avAabzD3OmVewEJQNJedNeDajPDejZhJLEbV7WvQ0DeuCfBH3oETQvJjQ+hkile/FSpHE9j/Gg41AJbK4Ai3QQisRhAJ3lDVUUqDnV2HCV7xQlN+OR39QhZblby9EHTMzFDBofF+BtpGB708NKUO1NDWk5JbF6laatYGSWGvomAHfljkbI5sZz7SDDD+hq+l1kgRj8BxB8VQ==',
			'X-WX-IV':'nbgeZbgszsRZuhAD9XwWHQ=='
		}
	}else{
		var header = {
		    'content-type': 'application/json'
		}
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
export function get(url, data = {},login ) {
    return util.request({url:url,data:data,method:'GET',login:login||false})
}
export function post(url, data = {},login) {
   return util.request({url:url,data:data,method:'POST',login:login||true})
}
