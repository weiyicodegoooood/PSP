<template>
	<view class="container">
		<view class="nav">
			<view :class=" index==active?'.nav-item active':'.nav-item' " @click="change(index)"
				v-for="(item,index) in navlist">
				{{item}}
			</view>
		</view>
		<!-- 一个 -->

		<view class="fukuan">
			<view class="top">
				<view class="left">
					等待买家付款
				</view>
				<view class="right">
					2023-7-3 10:25:2
				</view>
			</view>
			<view class="bottom">
				<view class="bleft">
					<image src="../../static/cart/find2.png" mode=""></image>
				</view>
				<view class="bright">
					<view class="rightone">
						高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖...
					</view>
					<view class="righttwo">
						<view class="two-left">
							容量30L
						</view>
						<view class="two-right">
							￥520
						</view>
					</view>
					<view class="rightthree">
						x 1
					</view>
				</view>
			</view>

			<view class="allall">
				<view class="all">
					共计<text style="color: red"> 1 </text>件商品，合计：￥520
				</view>
				<view class="queren">
					<view class="qx">
						取消订单
					</view>
					<view class="qr">
						确认付款
					</view>
				</view>
			</view>
		</view>
		<!-- dierge -->
		<view class="fukuan2">
			<view class="top">
				<view class="left">
					等待买家付款
				</view>
				<view class="right">
					2023-7-3 10:25:2
				</view>
			</view>
			<view class="bottom">
				<view class="bleft">
					<image src="../../static/cart/find2.png" mode=""></image>
				</view>
				<view class="bright">
					<view class="rightone">
						秋季新款白色运动鞋
					</view>
					<view class="righttwo">
						<view class="two-left">
							容量30L
						</view>
						<view class="two-right">
							￥520
						</view>
					</view>
					<view class="rightthree">
						x 1
					</view>
				</view>

			</view>
			<!--  -->
			<view class="bottom">
				<view class="bleft">
					<image src="../../static/cart/find2.png" mode=""></image>
				</view>
				<view class="bright">
					<view class="rightone">
						高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖...

					</view>
					<view class="righttwo">
						<view class="two-left">
							容量30L
						</view>
						<view class="two-right">
							￥520
						</view>
					</view>
					<view class="rightthree">
						x 1
					</view>

				</view>

			</view>
			<view class="allall">
				<view class="all">
					共计<text style="color: red"> 1 </text>件商品，合计：￥520
				</view>
				<view class="queren">
					<view class="qx">
						取消订单
					</view>
					<view class="qr">
						确认付款
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				navlist: ["全部", "待发货", "待收获", "待评价", "已完成"]
			}
		},
		methods: {
			change(index) {
				this.active = index;
				console.log("11")
			}
		}
	}
</script>

