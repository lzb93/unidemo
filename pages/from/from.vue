<template>
	<view>
		<form>
			<view class="row ulist">
				<view class="left" style="width: 60%;padding-left: 20upx;">总计<text class="mizf">*</text></view>
				<view class="right tr"><input class="mt10" placeholder="测试"></view>
			</view>

			<view class="row ulist">
				<view class="left" style="width: 60%;padding-left: 20upx;">总计</view>
				<view class="right tr"><input class="mt10" placeholder="测试"></view>
			</view>

			<view class="row ulist">
				<view class="left" style="width: 60%;padding-left: 20upx;">总计</view>
				<view class="right tr"><input class="mt10" placeholder="测试"></view>
			</view>

			<view class="row ulist">

				<view class="left" style="padding-left: 20upx;">总计</view>
				<view class="right tr"><input class="mt10" placeholder="测试"></view>
				<view class="icon">
					<image src="../../static/img/homeHL.png"></image>
				</view>
			</view>

			<view class="row ulist">

				<view class="left" style="padding-left: 20upx;">日历</view>
				<view class="right tr"><input class="mt10" placeholder="测试"></view>
				<view class="icon">
					 <image @click="open" src="../../static/img/homeHL.png"></image>
				</view>
			</view>
			
			<view class="row ulist">
			
				<view class="left" style="padding-left: 20upx;width: 60%;">选择器</view>
				<view class="right tr">
					<picker @change="bindPickerChange" :value="index" :range="array">
                        <view class="uni-input mt10 icon-right">{{array[index]}}</view>
                    </picker>
	
				</view>
				 <!-- <view class=" icon-right"> {{item.money}}</view> -->
			
			</view>

			<view class="btn-row row">
				<button type="primary" class="primary" @tap="bindLogin">保存</button>
				<button type="primary" class="primary" @tap="bindLogin">继续添加</button>

			</view>
<uni-calendar 
    ref="calendar"
    :insert="false"
    @confirm="confirm"
     />
    


		</form>

	</view>
</template>

<script>
	import {
		uniCalendar
	} from "@dcloudio/uni-ui"
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				array: ['中国', '美国', '巴西', '日本'],
                index: 0,
				boxs: [{
					name: "今日销售",
					money: 12
				}, {
					name: "今日销售",
					money: ''
				}, {
					name: "今日销售",
					money: ''
				}]
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			
			change(e) {
				console.log(e);
			},
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			},
		
		}
	}
</script>

<style>
	.btn-row button {
		width: 45%;
	}
</style>
