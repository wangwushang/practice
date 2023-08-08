<template>
	<view class="yingshiContent">
		<!-- 轮播图 -->
		<swiper class="swiper" circular :indicator-dots="homeSlide.length>1?'true':'false'" autoplay="true"
			interval="5000" duration="1500">
			<swiper-item v-for="(item,index) in homeSlide" :key="item.id">
				<image :src="item.img" mode="aspectFill">image>
			</swiper-item>
		</swiper>
		<view class="biaoqian">
			热门视频
		</view>
		<view class="Grid">
			<view class="Grid-Item" v-for="item in 11" @click="showVideoDetail">
				<view class="GSimg">
					<image class="Image" src="https://puui.qpic.cn/tv/0/1249869817_450630/0?max_age=7776000"
						mode="widthFix"></image>
				</view>
				<view class="GStitle">前期别跑前期别跑前期别跑前期别跑前期别跑前期别跑</view>
			</view>
		</view>
		<view class="bottom-text">暂无更多了～</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homeSlide: [{
					id: 1,
					img: "http://www.sdust.edu.cn/__local/9/7A/B1/F29B84DEF72DD329997E8172ABA_664BA3EF_32466.jpg"
				}],

			};
		},
		methods:{
			showVideoDetail(){
				console.log("跳转视频详情");
				uni.navigateTo({
					url:"/pages/videoDetail/videoDetail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.yingshiContent {
		.swiper {
			height: 400rpx;

			image {
				width: 100%;
				height: 400rpx;
			}
		}
		.biaoqian{
			margin-top: 20rpx;
			margin-left: 20rpx;
			font-weight:bold;
		}
		.videoContent {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}

		.Grid {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-content: space-between;
			padding-left: 20rpx;
			padding-right: 20rpx;
			padding-top: 20rpx;
			column-gap: calc(20% / 5);
			row-gap: 20rpx;
			// background: blue;

			.Grid-Item {
				width: 30%;
				height: 380rpx;
				text-align: center;
				border: 1rpx solid #ccc;
				box-sizing: border-box;
				// background: red;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.GSimg {
					width: 100%;
					height: 100rpx;
					// margin-top: 42rpx;
					text-align: center;

					.Image {
						width: 100%;
						height: 120rpx;
					}
				}

				.GStitle {
					width: 100%;
					// height: 34rpx;
					// line-height: 34rpx;
					color: #000;
					font-size: 24rpx;
					// margin-top: 10rpx;
					// background: #ccc;
					margin-bottom: 10rpx;
					overflow-wrap: break-word;
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
			}

		}

		.bottom-text {
			color: gray;
			font-size: 24rpx;
			margin-top: 20rpx;
			text-align: center;
			// background: red;
			padding-bottom: 20rpx;
		}
	}
</style>