<template>
	<view class="tools-bar-fix">
		<!-- 购物车列表 -->
		<view class="cart-list">
			<u-checkbox-group v-model="selected_goods">
				<u-swipe-action>
					<u-swipe-action-item
						v-for="(goods, index) in cart_list"
						@click="handleSwipe"
						:index="index"
						:name="index"
						:key="goods.id"
						:options="[{ text: '删除' }]"
					>
						<u-cell>
							<view class="goods" slot="title">
								<u-checkbox
									:name="goods.id"
									active-color="#c55a5c"
								></u-checkbox>
								<view class="photo" @click="goDetail(goods)">
									<u--image
										:src="goods.img"
										width="196rpx"
										height="190rpx"
									></u--image>
								</view>
								<view class="right">
									<view @click="goDetail(goods)" class="name">
										<u--text
											:text="goods.name"
											size="26rpx"
											color="#555"
											lines="2"
										></u--text>
									</view>
									<u--text
										:text="goods.word"
										margin="29rpx 0 41rpx 0"
										size="20rpx"
										color="#999"
										lines="1"
									></u--text>
									<view class="counter-box">
										<u--text
											:text="goods.price"
											mode="price"
											margin="0 90rpx 0 0"
											size="28rpx"
											color="#c55a5c"
											lines="1"
										></u--text>
										<u-number-box
											v-model="goods.count"
										></u-number-box>
									</view>
								</view>
								<!-- 删除icon -->
								<view
									@click="open_remove_modal(index)"
									class="remove"
								>
									<u-icon name="close"></u-icon>
								</view>
							</view>
						</u-cell>
					</u-swipe-action-item>
				</u-swipe-action>
			</u-checkbox-group>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 猜你喜欢 -->
		<view class="section">
			<view class="title">
				<u--text
					text="猜你喜欢"
					size="28rpx"
					color="#333"
					align="center"
				></u--text>
				<u-line length="50rpx" margin="6rpx 0"></u-line>
				<u--text
					text="RECOMMEND"
					size="12rpx"
					color="#666"
					align="center"
				></u--text>
			</view>
			<!-- 列表 -->
			<view class="goods-list">
				<view
					v-for="goods in recommend_list"
					:key="goods.id"
					@click="goDetail1(goods)"
					class="goods"
				>
					<view class="photo">
						<u--image
							:src="goods.photo"
							width="315rpx"
							height="275rpx"
						></u--image>
					</view>
					<u--text
						:text="goods.name"
						margin="16rpx 0"
						lines="1"
						size="26rpx"
						color="#555"
					></u--text>
					<u--text
						:text="goods.word"
						lines="1"
						size="20rpx"
						color="#999"
					></u--text>
					<u--text
						:text="goods.price"
						margin="33rpx 0 0 0"
						size="26rpx"
						color="#c55a5c"
					>
					</u--text>
				</view>
			</view>
		</view>
		<!-- 底部工具条 -->
		<view class="tools-bar">
			<view class="check_all">
				<u-checkbox-group v-model="checked_all">
					<u-checkbox
						:name="true"
						active-color="#c55a5c"
						label="全选"
					></u-checkbox>
				</u-checkbox-group>
			</view>
			<u--text
				:text="total_cost"
				mode="price"
				margin="0 20rpx 0 0"
				size="28rpx"
				color="#c55a5c"
				bold
				align="right"
			></u--text>
			<view class="settle-button">
				<u-button
					:disabled="selected_goods.length === 0"
					text="结 算"
					color="#c55a5c"
					@click="goToSettle"
				></u-button>
			</view>
		</view>
		<!-- 删除Modal -->
		<u-modal
			:show="remove_visible"
			@confirm="handleRemove"
			@cancel="remove_visible = false"
			content="确定要删除此商品吗？"
			show-cancel-button
		>
		</u-modal>
	</view>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		data() {
			return {
				// 删除Modal状态
				remove_visible: false,
				// 记录当前操作的商品索引
				current_index: -1,
				// 选中的商品
				selected_goods: [],

				recommend_list: [
					{
						id: 1,
						photo: require("@/static/index/t (1).png"),
						name: "狐步小吊灯",
						word: "曼妙裙摆 任意空间的光线舞者",
						price: 469,
					},
					{
						id: 2,
						photo: require("@/static/index/t (2).png"),
						name: "折简餐具组|碗套装",
						word: "国画四色 诠释最美器具",
						price: 89,
					},
					{
						id: 3,
						photo: require("@/static/index/t (3).png"),
						name: "竹枝抱枕",
						word: "上百竹枝首尾相依 静生生物",
						price: 169,
					},
					{
						id: 4,
						photo: require("@/static/index/t (4).png"),
						name: "澎湃声波牙刷 Pro",
						word: "一件能明显提升幸福感的小物件",
						price: 259,
					},
				],
			};
		},

		computed: {
			...mapState(["cart_list"]),

			// 全选状态
			checked_all: {
				get() {
					// 判断是否全部选中
					let is_all_checked =
						this.selected_goods.length === this.cart_list.length;
					return [is_all_checked];
				},
				set(newValue) {
					// 全选的状态
					let is_all_checked = newValue.length > 0;
					if (is_all_checked) {
						// 全部选中
						this.selected_goods = this.cart_list.map(
							(goods) => goods.id
						);
					} else {
						// 全部取消选中
						this.selected_goods = [];
					}
				},
			},
			// 总价
			total_cost() {
				// 计算总价
				let total = this.cart_list.reduce((total, goods) => {
					// 判断是否选中
					if (this.selected_goods.includes(goods.id)) {
						// 计算总价
						total += goods.price * goods.count;
					}
					return total;
				}, 0);
				return total;
			},
		},

		methods: {
			// 打开删除 Modal
			open_remove_modal(index) {
				// 记录当前操作的商品索引
				this.current_index = index;
				// 显示 Modal
				this.remove_visible = true;
			},
			// 删除商品
			handleRemove() {
				this.cart_list.splice(this.current_index, 1);
				// 关闭 Modal
				this.remove_visible = false;
			},
			// 左滑动
			handleSwipe(data) {
				let { index, name } = data;
				// 点击第一个按钮
				if (index === 0) {
					// 打开删除 Modal
					this.open_remove_modal(name);
				}
			},
			// 跳转到商品详情
			goDetail(goods) {
				console.log(goods);
				this.$store.commit("setGoodDetail", {
					id: goods.id,
					photo: goods.img,
					name: goods.name,
					word: goods.word,
					price: goods.price,
				});
				uni.navigateTo({
					url: `../goods/detail/detail`,
				});
			},
			goDetail1(goods) {
				console.log(goods);
				this.$store.commit("setGoodDetail", goods);
				uni.navigateTo({
					url: `../goods/detail/detail`,
				});
			},
			goToSettle(){
				uni.navigateTo({
					url:"/pages/payment/payment"
				})
			}
		},
	};
