(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/from/from"],{4072:function(t,a,i){"use strict";i("36c0");var e=n(i("b0ce")),s=n(i("ac69"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))},ac69:function(t,a,i){"use strict";i.r(a);var e=i("bed1"),s=i("cc0e");for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);i("f827");var r=i("2877"),c=Object(r["a"])(s["default"],e["a"],e["b"],!1,null,null,null);a["default"]=c.exports},bed1:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("view",[i("form",[i("view",{staticClass:"row ulist"},[i("view",{staticClass:"left",staticStyle:{width:"60%","padding-left":"20rpx"}},[t._v("总计"),i("text",{staticClass:"mizf"},[t._v("*")])]),i("view",{staticClass:"right tr"},[i("input",{staticClass:"mt10",attrs:{placeholder:"测试"}})])]),i("view",{staticClass:"row ulist"},[i("view",{staticClass:"left",staticStyle:{width:"60%","padding-left":"20rpx"}},[t._v("总计")]),i("view",{staticClass:"right tr"},[i("input",{staticClass:"mt10",attrs:{placeholder:"测试"}})])]),i("view",{staticClass:"row ulist"},[i("view",{staticClass:"left",staticStyle:{width:"60%","padding-left":"20rpx"}},[t._v("总计")]),i("view",{staticClass:"right tr"},[i("input",{staticClass:"mt10",attrs:{placeholder:"测试"}})])]),i("view",{staticClass:"row ulist"},[i("view",{staticClass:"left",staticStyle:{"padding-left":"20rpx"}},[t._v("总计")]),i("view",{staticClass:"right tr"},[i("input",{staticClass:"mt10",attrs:{placeholder:"测试"}})]),i("view",{staticClass:"icon"},[i("image",{attrs:{src:"../../static/img/homeHL.png"}})])]),i("view",{staticClass:"row ulist"},[i("view",{staticClass:"left",staticStyle:{"padding-left":"20rpx"}},[t._v("日历")]),i("view",{staticClass:"right tr"},[i("input",{staticClass:"mt10",attrs:{placeholder:"测试"}})]),i("view",{staticClass:"icon"},[i("image",{attrs:{src:"../../static/img/homeHL.png",eventid:"8db249a6-0"},on:{click:t.open}})])]),i("view",{staticClass:"row ulist"},[i("view",{staticClass:"left",staticStyle:{"padding-left":"20rpx",width:"60%"}},[t._v("选择器")]),i("view",{staticClass:"right tr"},[i("picker",{attrs:{value:t.index,range:t.array,eventid:"8db249a6-1"},on:{change:t.bindPickerChange}},[i("view",{staticClass:"uni-input mt10 icon-right"},[t._v(t._s(t.array[t.index]))])])],1)]),i("view",{staticClass:"btn-row row"},[i("button",{staticClass:"primary",attrs:{type:"primary",eventid:"8db249a6-2"},on:{tap:t.bindLogin}},[t._v("保存")]),i("button",{staticClass:"primary",attrs:{type:"primary",eventid:"8db249a6-3"},on:{tap:t.bindLogin}},[t._v("继续添加")])],1),i("uni-calendar",{ref:"calendar",attrs:{insert:!1,eventid:"8db249a6-4",mpcomid:"8db249a6-0"},on:{confirm:t.confirm}})],1)],1)},s=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return s})},c771:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=s(i("06a5"));function s(t){return t&&t.__esModule?t:{default:t}}var n={components:{uniCalendar:e.default},data:function(){return{array:["中国","美国","巴西","日本"],index:0,boxs:[{name:"今日销售",money:12},{name:"今日销售",money:""},{name:"今日销售",money:""}]}},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},change:function(t){console.log(t)},open:function(){this.$refs.calendar.open()},confirm:function(t){console.log(t)}}};a.default=n},cc0e:function(t,a,i){"use strict";i.r(a);var e=i("c771"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,function(){return e[t]})}(n);a["default"]=s.a},f827:function(t,a,i){"use strict";var e=i("f878"),s=i.n(e);s.a},f878:function(t,a,i){}},[["4072","common/runtime","common/vendor"]]]);