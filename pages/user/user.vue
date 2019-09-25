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
				
				<view class="utop-dingwei">超级管理员</view>
			</view>
			<view class="utop-bottom row">
				<view class="col-2"><image src="../../static/img/home.png"></image>消息</view>
				<view class="col-2"><image src="../../static/img/home.png"></image>设置</view>
			</view>
			
		</view>
		<navigator url="../list/list" v-for="item in boxs">
			<view class="row ulist" >
				<view class="icon">
					<image src="../../static/img/homeHL.png"></image>
				</view>
				<view class="left">{{item.name}}</view>
				<view class="right tr"> <view class=" icon-right"> {{item.money}}</view></view>
			</view>
		</navigator>
		
		
		
		
        <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view>
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
					name:"今日销售" ,
					money:12
				},{
					name:"今日销售" ,
					money:''
				},{
					name:"今日销售" ,
					money:''
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
            }
        }
    }
</script>

<style lang="scss">
	.user-top{
		background:linear-gradient(0deg,rgb(155, 216, 247),rgb(15, 174, 255) 100%);
		height: 300upx;
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
