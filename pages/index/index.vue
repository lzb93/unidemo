<template>
	<view >
		<view class="row"><image class="banner" src="../../static/img/home.png"></image></view>
		
		<view class="row tc">
		    <view class="col-4 iconwarp" @click="herf('../from/from')">
				<image class="" src="../../static/img/index/inicon (1).png"></image>
				<view class="">新增会员</view>
			</view>
			 <view class="col-4 iconwarp"  @click="herf('viplist/viplist')">
				<image class="" src="../../static/img/index/inicon (1).png"></image>
				<view class="">会员管理</view>
			</view>
			 <view class="col-4 iconwarp"  @click="herf('shoplist/shoplist')">
				<image class="" src="../../static/img/index/inicon (2).png"></image>
				<view class="">商品管理</view>
			</view>
			 <view class="col-4 iconwarp" @click="herf('count/count')">
				<image class="" src="../../static/img/index/inicon (8).png"></image>
				<view class="">消费计次</view>
			</view>
			 <view class="col-4 iconwarp" @click="herf('charge/charge')">
				<image class="" src="../../static/img/index/inicon (7).png"></image>
				<view class="">会员充值</view>
			</view>
			 <view class="col-4 iconwarp" @click="herf('second/second')">
				<image class="" src="../../static/img/index/inicon (6).png"></image>
				<view class="">会员冲次</view>
			</view>
			
			<view class="col-4 iconwarp" @click="herf('integral/integral')">
				<image class="" src="../../static/img/index/inicon (10).png"></image>
				<view class="">积分加减</view>
			</view>
			 <view class="col-4 iconwarp" @click="herf('tool/tool')">
				<image class="" src="../../static/img/index/inicon (11).png"></image>
				<view class="">更多工具</view>
			</view>
		</view>
		
		<view class="bgfff box">
			<view class="navs col-1">标题</view>
			<view class="row tc">
				<view class="col-4 iconwarp">
					<image class="" src="../../static/img/home.png"></image>
					<view class="">会员冲次</view>
				</view>
				<view class="col-4 iconwarp">
					<image class="" src="../../static/img/home.png"></image>
					<view class="">会员冲次</view>
				</view>
				<view class="col-4 iconwarp">
					<image class="" src="../../static/img/home.png"></image>
					<view class="">会员冲次</view>
				</view>
				<view class="col-4 iconwarp">
					<image class="" src="../../static/img/home.png"></image>
					<view class="">会员冲次</view>
				</view>
				<view class="col-4 iconwarp">
					<image class="" src="../../static/img/home.png"></image>
					<view class="">会员冲次</view>
				</view>
			</view>
		</view>
		
		<view class="bgfff box">
			<view class="navs col-1">标题</view>
			<view class="row tc">
				<view class="col-3 bgbox" v-for="item in boxs" >
					<view class="bos">
						<view class="">{{item.name}}</view>
						<view class="">{{item.money}}元</view>
					</view>
				</view>
			
			</view>
		</view>
		
		

		

	</view>
</template>

<script>
	import {uniListItem,uniList} from '@dcloudio/uni-ui';
	import {thirdLogin,channel} from '../../store/api.js';
	export default {
		components: {uniListItem,uniList},
		data() {
			return {
				content: '一段短文字',
				boxs:[{
					name:"今日销售" ,
					money:12
				},{
					name:"今日销售" ,
					money:12
				},{
					name:"今日销售" ,
					money:12
				},{
					name:"今日销售" ,
					money:12
				},{
					name:"今日销售" ,
					money:12
				},{
					name:"今日销售" ,
					money:12
				}]
				
			};
		},
		onLoad() {
		     // uni.setStorage('ceshi',"你好测试");
			uni.setStorage({
			    key: 'ceshi',
			    data: '你好测试',
			    success: function () {
			        
					uni.getStorage({
					    key: 'ceshi',
					    success: function (res) {
					        console.log(res.data);
					    }
					});
			    }
			});
			 
			 this.channel({ group:'home',sort:'sort',by:'asc'});
		},
		methods: {
			herf(url){
				uni.navigateTo({
					url: url
				});
			},
			async channel(params) {
			    let result = await channel(params);
				if(result.status==0){
					
				}else{
					uni.showModal(result.msg)
				}
			}
			// channel(params){
			//     channel(params).then(data => {
			// 		console.log(data)
			// 
			//       if (data.status == 0) {
			// 			uni.showActionSheet({
			// 				itemList: ['A', 'B', 'C'],
			// 				success: function (res) {
			// 					console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
			// 				},
			// 				fail: function (res) {
			// 					console.log(res.errMsg);
			// 				}
			// 			});
			//       } else {
			//         alert(msg);
			//       }
			//     })
			//   },
		}
	}
</script>

<style lang="scss" scoped>
	.banner{
		height: 400upx;
		width: 100%;
	}
	
	.row{
		background: #fff;
	}
	.box{
		margin-top: 20upx;
		.navs{
			padding: 15upx;
			line-height: 50upx;
			border-bottom: 1px solid #f8f8f8;
		}
	}
	.bgbox{
		padding: 15upx;
		.bos{
			text-align: left;
			border-radius: 20upx;
			background:linear-gradient(90deg,red,rgba(200,45,7,1) 100%);
			color: #fff;
			font-size: 24upx;
			padding: 15upx ;
			view:nth-child(1){
				margin-bottom:30upx; 
			}
	
		}
	}
	
	
		

	
	

</style>
