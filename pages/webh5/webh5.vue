<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="http://xxr.lzb93.com/daichao/actZone2.0/"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
            }
        },
		methods: {
			
		}
	}
</script>

<style>

</style>
