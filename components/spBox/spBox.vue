<template>
	<view class="vidoContent">
		<view class="videoPic">
			<image src="https://puui.qpic.cn/vcover_vt_pic/0/mzc00200m0ikb1d1683783375651/220" mode="widthFix">
			</image>
		</view>
		<view class="text">
			<view class="title">绝色狂花之龙迹神宫</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "spBox",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.vidoContent {
		background: gray;
		display: flex;
		flex-direction: column;
		flex: 0 0 33%;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;

		.videoPic {
			background: red;
			width: 100rpx;
			height: 280rpx;

			image {
				width: 100%;
				height: 280rpx;
			}

			.text {
				background: blue;
			}
		}

	}
</style>