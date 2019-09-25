<template>
	<view>
		<view class="row tc">
		    <view class="col-4 iconwarp" @click="herf('../from/from')">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">新增会员</view>
			</view>
			 <view class="col-4 iconwarp" @click="thirdLogins">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">会员管理</view>
			</view>
			 <view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">商品管理</view>
			</view>
			 <view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">消费计次</view>
			</view>
			 <view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">会员充值</view>
			</view>
			 <view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">会员冲次</view>
			</view>
			
			<view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">积分加减</view>
			</view>
			 <view class="col-4 iconwarp" @click="herf('../index/tool/tool')">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">更多工具</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.row{
		background: #fff;
	}

</style>
