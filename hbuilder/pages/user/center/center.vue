<template>
	<view>
		<!-- 个人信息 -->
		<view class="profile-section">
			<view class="user-card">
				<template v-if="isLogin">
					<view class="user" @click="toinfo">
						<view class="avatar">
							<u--image
								:src="require('@/static/center/avatar.png')"
								width="128rpx"
								height="128rpx"
							>
							</u--image>
						</view>
						<u--text
							:text="username"
							margin="24rpx 0 0 0"
							align="center"
							color="#333"
							size="34rpx"
						></u--text>
					</view>
					<u--gap height="20" bgColor="#f4f4f4"></u--gap>
					<view class="data-board">
						<u-grid col="2">
							<u-grid-item>
								<u--text
									text="11"
									align="center"
									color="#333"
									size="28rpx"
								></u--text>
								<u--text
									text="我的收藏"
									margin="20rpx 0 0 0"
									align="center"
									color="#333"
									size="28rpx"
								></u--text>
							</u-grid-item>
							<u-grid-item>
								<u--text
									text="31"
									align="center"
									color="#333"
									size="28rpx"
								></u--text>
								<u--text
									text="关注品牌"
									margin="20rpx 0 0 0"
									align="center"
									color="#333"
									size="28rpx"
								></u--text>
							</u-grid-item>
						</u-grid>
					</view>
				</template>
				<template v-else>
					<view class="login" @click="toLogin">
						<u--text
							text="登录/注册"
							margin="24rpx 0 0 0"
							align="center"
							color="#333"
							size="34rpx"
						></u--text>
					</view>
					<u--gap height="20" bgColor="#f4f4f4"></u--gap>
				</template>
			</view>
		</view>

		<!-- 我的订单 -->
		<view class="order" @click="toOrder">
			<view class="top">
				<view class="left">
					<u--text text="我的订单"></u--text>
				</view>
				<view class="right">
					<u--text text="全部订单"></u--text>
					<u--image
						class="arrow-img"
						:src="require('@/static/center/arrow.png')"
						width="15rpx"
						height="29rpx"
					></u--image>
				</view>
			</view>

			<view class="order-body">
				<view
					class="item"
					v-for="(item, index) in order_list"
					:key="index"
				>
					<view class="photo">
						<u--image
							:src="item.photo"
							width="57rpx"
							height="58.5rpx"
						></u--image>
					</view>
					<u--text
						:text="item.text"
						size="24rpx"
						align="center"
					></u--text>
				</view>
			</view>
		</view>
		<u-gap height="20" bgColor="#f4f4f4"></u-gap>

		<!-- 我的资产 -->
		<view class="asset">
			<view class="top">
				<view class="left">
					<u--text text="我的资产"></u--text>
				</view>
			</view>

			<view class="asset-body">
				<view
					class="item"
					v-for="(item, index) in asset_list"
					:key="index"
				>
					<view class="photo">
						<u--image
							:src="item.photo"
							width="57rpx"
							height="58.5rpx"
						></u--image>
					</view>

					<view>
						<u--text
							:text="item.text"
							size="24rpx"
							align="center"
						></u--text>
					</view>
				</view>
			</view>
		</view>
		<u-gap height="20" bgColor="#f4f4f4"></u-gap>

		<!-- 工具 -->
		<view class="tool">
			<view class="top">
				<view class="left">
					<u--text text="工具"></u--text>
				</view>
			</view>

			<view class="tool-body">
				<view
					class="item"
					v-for="(item, index) in tool_list"
					:key="index"
				>
					<view class="photo">
						<u--image
							:src="item.photo"
							width="57rpx"
							height="58.5rpx"
						></u--image>
					</view>

					<view>
						<u--text
							:text="item.text"
							size="24rpx"
							align="center"
						></u--text>
					</view>
				</view>
				<!-- 判断登录，显示退出按钮 -->
				<view v-if="isLogin" class="item" @click="quit">
					<view class="photo">
						<u--image
							:src="require('@/static/center/icon-10.jpg')"
							width="57rpx"
							height="58.5rpx"
						></u--image>
					</view>
					<view>
						<u--text
							text="退出登录"
							size="24rpx"
							align="center"
						></u--text> </view
				></view>
			</view>
		</view>
		<u-gap height="50" bgColor="#f4f4f4"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				username: "",
				order_list: [
					{
						photo: require("@/static/center/icon-1.jpg"),
						text: "待付款",
					},
					{
						photo: require("@/static/center/icon-2.jpg"),
						text: "待发货",
					},
					{
						photo: require("@/static/center/icon-3.jpg"),
						text: "待收货",
					},
					{
						photo: require("@/static/center/icon-4.jpg"),
						text: "待评价",
					},
					{
						photo: require("@/static/center/icon-5.jpg"),
						text: "售后",
					},
				],
				asset_list: [
					{
						photo: require("@/static/center/icon-6.jpg"),
						text: "优惠券",
					},
					{
						photo: require("@/static/center/icon-7.jpg"),
						text: "钱包",
					},
					{
						photo: require("@/static/center/icon-8.jpg"),
						text: "D币",
					},
					{
						photo: require("@/static/center/icon-9.jpg"),
						text: "红包",
					},
				],
				tool_list: [
					{
						photo: require("@/static/center/icon-10.jpg"),
						text: "会员中心",
					},
					{
						photo: require("@/static/center/icon-11.jpg"),
						text: "收货地址",
					},
					{
						photo: require("@/static/center/icon-12.jpg"),
						text: "售后&客服",
					},
					{
						photo: require("@/static/center/icon-13.jpg"),
						text: "设置",
					},
					{
						photo: require("@/static/center/icon-14.jpg"),
						text: "入驻合作",
					},
					{
						photo: require("@/static/center/icon-15.jpg"),
						text: "反馈&投诉",
					},
					{
						photo: require("@/static/center/icon-16.jpg"),
						text: "商品报告",
					},
					{
						photo: require("@/static/center/icon-17.jpg"),
						text: "关于我们",
					},
				],
			};
		},
		// mounted() {
		// 	console.log(localStorage.getItem("userInfo"));
		// 	if (localStorage.getItem("userInfo")) {
		// 		this.isLogin = true;
		// 		// JSON.parse(localStorage.getItem("userInfo")).data
		// 		// 		.username ||
		// 		this.username = JSON.parse(
		// 			localStorage.getItem("userInfo")
		// 		).username;
		// 		console.log(this.isLogin);
		// 		console.log(this.username);
		// 	}
		// },
		onShow() {
			console.log(uni.getStorageSync("userInfo"));
			if (uni.getStorageSync("userInfo")) {
				this.isLogin = true;
				this.username = uni.getStorageSync("userInfo").data.username;
				console.log(this.isLogin);
				console.log(this.username);
			}
		},
		methods: {
			// onload(name, sex, pheno) {
			// 	console.log(name, sex, pheno);
			// },
			toOrder() {
				uni.navigateTo({
					url: "/pages/order/order",
					// url: "/pages/new/new",
					// url: "/pages/news/news",

					// success: res => {},
					// fail: () => {},
					complete: () => {
						console.log("跳转");
					},
				});
			},
			toinfo() {
				uni.navigateTo({
					url: "/pages/user/info/info",
				});
			},
			toLogin() {
				uni.navigateTo({
					url: "/pages/user/login/login",
				});
			},
			quit() {
				uni.showModal({
					title: "提示",
					content: "确定退出登录吗？",
					success: (res) => {
						if (res.confirm) {
							uni.removeStorageSync("userInfo");
							this.isLogin = false;
							this.username = "";
						}
					},
				});
			},
		},
	};
