<template>
	<view class="videoDetailContent">
		<video class="myVideo"
			src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
			@error="videoErrorCallback" object-fit="fill" controls>
		</video>
		<view class="moviecontrol">
			<view class="movieName">我们的美好时代</view>
			<radio-group name="" @change="changeRate">
				<label v-for="item in rateList" :key="item">
					<radio :value="item" :checked="item==activeRadio" /><text>{{item+'x'}}</text>
				</label>
			</radio-group>
		</view>
		<scroll-view scroll-x="true" class="navscroll">
			<view class="item" :class="index===navIndex ? 'active':''" v-for="(item,index) in navArr" 
			:key="item.id" @click="clickNav(index,item.id)">
				{{item}}
			</view>
		</scroll-view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//单选框数据
				activeRadio: "1",
				rateList: ["1", "1.25", "1.5", "2"],
				navIndex: 0,
				navArr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
			}
		},
		onReady(res) {
			this.videoContext = uni.createVideoContext('myVideo');
		},
		methods: {
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			changeRate(e) {
				this.activeRadio = e.detail.value;
				console.log(Number(this.activeRadio));
				console.log(this.videoContext);
				this.videoContext.playbackRate(Number(this.activeRadio));
			},
			showVideoDetail(){
				console.log("跳转视频详情");
				uni.navigateTo({
					url:"/pages/videoDetail/videoDetail"
				})
			},
			//点击导航切换
			clickNav(index,id){
				console.log(index,id);
				this.navIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.videoDetailContent {
		background-color: #F0EFF4;
		width: 100% !important;

		.myVideo {
			width: 100%;
		}

		.moviecontrol {
			background-color: #F0EFF4;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			text {
				font-size: 30rpx;
			}

			margin-top: 15rpx;

			.movieName {
				font-size: 30rpx;
				margin-left: 15rpx;
			}
		}

		.biaoqian {
			margin-top: 20rpx;
			margin-left: 20rpx;
			font-weight: bold;
		}

		.videoContent {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}
		.navscroll{
			margin-top: 30rpx;
			height: 80rpx;
			background: #fff;
			white-space: nowrap;
			//首页条置顶效果
			//position: fixed;
			//在小程序中设置top=0是可以的因为默认从tabBar开始算的，但是在H5中从顶部开始算的
			top: var(--window-top);
			left: 0;
			z-index: 10;
			//去除H5中的滚动条，在小程序中是没有的
			/deep/ ::-webkit-scrollbar {
				width: 4px !important;
				height: 1px !important;
				overflow: auto !important;
				background: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}
			.item{
				font-size: 35rpx;
				display: inline-block;
				line-height: 80rpx;
				padding: 0 30rpx;
				margin-left: 30rpx;
				color: #333;
				background-color: #AED1EF;
				&.active{
					color: #E86C15;
				}
			}
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