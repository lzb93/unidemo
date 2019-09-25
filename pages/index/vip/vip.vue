<template>
    <view >
		<view class="user-top">
			<view class="utop-top">
				<view class="utop-head">
					<image src="../../static/img/home.png"></image>
					<view class="utop-name">
						<view >{{userName||"游客"}}</view>
						<view>店铺名称:默认</view>
					</view>
				</view>
				
				<view class="utop-dingwei"  @click="herf('../../from/from')">基础信息</view>
			</view>
		</view>
		
		<view class="row tc">
		    <view class="col-4 iconwarp" @click="herf('../../from/from')">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">会员充值</view>
			</view>
			 <view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">会员充次</view>
			</view>
			 <view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">商品消费</view>
			</view>
			 <view class="col-4 iconwarp">
				<image class="" src="../../../static/img/home.png"></image>
				<view class="">消费计次</view>
			</view>
			
		</view>
		
		<navigator url="../../list/list" v-for="item in boxs">
			<view class="row ulist" >
				<view class="icon">
					<image src="../../../static/img/homeHL.png"></image>
				</view>
				<view class="left">{{item.name}}</view>
				<view class="right tr"> <view class=" icon-right"> {{item.money}}</view></view>
			</view>
		</navigator>
		<navigator url="../../list/list" style="margin-top: 20upx;">
			<view class="row ulist" >
				<view class="icon">
					<image src="../../../static/img/homeHL.png"></image>
				</view>
				<view class="left">计次卡</view>
				<view class="right tr"> <view class=" icon-right"></view></view>
			</view>
		</navigator>
		
		
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
		data() {
			return {
				boxs:[{
					name:"历史消费" ,
					money:12
				},{
					name:"储值余额" ,
					money:2232
				},{
					name:"会员积分" ,
					money:112
				}]
				
			};
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin', 'userName'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            },
			herf(url){
				uni.navigateTo({
					url: url
				});
			},
        }
    }
</script>

<style lang="scss">
	.user-top{
		background:linear-gradient(0deg,rgb(155, 216, 247),rgb(15, 174, 255) 100%);
		height: 200upx;
		margin-bottom: 20upx;
		
	}
	.utop-top{
		height: 200upx;
		position: relative;

	}
	.utop-bottom{
		height: 100upx;
		margin-left: 20upx;
		border-top: 1px solid #fff;
		position: relative;
		line-height: 80upx;
		color: #fff;
		view{
			font-size: 36upx;
		}
			
		image{
			width: 60upx;
			height: 60upx;
			margin: 10upx;
			float: left;
		}
		
	}
	.utop-head{
		image{
			width: 100upx;
			height: 100upx;
			position: absolute;
			top: 30upx;
			left: 20upx;
			border-radius: 100%;
			border:1upx solid #fff;
		}
		.utop-name{
			position: absolute;
			top: 40upx;
			left: 140upx;
			color: #FFFFFF;
		}
		
		
	}
	.utop-dingwei{
		position: absolute;
		top: 40upx;
		right: 0upx;
		color: #FFFFFF;
		background: #057AFF;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		width: 150upx;
		
		
	}
	

</style>
