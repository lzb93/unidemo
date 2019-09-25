<template>
	<view>
		<!-- 搜索 -->
		<view class="pd10">
			<label class="sousuo">
				<input placeholder="搜索卡号/商品"/>
				<image src="../../../static/img/icon_scancode.png" style="width: 60upx;height:60upx;"></image>
			</label>
		</view>
		
		<!-- 列表 -->
		<block v-for="(item,index) in boxs" :key="index">
			<view class="row ulist headlist"  @click="herf('../vip/vip')">
				<view class="icon">
					<image src="../../../static/img/unselect.png" style="width: 40upx;height:40upx;margin-top: 20upx;"></image>
				</view>
				<view class="left">
					<view class="heads">
						<image src="../../../static/img/qq.png"></image>
					</view>
					<view class="head-name">
						<view class="">{{item.name}}</view>
						<text class="">{{item.tel}}</text>
					</view>


				</view>
				<view class="right tr">
					<view class=" icon-right"></view>
				</view>
			</view>

		</block>

        <!-- 底部定位栏 -->
		<view class="row foot-dingwei">
			<view class="icon">
				<image src="../../../static/img/unselect.png" style="width: 40upx;height:40upx;margin:0 15upx; vertical-align: middle;"></image>全选
			</view>
			<view class="left">
				<view class="">121212</view>
			</view>
			<view class="right tr">
				<button class="btn" type="primary">发送短信</button>
			</view>
		</view>
		
		<view class="xuanfu" @click="herf('../../from/from')">+</view>




	</view>
</template>

<script>
	export default {

		data() {
			return {

				boxs: [{
					name: "今日销售",
					money: "12323",
					tel: "15396245411"

				}, {
					name: "今日销售",
					money: "DFD",
					tel: "15396245412"
				}]

			};
		},
		onLoad() {

		},
		methods: {
			herf(url){
				uni.navigateTo({
					url: url
				});
			},

		}
	}
</script>

<style lang="scss">
	.pd10{
		padding: 20upx;

	}
	.sousuo{
		input{
			line-height: 60upx;
			height: 60upx;
		}
		width: 100%;
		height: 80upx;
		background: #FFFFFF;
		padding: 8upx;
		display: flex;
		justify-content:space-between
	}
		
		
	.cont {
		height: 80upx;
		line-height: 80upx;
	}

	.foot-dingwei {
		height: 100upx;
		position: fixed;
		bottom: 0;
		width: 100%;
		line-height: 100upx;
		background: #FFFFFF;
		font-size: 28upx;
		border-top: 1px solid #f8f8f8;

		.icon {
			width: 20%;
		}

		.left {
			width: 55%;
		}

		.right {
			width: 25%;
		}
	}
	
	.xuanfu{
		width: 100upx;
		height: 100upx;
		background: #007aff;
		text-align: center;
		// line-height: 100upx;
		font-size: 72upx;
		font-weight: 600;
		position: fixed;
		bottom: 130upx;
		right: 30upx;
		color: #fff;
		border-radius: 100%;
		box-shadow:1px 1px 1px #f8f8f8;
	}
		
</style>
