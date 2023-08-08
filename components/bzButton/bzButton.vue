<template>
	<view class="bzcontent">
		<view class="icon">
			<image :src="item.picurl" mode="widthFix"></image>
		</view>
		<view class="title">
			{{item.title}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"bzButton",
		props:{
			item:{
				type:Object,
				default(){
					return{
						title:"头像",
						picurl:"../../static/logo.png",
						goUrl:""
					}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.bzcontent{
		// background: gray;
		// width: 50rpx;
		// height: 100rpx;
		display: flex;
		flex-direction: column;
		flex: 0 0 33%;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		
		.title {
			font-size: 14px;
			font-weight: bold;
		}
		.icon {
			width: 72rpx;
			height: 72rpx;
			display: flex;
			margin-bottom: 10px;
		}
	}
</style>