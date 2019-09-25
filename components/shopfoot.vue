<template>
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
</template>

<script>
</script>

<style lang="scss">
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
</style>
