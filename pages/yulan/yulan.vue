<template>
	<view class="picContent">
		<image class="backImage" src="../../static/image/back.png" mode="widthFix" @click="backNav"></image>
		<image class="bigImage" src="../../static/image/fengjing.jpg" mode="widthFix"></image>
		<view class="gongjuContent">
			<view class="info">
				<image src="http://img-dtm-gallery.doutuimao.net/bgimg/20220816/b15e3e70ef9a033a655bf8422f3c0157.png"
					mode="widthFix"></image>
				<text class="infotext">匿名</text>
			</view>
			<view class="info" @click="dowloadPic">
				<image src="http://img-dtm-gallery.doutuimao.net/bgimg/20220812/be1b358af080a151ee7ba456aa8ba90a.png"
					mode="widthFix"></image>
				<text class="dowloadText">下载</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			backNav() {
				console.log("回到上一步");
				uni.navigateBack();
			},
			dowloadPic(){
				console.log("保存图片");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.picContent {
		background: #000 !important;
		min-height: 100vh;
		width: 100vw;
		overflow: hidden;
		// position: absolute;

		.backImage {
			margin-top: 88rpx;
			margin-left: 30rpx;
			width: 72rpx;
			height: 72rpx;
			background: #fff;
			position: absolute;
			z-index: 10;
		}

		.bigImage {
			width: 100%;
			z-index: 3;
			position: fixed;

		}
		

		.gongjuContent {
			background: rgba(5, 36, 66, .5);
			border-radius: 40rpx;
			bottom: 286rpx;
			padding: 26rpx 0;
			position: fixed;
			right: 24rpx;
			z-index: 120;

			view {
				margin-top: 32rpx;
			}

			.info {
				align-items: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 100rpx;
				z-index: 99;

				image {
					border-radius: 50%;
					box-sizing: border-box;
					height: 56rpx;
					width: 56rpx;
				}

				text {
					color: #fff;
					font-family: PingFangSC-Regular, PingFang SC;
					font-size: 20rpx;
					font-weight: 400;
					margin-top: 10rpx;
					overflow: hidden;
					text-align: center;
					text-overflow: ellipsis;
					text-shadow: 0rpx 2rpx 0rpx rgba(0, 0, 0, .3);
					white-space: nowrap;
					width: 68rpx;
				}
			}
		}
	}
</style>