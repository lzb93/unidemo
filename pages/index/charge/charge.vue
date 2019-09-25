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
		<view class="row">
			<view class="" style="width: 25%;">
				<view class="leftlist " :class="index==onindex? 'active':''" v-for="(item,index) in list" :key="index" @click="navstab(index)">{{item}}</view>
			</view>
			<view class="" style="width: 75%;">
				<block v-for="(item,index) in boxs" :key="index">
					<view class="row ulist headlist"  @click="herf('../../list/list')">
						<view class="left"  style="width: 90%;padding-left: 10upx;">
							<view class="heads">
								<image src="../../../static/img/qq.png"></image>
							</view>
							<view class="head-name" >
								<view class="">{{item.name}}</view>
								<text class="">{{item.tel}} {{item.money}}</text>
							</view>
				
				
						</view>
						<view class="right tr" style="width: 10%;">
							<view class=" icon-right"></view>
						</view>
					</view>
				
				</block>
			</view>
		</view>
		
		
		<view class="xuanfu" @click="herf('../../from/from')">+</view>
		<shopfoot></shopfoot>




	</view>
</template>

<script>
	import shopfoot from '../../../components/shopfoot.vue';
	export default {

		data() {
			return {
				onindex:0,
				boxs: [{
					name: "今日销售",
					money: "12323",
					tel: "15396245411"

				}, {
					name: "今日销售",
					money: "DFD",
					tel: "15396245412"
				}],
				list:["sjii","哇i23","39ifko"]

			};
		},
		components:{
			shopfoot
		},
		onLoad() {

		},
		methods: {
			herf(url){
				uni.navigateTo({
					url: url
				});
			},
			navstab(index){
				this.onindex=index;
				
			}
				

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

	
	.xuanfu{
		width: 100upx;
		height: 100upx;
		background: #007aff;
		text-align: center;
		// line-height: 100upx;
		font-size: 72upx;
		font-weight: 600;
		position: fixed;
		bottom: 30upx;
		right: 30upx;
		color: #fff;
		border-radius: 100%;
		box-shadow:1px 1px 1px #f8f8f8;
	}
	.leftlist{
		width: 100%;
		border-bottom: 1px solid #f8f8f8;
		border-right: 3px solid #f8f8f8;
		text-align: center;
		line-height: 100upx;
		border-left: 3px solid #fff;
		background: #fff;
		font-size: 28upx;
		
		
	}
	.headlist .head-name text{
		font-size:22upx;
		
	}
	.active{
		border-left: 3px solid #007aff;
		color: #007aff;
		
	}
		
		
</style>
