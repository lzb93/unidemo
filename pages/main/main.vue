<template>
    <view>
        <view v-if="hasLogin" class="navtabs">
			<view>综合统计</view>
			<view class="navs-dinwei">
				<image src="../../static/img/home.png" @click="navstot"></image>
				<view class="main-navul" v-if="navsil">
					<view class="main-navli" v-for="item in main_nav">{{item.name}}</view>
				</view>
			</view>
           
        </view>
		<view class="maintop-bg">
			<view class="topbox">
				<view class="topli">今日</view>
				<view class="topli">昨日</view>
				<view class="topli">本周</view>
				<view class="topli">其他</view>
			</view>
			
		</view>
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
			<!--#endif-->
		</view>
		
		<view class="row h80">
			<view class="left" style="width: 60%;padding-left: 20upx;">收入统计</view>
		</view>
		
		<view class="row ulist">
			<view class="left" style="width: 60%;padding-left: 20upx;">总计</view>
			<view class="right tr">1542</view>
		</view>
		<view class="row ulist" v-for="item in boxs">
			<view class="icon">
				<image src="../../static/img/homeHL.png"></image>
			</view>
			<view class="left">{{item.name}}</view>
			<view class="right tr">{{item.money}}</view>
		</view>
		 <view class="title">
		    您好 {{userName}}，您已成功登录。
		</view>
		
    </view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
    import {
        mapState
    } from 'vuex';
	var _self;
	var canvaPie=null;
    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				navsil:false,
				main_nav:[{
					name:"商品分析" ,
					id:12
				},{
					name:"会员分析" ,
					id:12
				},{
					name:"会员账户" ,
					id:12
				},{
					name:"订单记录" ,
					id:12
				},{
					name:"员工提成" ,
					id:12
				},{
					name:"推荐返利" ,
					id:12
				},{
					name:"交班记录" ,
					id:12
				}],
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
				}],
				
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:''
				
		
				
			};
		},
		methods:{
			navstot(){
				this.navsil=!this.navsil;
				
			},
			
			getServerData(){
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let Pie={series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Pie.series=res.data.data.Pie.series;
						_self.textarea = JSON.stringify(res.data.data.Pie);
						_self.showPie("canvasPie",Pie);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showPie(canvasId,chartData){
				canvaPie=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'pie',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
			  border:true,
			  borderColor:'#FFFFFF',
			  borderWidth:3
						}
					},
				});
			},
			touchPie(e){
				canvaPie.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
				canvaPie.touchLegend(e,{animation:true});
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaPie.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			}
			

				
		},
			
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();

        }
    }
</script>

<style lang="scss">
    .navs-dinwei{
		
		position: absolute;
		width: 100%;
		top: 0;
		image{
			width: 60upx;
			height: 60upx;
			position: absolute;
			right: 15upx;
			top:12upx;
		}
		.main-navul{
			position: absolute;
			z-index: 999;
			color: #333;	
			width: 200upx;
			top:80upx;
			font-size: 15px;
			border-left:1px solid #f8f8f8;
			border-right:1px solid #f8f8f8;
			right: 10upx;
			.main-navli{
				width: 200upx;
				background: #fff;
				border-bottom:1px solid #f8f8f8;
				height: 80upx;
				line-height: 80upx;
			}
		}
		
	}

		

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
	
	.maintop-bg{
		background:linear-gradient(0deg,rgb(155, 216, 247),rgb(15, 174, 255) 100%);
		height: 240upx;
		
	}
	.topbox{
		border: 1px solid #fff;
		display: flex;
		width: 80%;
		border-right:8upx;
		margin: auto;
		
	}
	.topli{
		border-right: 1px solid #fff;
		text-align: center;
		width: 25%;
		color: #fff;
		line-height: 40upx;
		font-size: 24upx;
		
	}
	
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
		
</style>
