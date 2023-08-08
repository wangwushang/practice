<template>
	<view class="content">
		<view class="tuiguang">
			<view class="srcode">
				<input type="text" v-model="tgCode" placeholder="请输入推广码"/>
			</view>
			<view class="btnCode">
				<button type="primary" @click="clickBtn">立刻绑定</button>
			</view>
		</view>
		<view class="tishi">温馨提示：推广码不区分大小写</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tgCode:""
			};
		},
		methods:{
			clickBtn(){
				console.log("绑定推广码");
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F4EFF0;
}
.tuiguang{
	background-color: #fff;
	width: 100%;
	height: 300rpx;
	.srcode{
		padding-top: 50rpx;
		border-bottom: 1rpx solid #ddd;
		margin-left: 20rpx;
		margin-right: 20rpx;
		padding-bottom: 15rpx;
	}
	.btnCode{
		margin-top: 70rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		height: 30rpx;
	}
}
.tishi{
	margin-top: 10rpx;
	text-align: center;
	color: #666;
	font-size: 10rpx;
}
</style>