</script>

<style>
	.cart-list .goods {
		display: flex;
		align-items: center;
		position: relative;
	}

	.cart-list .goods .photo {
		margin-right: 25rpx;
	}

	.cart-list .goods .counter-box {
		display: flex;
	}

	.cart-list .goods .right {
		padding-right: 20rpx;
	}

	.cart-list .goods .remove {
		position: absolute;
		right: -20rpx;
		top: -10rpx;
	}

	/* 猜你喜欢 */
	.section .title {
		padding: 25rpx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.section .goods-list {
		display: flex;
		flex-wrap: wrap;
	}

	.section .goods-list .goods {
		flex: 1;
		border-top: 2rpx solid #f5f5f5;
		border-right: 2rpx solid #f5f5f5;
		padding: 24rpx;
		padding-bottom: 42rpx;
	}

	.section .goods:nth-child(2n) {
		border-right: none;
	}

	/* 工具条 */
	.tools-bar {
		position: fixed;
		left: 0;
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		border-top: 1rpx solid #eee;
		z-index: 1000;
	}

	/* #ifdef H5 */
	.tools-bar {
		bottom: 100rpx;
	}

	/* #endif */

	/* #ifndef H5 */
	.tools-bar {
		bottom: 0rpx;
	}

	/* #endif */

	.tools-bar .check_all {
		padding: 20rpx;
	}

	.tools-bar .settle-button {
		flex: 1;
	}

	.tools-bar-fix {
		padding-bottom: 80rpx;
	}
</style>