<style lang="less">
	.container {
		width: 100%;
		height: 200%;
		background-color: #eeeeee;

		.nav {
			margin: 10rpx auto;
			width: 100%;
			width: 100%;
			background-color: #ffffff;
			border: solid 1px #eeeeee;
			display: flex;
			justify-content: space-between;

			.nav-item {
				margin-top: 20rpx;
				text-align: center;
				width: 16%;
				height: 28rpx;
				font-family: MicrosoftYaHeiUILight;
				font-size: 28rpx;

				letter-spacing: 0px;
				color: #545353;
			}

			.active {
				font-size: 32rpx;
				border-bottom: 6rpx solid red;
				padding-bottom: 10rpx;
			}
		}

		.fukuan {
			width: 710rpx;
			height: 520rpx;
			background-color: #ffffff;
			border-radius: 5rpx;
			margin: 0 auto;

			.top {
				width: 95%;
				margin: 30rpx auto;
				height: 45rpx;
				display: flex;
				justify-content: space-between;
				padding: 20rpx 10rpx;
				border-bottom: 1rpx solid #d7d7d7;

				.left {
					color: #dfaaab;

				}

				.right {
					color: #d7d7d7;
				}
			}

			.bottom {
				display: flex;
				margin-top: 30rpx;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid #d7d7d7;


				.bleft {
					width: 200rpx;
					height: 200rpx;
					background-color: #ffffff;
					border-radius: 3px;
					// margin: 30rpx;
					margin-left: 30rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.bright {
					width: 500rpx;
					margin-left: 20rpx;
					align-items: center;

					.rightone {
						font-size: 28rpx;
						// width: 100%;
					}

					.righttwo {
						display: flex;
						justify-content: space-between;
						margin-top: 34rpx;

						.two-right {
							margin-right: 20rpx;
						}

						.two-left {
							color: #d7d7d7;
						}
					}

					.rightthree {
						position: absolute;
						right: 40rpx;
						color: #999999;
						right: 40rpx;
					}
				}
			}

			.allall {
				position: absolute;
				right: 30rpx;

				.all {
					// float: right;
					display: flex;
					// justify-content: end;
					// position: absolute;
					// right: 30rpx;
					margin-bottom: 20rpx;
					margin-top: 30rpx;
				}



				.queren {
					display: flex;
					// justify-content: end;

					// margin-top: 20rpx;
					// float: right;
					// position: absolute;
					// right: 30rpx;
					// top: 500rpx;
					.qx {
						margin-right: 50rpx;
						width: 140rpx;
						height: 60rpx;
						line-height: 60rpx;
						border: 2rpx solid #d5d5d5;
						border-radius: 50rpx;
						font-size: 26rpx;
						text-align: center;
					}


					.qr {
						margin-right: 20rpx;
						width: 140rpx;
						height: 60rpx;
						line-height: 60rpx;
						border: 2rpx solid red;
						border-radius: 50rpx;
						font-size: 26rpx;
						// padding: 10px;
						text-align: center;
						color: red;
					}
				}
			}
		}

		.fukuan2 {
			width: 710rpx;
			height: 720rpx;
			background-color: #ffffff;
			border-radius: 5rpx;
			margin: 0 auto;

			.top {
				width: 95%;
				margin: 30rpx auto;
				height: 45rpx;
				display: flex;
				justify-content: space-between;
				padding: 20rpx 10rpx;
				border-bottom: 1rpx solid #d7d7d7;

				.left {
					color: #dfaaab;

				}

				.right {
					color: #d7d7d7;
				}
			}

			.bottom {
				display: flex;
				margin-top: 30rpx;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid #d7d7d7;


				.bleft {
					width: 200rpx;
					height: 200rpx;
					background-color: #ffffff;
					border-radius: 3px;
					// margin: 30rpx;
					margin-left: 30rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.bright {
					width: 500rpx;
					margin-left: 20rpx;
					align-items: center;

					.rightone {
						font-size: 28rpx;
						// width: 100%;
					}

					.righttwo {
						display: flex;
						justify-content: space-between;
						margin-top: 34rpx;

						.two-right {
							margin-right: 20rpx;
						}

						.two-left {
							color: #d7d7d7;
						}
					}

					.rightthree {
						position: absolute;
						// right: 40rpx;
						color: #999999;
						right: 40rpx;
					}
				}
			}

			.allall {
				position: absolute;
				right: 30rpx;

				.all {
					// float: right;
					display: flex;
					// justify-content: end;
					// position: absolute;
					// right: 30rpx;
					margin-bottom: 20rpx;
					margin-top: 30rpx;
				}



				.queren {
					display: flex;
					justify-content: end;

					// margin-top: 20rpx;
					// float: right;
					// position: absolute;
					// right: 30rpx;
					// top: 500rpx;
					.qx {
						margin-right: 50rpx;
						width: 140rpx;
						height: 60rpx;
						line-height: 60rpx;
						border: 2rpx solid #d5d5d5;
						border-radius: 50rpx;
						font-size: 26rpx;
						text-align: center;
					}


					.qr {
						margin-right: 20rpx;
						width: 140rpx;
						height: 60rpx;
						line-height: 60rpx;
						border: 2rpx solid red;
						border-radius: 50rpx;
						font-size: 26rpx;
						// padding: 10px;
						text-align: center;
						color: red;
					}
				}
			}
		}
	}
</style>