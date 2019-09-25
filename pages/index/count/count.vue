<template>
	<view>
		
			<!-- 搜索 -->
		<view class="pd10">
			<label class="sousuo">
				<input placeholder="搜索卡号/商品"/>
				<image src="../../../static/img/icon_scancode.png" style="width: 60upx;height:60upx;"></image>
			</label>
		</view>
		
		<view class="row tc">
			<view class="col-4">姓名<text>无</text></view>
    	    <view class="col-4">卡号<text>无</text></view>		
			<view class="col-4">余额<text>0.00</text></view>
    	    <view class="col-4">积分<text>0.00</text></view>					
		</view>
		
		  <!-- 底部定位栏 -->
		<view class="row foot-dingwei">
			<view class="left">
				<view class="">0种商品,共0次</view>
			</view>
			<view class="right tr">
				<button class="btn" type="primary">发送短信</button>
			</view>
		</view>
		
	</view>
	
</template>

<script>
</script>

<style lang="scss" scoped>
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
		justify-content:space-between;
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
		.left {
			width: 75%;
			padding-left: 25upx;
		}

		.right {
			width: 25%;
		}
	}		
</style>
