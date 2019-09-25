<template>
    <view>
		<view class="">
			<view class=" ulist headlist"  @click="herf('../../list/list')">
				<view class="row"  style="padding-left: 20upx;">
					<view class="heads" style="width: 20%;">
						<image src="../../static/img/qq.png"></image>
					</view>
					<view class="head-name" style="width: 70%;">
						<view class="" style="border-bottom:1px solid #dcdcdc;">2323}</view>
						<text class="">2131232</text>
					</view>
				</view>
			</view>	
		</view>
		
        <block v-for="(item,index) in boxs" :key="index">
			<swipeAction  :optionss="item.options">
				<view  class="row ulist" >
					<view class="icon">
						<image src="../../static/img/homeHL.png"></image>
					</view>
					<view class="left">{{item.name}}</view>
					<view class="right tr">{{item.money}}</view>
				</view>
				
			</swipeAction>
			<!-- <uni-swipe-action  :options="options"  @click="bindClick" >
				<view  class="row ulist" >
					<view class="icon">
						<image src="../../static/img/homeHL.png"></image>
					</view>
					<view class="left">{{item.name}}</view>
					<view class="right tr">{{item.money}}</view>
				</view>
			</uni-swipe-action> -->
			
		</block>
		
		<view class="btn-row">
		    <button type="primary" class="primary" @click="herf('../index/shoplist/stock/stock')">入库/出库</button>
		</view>

		
	
		
    </view>
</template>

<script>
	import swipeAction from '../../components/swipe-action.vue'
	// import {uniSwipeAction} from "@dcloudio/uni-ui"
    export default {
        // components: {uniSwipeAction},

		components: {
		    swipeAction
		},
		data() {
			return {
				options: [{
					text: '取消',
					style: {
						id:111,
						name:"今日销售",
						money:12,
						backgroundColor: '#007aff'
					}
				}, {
							
					text: '确认',
					style: {
						id:22222,
						backgroundColor: '#dd524d'
					}
				}],
				
				boxs:[{
					name:"今日销售",
					money:"12323",
					options: [{
						text: '取消',
						style: {
							id:111,
							name:"今日销售",
							money:12,
							backgroundColor: '#007aff'
						}
					}, {
								
						text: '确认',
						style: {
							id:22222,
							backgroundColor: '#dd524d'
						}
					}]
				},{
					name:"今日销售",
					money:"DFD",
					options: [{
						text: '取消',
						style: {
							id:3333,
							name:"今日销售",
							money:12,
							backgroundColor: '#007aff'
						}
					}, {
								
						text: '确认',
						style: {
							id:4444,
							backgroundColor: '#dd524d'
						}
					}]
				}]
				
			};
		},
        onLoad() {
          
        },
		 methods: {
			editx () {
			  console.log('edit')
			},
			edits () {
			  console.log('open buttons')
			},
			bindClick(item){
				  console.log(item)
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
   .cont{
	   height:80upx;
	   line-height: 80upx;
   }
	   

		
</style>
