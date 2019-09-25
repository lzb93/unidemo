<template>
	<view>
		<uni-swipe-action  :options="optionss"  @click="bindClick" >
			<slot></Slot>
		</uni-swipe-action>
		
	</view>
</template>

<script>
    import {uniSwipeAction} from "@dcloudio/uni-ui"
	export default {
		components: {uniSwipeAction},
		props: {
			// options:{},
			optionss:Array,
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	/* @import "./m-icon.css"; */
</style>

