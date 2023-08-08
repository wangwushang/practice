<template>
	<view class="content">
		<view class="nav"></view>
		<view class="imagebg">
			<image class="imagebg-one" mode="scaleToFill"
				src="http://img-miniprogram-o.doutuimao.net/miniadmin/programconfig/xcximg/20220916/716d6434eb09f00103abf380d106cf39.png">
			</image>
		</view>
		<view class="search-container">
			<image class="search-icon" src="../../static/image/search.png" mode=""></image>
			<input class="key-input" placeholder="请输入创作者口令"
				placeholderStyle="color: #222;margin-left: 10rpx;;font-weight: bold;fonts-size: 14px;" style="flex:1;"
				type="text"></input>
			<view class="search-btn">搜索</view>
		</view>
		<view class="mulu-container">
			<view class="mulu-container-title">
				<image class="title-icon" src="https://phone-res.jiaxianghui.cn/20221102110928-tuijianchuangzuozhe.png"
					mode="widthFix"></image>
			</view>
			<view class="mulu-detail">
				<bzButton :item="item" @click.native="goToDetail(item)" v-for="item in navArr" :key="item.id"></bzButton>
			</view>
		</view>
		<view class="author-container">
			<view class="author-container-title">
				<image class="title-icon" mode="widthFix"
					src="https://phone-res.jiaxianghui.cn/20221102111423-tuijianzuoping.png"></image>
			</view>
			<view class="author-zuopin" style="margin-left:40rpx;">
				<image class="imagelist" src="../../static/image/fengjing.jpg" @click="gotoPicDetail" mode="widthFix" v-for="item in 10">
				</image>
				<view class="bottom-text">暂无更多了～</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navArr:[{
					id:1,
					title:"头像",
					picurl:"../../static/logo.png",
					goUrl:""
				},{
					id:2,
					title:"头像",
					picurl:"../../static/logo.png",
					goUrl:""
				},{
					id:3,
					title:"头像",
					picurl:"../../static/logo.png",
					goUrl:""
				}]
			}
		},
		onLoad() {

		},
		methods: {
			//跳转下载图片页面
			gotoPicDetail(){
				console.log("点击了图片");
				uni.navigateTo({
					url:"/pages/yulan/yulan"
				})
				// uni.navigateTo({
				// 	url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				// })
			},
			//跳转到具体页面
			goToDetail(item){
				console.log(item);
				uni.navigateTo({
					url:"/pages/yingshi/yingshi"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content::before{
		background: url(http://img-dtm-gallery.doutuimao.net/bgimg/20220814/579e9bd8a4fdf492f6719cee7d14e8dd.png) no-repeat;
		background-size: 100%;
		bottom: 0;
		content: "";
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		z-index: -1;
	}
	.content {
		min-height: 100vh;
		width: 100%;
		//padding: 24rpx;
		
		.nav {
			width: 100%;
			height: 88rpx;
		}

		.imagebg {
			margin-bottom: 40rpx;
			text-align: center;

			.imagebg-one {
				height: 350rpx;
				width: 640rpx;
			}
		}

		.search-container {
			-webkit-box-align: center;
			align-items: center;
			background: #fff;
			border: 6rpx solid #7275fb;
			border-radius: 20rpx;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			margin-bottom: 60rpx;
			padding: 16rpx 24rpx;
			position: relative;
			margin-left: 24rpx;
			margin-right: 24rpx;

			.search-btn {
				background: #7275fb;
				border-radius: 16rpx;
				color: #fff;
				font-size: 28rpx;
				height: 80rpx;
				line-height: 80rpx;
				margin-left: 12rpx;
				text-align: center;
				width: 140rpx;
			}

			.search-icon {
				width: 60rpx;
				height: 60rpx;
			}

			.key-input {
				color: #222;
				font-size: 32rpx;
				font-weight: 700;
			}

		}

		.mulu-container {
			margin-bottom: 30rpx;

			.title-icon {
				display: block;
				height: 38rpx;
				margin: auto auto 48rpx;
				width: 424rpx;
			}

			.mulu-detail {
				margin-top: 30rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				// background: red;
			}
		}

		.author-container {
			margin-bottom: 30rpx;

			.title-icon {
				display: block;
				height: 38rpx;
				margin: auto auto 48rpx;
				width: 424rpx;
			}
			.author-zuopin{
				// background: red;
			}
			.imagelist {
				border-radius: 16rpx;
				display: inline-block;
				height: 372rpx;
				margin-bottom: 20rpx;
				margin-right: 22rpx;
				width: 210rpx;
			}

			.bottom-text {
				color: #fff;
				font-size: 24rpx;
				margin-top: 36rpx;
				text-align: center;
			}
		}
	}
</style>