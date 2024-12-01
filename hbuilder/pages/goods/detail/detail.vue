<template>
	<view class="tools-bar-fix">
		<!-- 商品图 -->
		<view style="height: 750rpx">
			<image :src="goods_detail.photo" style="width: 100%; height: 100%">
			</image>
		</view>
		<!-- 商品信息 -->
		<u-cell-group>
			<u-cell>
				<view class="goods" slot="title">
					<u--text
						:text="goods_detail.name"
						size="34rpx"
						color="#555"
						lines="2"
					></u--text>
					<u--text
						:text="goods_detail.word"
						margin="20rpx 0 29rpx 0"
						size="26rpx"
						color="#999"
						lines="1"
					></u--text>
					<u--text
						:text="goods_detail.price"
						mode="price"
						size="40rpx"
						color="#c55a5c"
						lines="1"
					></u--text>
				</view>
				<view class="comment-data" slot="value">
					<u--text
						text="469"
						size="36rpx"
						color="#c55a5c"
						align="center"
					></u--text>
					<u--text
						text="用户评价"
						margin="18rpx 0"
						size="24rpx"
						color="#c55a5c"
						align="center"
					></u--text>
					<navigator url="/pages/index/index" class="link">
						<u-button text="查看评价" size="mini"></u-button>
					</navigator>
				</view>
			</u-cell>
		</u-cell-group>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 规格信息 -->
		<u-cell-group>
			<u-cell title="规格数量选择" :is-link="true"></u-cell>
			<u-cell :is-link="true">
				<view class="promotion" slot="title">
					<view>
						<u--text text="1个促销："></u--text>
					</view>
					<view>
						<u--text
							text="120款爆品满3件8折"
							color="#c55a5c"
						></u--text>
					</view>
				</view>
			</u-cell>
			<u-cell title="积分：购买最高可得59积分"></u-cell>
			<u-cell :is-link="true">
				<view class="service" slot="title">
					<view class="label">
						<u--text text="服务："></u--text>
					</view>
					<view class="list">
						<view class="item">
							<u--text
								text="30天无忧退换货"
								size="24rpx"
								color="#999"
							></u--text>
						</view>
						<view class="item">
							<u--text
								text="48小时快速退款"
								size="24rpx"
								color="#999"
							></u--text>
						</view>
						<view class="item">
							<u--text
								text="满88元免邮费"
								size="24rpx"
								color="#999"
							></u--text>
						</view>
					</view>
				</view>
			</u-cell>
		</u-cell-group>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 用户评论 -->
		<view class="user-comments">
			<u-cell
				title="用户评价：(536)"
				value="99.1% 好评"
				:is-link="true"
			></u-cell>
			<!-- 列表 -->
			<view class="list">
				<u-cell-group>
					<u-cell>
						<view class="comment" slot="title">
							<view class="user">
								<view class="avatar">
									<u--image
										:src="
											require('@/static/center/avatar.png')
										"
										shape="circle"
										width="80rpx"
										height="80rpx"
									></u--image>
								</view>
								<view class="nickname">
									<u--text
										text="黄小米"
										size="24rpx"
										color="#666"
									></u--text>
								</view>
								<view class="stars">
									<u-rate
										:value="3"
										active-color="#fab646"
										readonly
									></u-rate>
								</view>
							</view>
							<view class="order-info">
								<view class="date">
									<u--text
										mode="date"
										text="1612959739"
										size="22rpx"
										color="#999"
									></u--text>
								</view>
								<view class="specs-list">
									<view class="item">
										<u--text
											text="橙色"
											size="22rpx"
											color="#999"
										></u--text>
									</view>
									<view class="item">
										<u--text
											text="M码"
											size="22rpx"
											color="#999"
										></u--text>
									</view>
									<view class="item">
										<u--text
											text="高配套餐"
											size="22rpx"
											color="#999"
										></u--text>
									</view>
								</view>
							</view>
							<u--text
								text="质感相当不错，很舒服，本人比较喜欢"
								margin="0 0 30rpx 0"
								size="24rpx"
								color="#555"
								lines="3"
							>
							</u--text>
							<u-album :urls="photos"></u-album>
						</view>
					</u-cell>
					<u-cell>
						<view class="comment" slot="title">
							<view class="user">
								<view class="avatar">
									<u--image
										:src="
											require('@/static/center/avatar.png')
										"
										shape="circle"
										width="80rpx"
										height="80rpx"
									></u--image>
								</view>
								<view class="nickname">
									<u--text
										text="爱新觉罗炫烨"
										size="24rpx"
										color="#666"
									></u--text>
								</view>
								<view class="stars">
									<u-rate
										:value="3"
										active-color="#fab646"
										readonly
									></u-rate>
								</view>
							</view>
							<view class="order-info">
								<view class="date">
									<u--text
										mode="date"
										text="1612959739"
										size="22rpx"
										color="#999"
									></u--text>
								</view>
								<view class="specs-list">
									<view class="item">
										<u--text
											text="橙色"
											size="22rpx"
											color="#999"
										></u--text>
									</view>
									<view class="item">
										<u--text
											text="M码"
											size="22rpx"
											color="#999"
										></u--text>
									</view>
								</view>
							</view>
							<u--text
								text="质感相当不错，很舒服，本人比较喜欢!质感相当不错，很舒服，本人比较喜欢质感相当不错，很舒服，本人比较喜欢质感相当不错，很舒服，本人比较喜欢质感相当不错，很舒服，本人比较喜欢质感相当不错，很舒服，本人比较喜欢"
								margin="0 0 30rpx 0"
								size="24rpx"
								color="#555"
								lines="3"
							>
							</u--text>
							<u-album :urls="photos"></u-album>
						</view>
					</u-cell>
				</u-cell-group>
			</view>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 商品详情 -->
		<view class="content">
			<view class="title">
				<u--text
					text="商品详情"
					size="26rpx"
					color="#c55a5c"
					align="center"
				></u--text>
			</view>
			<u-line margin="0 0 20rpx 0"></u-line>
			<view>
				<u--image
					:src="goods_detail.photo"
					width="750rpx"
					height="750rpx"
					img-mode="widthFix"
				>
				</u--image>
			</view>
		</view>
		<!-- 底部工具条 -->
		<view class="tools-bar">
			<navigator url="/pages/index/index" class="tool">
				<u-icon name="kefu-ermai" size="38rpx" color="#999"></u-icon>
			</navigator>
			<navigator url="../../cart/cart" open-type="switchTab" class="tool">
				<u-icon name="shopping-cart" size="38rpx" color="#999"></u-icon>
			</navigator>
			<view @click="handleCollect" class="tool">
				<u-icon
					:name="isCollected ? 'star-fill' : 'star'"
					:color="isCollected ? '#c55a5c' : '#999'"
					size="38rpx"
				>
				</u-icon>
			</view>
			<view @click="specs_visible = true" class="add-cart">
				<u--text
					text="加入购物车"
					size="28rpx"
					color="#555"
					align="center"
				></u--text>
			</view>
			<view class="instant-purchase">
				<u-button
					@click="specs_visible = true"
					text="立即购买"
					color="#c55a5c"
				></u-button>
			</view>
		</view>
		<!-- 规格选择popup -->
		<u-popup :show="specs_visible" closeable @close="specs_visible = false">
			<view class="popup">
				<view class="goods">
					<view class="photo">
						<u--image
							:src="goods_detail.photo"
							width="180rpx"
							height="180rpx"
						>
						</u--image>
					</view>
					<view class="result">
						<u--text
							:text="`￥${goods_detail.price}`"
							color="#c55a5c"
							size="26rpx"
						></u--text>
						<view class="specs-list">
							<u--text
								text="选择规格："
								size="26rpx"
								color="#555"
							></u--text>
							<view
								v-for="(specs, index) in selected_specs"
								:key="index"
								class="item"
							>
								<u--text
									v-if="index === 2"
									:text="`${specs.value}个`"
								></u--text>
								<u--text
									:text="specs.name"
									v-else
									size="26rpx"
									color="#555"
								></u--text>
							</view>
						</view>
					</view>
				</view>
				<!-- 规格项-颜色 -->
				<!-- <view class="specs-tool">
					<u--text text="颜色" size="26rpx" color="#555"></u--text>
					<view class="list">
						<view
							v-for="(color, index) in colors"
							:key="color.id"
							class="item"
						>
							<u-button
								@click="handleColor(color)"
								:color="
									selected_specs[0].id === color.id
										? '#c55a5c'
										: ''
								"
							>
								{{ color.name }}
							</u-button>
						</view>
					</view>
				</view> -->
				<!-- 规格项-尺码 -->
				<!-- <view class="specs-tool">
					<u--text text="尺码" size="26rpx" color="#555"></u--text>
					<view class="list">
						<view v-for="(size,index) in sizes" :key="size.id" class="item">
							<u-button @click="handleSize(size)" :color="selected_specs[1].id === size.id ? '#c55a5c':''">
								{{size.name}}
							</u-button>
						</view>
					</view>
				</view> -->
				<!-- 规格项-数量 -->
				<view class="specs-tool">
					<u--text text="数量" size="26rpx" color="#555"></u--text>
					<view class="list">
						<u-number-box
							v-model="selected_specs[2].value"
							button-size="36"
							input-width="132rpx"
						></u-number-box>
					</view>
				</view>
				<!-- 确认按钮 -->
				<u-button
					@click="
						addToCart();
						specs_visible = false;
					"
					color="#c55a5c"
					>确认</u-button
				>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { mapMutations, mapState } from "vuex";

	export default {
		data() {
			return {
				banner: [
					require("@/static/detail/photo-2.jpg"),
					require("@/static/detail/photo-3.jpg"),
					require("@/static/detail/photo-4.jpg"),
				],
				photos: [
					"https://cdn.uviewui.com/uview/album/1.jpg",
					"https://cdn.uviewui.com/uview/album/2.jpg",
					"https://cdn.uviewui.com/uview/album/3.jpg",
					"https://cdn.uviewui.com/uview/album/4.jpg",
					"https://cdn.uviewui.com/uview/album/5.jpg",
					"https://cdn.uviewui.com/uview/album/6.jpg",
					"https://cdn.uviewui.com/uview/album/7.jpg",
					"https://cdn.uviewui.com/uview/album/8.jpg",
					"https://cdn.uviewui.com/uview/album/9.jpg",
					"https://cdn.uviewui.com/uview/album/10.jpg",
				],
				// 收藏状态
				isCollected: false,
				// 规则弹窗状态
				specs_visible: false,
				// 颜色
				colors: [
					{ id: 1, name: "红色" },
					{ id: 2, name: "黄色" },
					{ id: 3, name: "蓝色" },
					{ id: 4, name: "绿色" },
					{ id: 5, name: "青色" },
				],
				// 尺码
				sizes: [
					{ id: 1, name: "S码" },
					{ id: 2, name: "M码" },
					{ id: 3, name: "L码" },
					{ id: 4, name: "XL码" },
					{ id: 5, name: "XXL码" },
				],
				// 当前选中规格
				selected_specs: [
					{ id: 0, name: "" },
					{ id: 0, name: "" },
					{ value: 1 },
				],
			};
		},
		onShow() {
			let res = uni.getStorageSync("vuex");
			console.log(res);
		},
		methods: {
			// 收藏功能
			handleCollect() {
				this.isCollected = !this.isCollected;
				if (this.isCollected) {
					uni.$u.toast("收藏成功！");
				} else {
					uni.$u.toast("取消收藏！");
				}
			},
			// 颜色
			handleColor(color) {
				this.$set(this.selected_specs, 0, color);
			},
			// 尺码
			handleSize(size) {
				this.$set(this.selected_specs, 1, size);
			},
			//添加进购物车
			...mapMutations(["add_cart"]),
			addToCart() {
				// 判断是否选择规格
				// if (this.selected_specs[0].id === 0) {
				// 	uni.$u.toast("请选择颜色");
				// 	return;
				// }
				// if (this.selected_specs[1].id === 0) {
				// 	uni.$u.toast("请选择尺码");
				// 	return;
				// }
				// 添加进购物车
				this.add_cart({
					id: this.goods_detail.id,
					name: this.goods_detail.name,
					word: this.goods_detail.word,
					price: this.goods_detail.price,
					img: this.goods_detail.photo,
					count: this.selected_specs[2].value,
					selected_specs: this.selected_specs,
				});
				uni.$u.toast("添加购物车成功");
			},
		},
		computed: {
			...mapState(["goods_detail"]),
		},
	};
