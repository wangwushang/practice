<template>
	<view class="shoucangContent">
		<view class="nodata">
			<image src="../../static/nodata.png" mode="widthFix"></image>
		</view>
		<view class="loading">
			<view>暂无收藏数据~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.nodata{
		display: flex;
		justify-content: center;
		image{
			width: 360rpx;
		}
	}
	.loading{
		text-align: center;
		font-size: 26rpx;
		color:#888;
		line-height: 2em;
	}
</style>