</script>

<style>
	.profile-section {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		height: 445rpx;
		background: url(@/static/center/bg.jpg) no-repeat;
		background-size: auto 400rpx;
	}

	.user-card {
		position: relative;
		width: 690rpx;
		height: 242rpx;
		background-color: white;
		box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.2);
	}

	.user-card .user {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -35%);
		text-align: center;
	}

	.user-card .user .avatar {
		overflow: hidden;
		border-radius: 50%;
		box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.2);
	}

	.user-card .data-board {
		margin-top: 130rpx;
	}

	.order {
		margin-top: 10rpx;
	}

	.order .top,
	.asset .top,
	.tool .top {
		display: flex;
		justify-content: space-between;
		padding: 31rpx 0;
		border-bottom: 1px solid rgb(244, 244, 244);
	}

	.order .top .left,
	.asset .top .left,
	.tool .top .left {
		margin-left: 16rpx;
	}

	.order .top .right {
		margin-right: 16rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.order .top .right .arrow-img {
		margin-left: 13rpx;
	}

	.order .order-body,
	.asset .asset-body,
	.tool .tool-body {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 16rpx;
	}

	.order .order-body .item,
	.asset .asset-body .item,
	.tool .tool-body .item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 26rpx;
	}

	.order .order-body .item .photo,
	.asset .asset-body .item .photo,
	.tool .tool-body .item .photo {
		margin-bottom: 13rpx;
	}

	.tool .tool-body .item {
		width: 20%;
		margin: 20rpx;
	}
</style>