</script>

<style>
	.promotion {
		display: flex;
		align-items: center;
	}

	.service {
		display: flex;
	}

	.service .list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.service .list .item {
		flex-basis: 50%;
		margin-bottom: 20rpx;
	}

	.service .list .item:last-child {
		margin-bottom: 0;
	}

	/* 用户评价 */
	.user-comments .comment .user {
		display: flex;
		align-items: center;
	}

	.user-comments .comment .user .nickname {
		margin: 0 20rpx;
	}

	.user-comments .comment .order-info {
		display: flex;
		margin-top: 21rpx;
		margin-bottom: 33rpx;
	}

	.user-comments .comment .order-info .specs-list {
		display: flex;
		margin-left: 18rpx;
	}

	.user-comments .comment .order-info .specs-list .item {
		margin-right: 18rpx;
	}

	.content .title {
		padding: 35rpx 0;
	}

	/* 工具条 */
	.tools-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		border-top: 1rpx solid #eee;
	}

	.tools-bar .tool {
		padding: 23rpx;
		border-right: 1rpx solid #eee;
	}

	.tools-bar .add-cart,
	.tools-bar .instant-purchase {
		flex: 1;
	}

	.tools-bar-fix {
		padding-bottom: 80rpx;
	}

	/* popup */
	.popup {
		padding: 20rpx;
	}

	.popup .goods {
		display: flex;
		align-items: flex-end;
		margin-bottom: 46rpx;
	}

	.popup .goods .photo {
		margin-right: 15rpx;
	}

	.popup .goods .result .specs-list {
		display: flex;
		align-items: center;
		margin-top: 18rpx;
	}

	.popup .specs-tool .list {
		display: flex;
		align-items: center;
		padding-top: 21rpx;
		padding-bottom: 50rpx;
	}

	.popup .goods .result .specs-list .item,
	.popup .specs-tool .list .item {
		margin-right: 20rpx;
	}
</style>
