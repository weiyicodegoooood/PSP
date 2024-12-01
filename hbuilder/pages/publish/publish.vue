<template>
	<view class="publish">
		<view class="input-wrap">
			<u-input
				class="inner-input"
				v-model="value"
				:type="type"
				border="true"
				:height="true"
				:auto-height="true"
				placeholder="请输入内容"
			/>
		</view>
		<u-line color="gray" />
		<view class="tags">
			<!-- <u-tag text="书籍" type="success" /> -->
		</view>
		<view class="publish-btn">
			<u-button type="primary" @click="publish">发布</u-button>
		</view>
		<view class="back" @click="backup">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
				type: "textarea",
				border: true,
				height: 400,
				// autoHeight: true,
			};
		},
		onLoad() {
			// uni.hideTabBar()
		},
		onShow() {
			uni.hideTabBar();
		},
		methods: {
			publish() {
				console.log("publish");
				uni.showToast({
					title:"发布成功",
					icon:'success'
				})
				setTimeout(()=>{
					uni.switchTab({
						url: "/pages/index/index",
					});
				},1500)
			},
			backup() {
				uni.switchTab({
					url: "/pages/index/index",
				});
			},
		},
	};
</script>

<style>
	.publish {
		position: relative;
	}

	.publish-btn {
		margin-top: 50rpx;
	}
	.input-wrap {
		height: 300rpx;
		width: 100%;
		word-wrap:break-word;
	}
	.inner-input{
		height: 300rpx;
	}
	.back {
		position: fixed;
		bottom: 300rpx;
		right: 0;
		width: 100rpx;
		height: 100rpx;
		background: url("../../static/tabs/index.png") no-repeat center;
		background-size: cover;
	}
</style>
