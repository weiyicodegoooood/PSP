<template>
	<view class="container">
		<view class="tabs">
			<view
				class="tab"
				:class="{ active: activeTab === 'login' }"
				@click="toggleTab('login')"
				>登录</view
			>
			<view
				class="tab"
				:class="{ active: activeTab === 'register' }"
				@click="toggleTab('register')"
				>注册</view
			>
		</view>

		<view v-if="activeTab === 'login'" class="form">
			<view class="form-group">
				<input
					type="text"
					v-model="loginData.username"
					placeholder="用户名"
				/>
			</view>
			<view class="form-group">
				<input
					type="password"
					v-model="loginData.password"
					placeholder="密码"
				/>
			</view>
			<view class="btn login-btn" @click="login">登录</view>
			<view class="link" @click="toggleTab('register')"
				>没有账号？去注册</view
			>
		</view>
		<view v-if="activeTab === 'register'" class="form">
			<view class="form-group">
				<input
					type="text"
					v-model="registerData.username"
					placeholder="用户名"
				/>
			</view>
			<view class="form-group">
				<input
					type="password"
					v-model="registerData.password"
					placeholder="密码"
				/>
			</view>
			<view class="btn register-btn" @click="register">注册</view>
			<view class="link" @click="toggleTab('login')"
				>已有账号？去登录</view
			>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: "login",
				loginData: {
					username: "",
					password: "",
				},
				registerData: {
					username: "",
					password: "",
				},
			};
		},
		methods: {
			toggleTab(tab) {
				this.activeTab = tab;
			},
			showToast(msg) {
				uni.showToast({
					title: msg,
				});
			},
			login() {
				// 登录逻辑
				uni.request({
					url: "http://localhost:8089/login",
					method: "POST",
					data: {
						name: this.loginData.username,
						password: this.loginData.password,
					},
					success: (res) => {
						if (res.data.code === 200) {
							uni.setStorageSync("userInfo", this.loginData);
							uni.showToast({
								title: "登录成功",
								icon: "success",
							});
							setTimeout(() => {
								uni.switchTab({
									url: "/pages/index/index",
								});
							}, 1500);
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "fail",
							});
						}
					},
				});
			},
			register() {
				// 注册逻辑
				uni.request({
					url: "http://localhost:8089/register",
					method: "POST",
					data: {
						name: this.registerData.username,
						password: this.registerData.password,
					},
					success: (res) => {
						console.log(res);
						if (res.data.code === 200) {
							uni.showToast({
								title: "注册成功",
								icon: "success",
							});
							setTimeout(() => {
								this.toggleTab("login");
							}, 1500);
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "fail",
							});
						}
					},
				});
			},
		},
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tabs {
		display: flex;
		margin-bottom: 20px;
	}

	.tab {
		padding: 10px 20px;
		cursor: pointer;
		font-size: 16px;
		border-bottom: 2px solid transparent;
	}

	.tab.active {
		border-bottom: 2px solid #007bff;
		color: #007bff;
	}

	.form {
		width: 300px;
		padding: 20px;
		border: 1px solid #eee;
		border-radius: 5px;
	}

	.form-group {
		margin-bottom: 10px;
	}

	input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.btn {
		width: 100%;
		padding: 10px;
		color: #fff;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
		margin-bottom: 10px;
	}

	.login-btn {
		background-color: #007bff;
	}

	.register-btn {
		background-color: #28a745;
	}

	.link {
		color: #007bff;
		cursor: pointer;
		text-align: center;
	}

	.link:hover {
		text-decoration: underline;
	}
</style>
