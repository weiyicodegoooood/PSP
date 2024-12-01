<template>
	<view class="container">
		<text class="title">输入密码</text>
		<view class="input-container">
			<input
				v-model="password"
				type="password"
				placeholder="请输入密码"
				class="password-input"
			/>
			<!-- <image src="../../static/images/password-icon.png" class="password-icon" /> -->
		</view>
		<button @click="submitPassword" class="submit-button">确认付款</button>
		<text v-if="paymentSuccess" class="success-message">付款成功</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: "",
				paymentSuccess: false,
			};
		},
		methods: {
			submitPassword() {
				// 在实际应用中，这里会发送密码验证请求
				// 如果密码正确，设置 paymentSuccess 为 true
				uni.showToast({
					title: "付款成功",
				});
				setTimeout(() => {
					this.paymentSuccess = true;
					uni.navigateBack();
				}, 1000);
			},
		},
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.title {
		font-size: 24px;
		margin-bottom: 20px;
		color: #333;
	}

	.input-container {
		position: relative;
		width: 80%;
	}

	.password-input {
		width: calc(100% - 40px);
		margin-bottom: 20px;
		padding: 10px 40px 10px 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
		color: #333;
	}

	.password-icon {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		width: 20px;
		height: auto;
	}

	.submit-button {
		background-color: #007aff;
		color: #fff;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 18px;
	}

	.success-message {
		color: green;
		margin-top: 20px;
	}
</style>
