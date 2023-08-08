<template>
	<view class="intro">
		<view class="header">
			<image class="headerPic" src="../../static/useravatar.png" mode="aspectFill" @click="clickLogin"></image>
			<text class="headerText">立即登录</text>
		</view>
		<view class="list">
			<view @click="taptuiguang" class="list-item">
				<view class="item-left">
					<image src="../../static/userbangding.png" mode=""></image>
					<text>绑定推广码</text>
				</view>
				<image class="item-right" src="../../static/userRighticon.png" mode=""></image>
			</view>
		</view>
		<view class="list">
			<view bindtap="myorder" class="list-item" @click="tapshoucang">
				<view class="item-left">
					<image src="../../static/shoucang.png" mode=""></image>
					<text>我的收藏</text>
				</view>
				<image class="item-right" src="../../static/userRighticon.png" mode=""></image>
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
		methods:{
			taptuiguang(){
				console.log("推广跳转");
				uni.navigateTo({
					url:"/pages/tuiguang/tuiguang"
				})
			},
			tapshoucang(){
				console.log("收藏");
				uni.navigateTo({
					url:"/pages/shoucang/shoucang"
				})
			},
			clickLogin(){
				console.log("点击登录");
				uni.login({
					provider:"weixin",
					success:(res) => {
						console.log("登录成功："+res.code);
					},
					fail: (error) => {
						console.log("登录失败:"+error)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F4EFF0;
	}
	.header {
		width: 100%;
		height: 400rpx;
		display: flex;
		background-color: red;
		background-image: url("../../static/ic_sign_in_bg.png");
		flex-direction: column;
		align-items: center;
	}

	.headerPic {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		margin-bottom: 15rpx;
		margin-top: 120rpx;
	}

	.headerText {
		font-size: 30rpx;
		color: #fff;
	}

	.horXan {
		width: 2rpx;
		height: 35rpx;
		background-color: red;
		margin-left: 10rpx;
		margin-top: 5rpx;
	}

	.titleHeader {
		display: flex;
		flex-direction: row;

	}

	.titleCenter {
		margin-left: 10rpx;
		font-size: 30rpx;
	}

	.xiangmu {
		display: flex;
		flex-direction: column;
		align-items: left;
		align-items: center;
		margin-left: -380rpx;
	}

	.pic {
		width: 80rpx;
		height: 100rpx;
		margin-top: 20rpx;

	}

	.shuru {
		font-size: 28rpx;
		margin-top: 20rpx;

	}
	.list .list-item {
	    border-bottom: 1rpx solid #ddd;
	    height: 100rpx;
	    line-height: 100rpx;
	    padding: 0 10rpx;
	    font-size: 30rpx;
	    color: #8a8a8a;
	    overflow: hidden;
		text{
			color: #353031;
		}
		
	}
	
	.list .list-item .item-left {
	    height: 120rpx;
	    line-height: 120rpx;
	    vertical-align: middle;
	    float: left;
	}
	
	.list .list-item .item-left image {
	    width: 40rpx;
	    height: 40rpx;
	    float: left;
	    margin-top: 30rpx;
	    margin-left: 15rpx;
	}
	
	.list .list-item .item-left text {
	    float: left;
	    margin-left: 32rpx;
	    line-height: 100rpx;
	}
	
	.list .list-item .item-right {
	    width: 40rpx;
	    height: 40rpx;
	    float: right;
	    margin-top: 30rpx;
	}
</style>