<template>
	<view>
		<!-- 搜索框 -->
		<view class="search-bar">
			<u-search placeholder="搜索商品的关键字"></u-search>
		</view>
		<!-- 筛选条 -->
		<view class="sort-bar">
			<u-tabs
				:list="sort_list"
				:scrollable="false"
				:active-style="{ color: '#c55a5c' }"
				line-color="#c55a5c"
			></u-tabs>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<u-list
				@scrolltolower="handleLoadMore"
				@scroll="handleScroll"
				:scroll-top="scrollTop"
				scroll-with-animation
				height="calc(100vh - 176rpx)"
			>
				<u-list-item v-for="goods in goods_list" :key="goods.id">
					<u-cell>
						<view
							@click="goDetail(goods)"
							class="goods"
							slot="title"
						>
							<view class="photo">
								<u--image
									:src="goods.img"
									width="196rpx"
									height="190rpx"
								></u--image>
							</view>
							<view class="right">
								<u--text
									:text="goods.name"
									size="26rpx"
									color="#555"
									lines="2"
								></u--text>
								<u--text
									:text="goods.word"
									margin="29rpx 0 41rpx 0"
									size="20rpx"
									color="#999"
									lines="1"
								></u--text>
								<u--text
									:text="goods.price"
									mode="price"
									size="28rpx"
									color="#c55a5c"
									lines="1"
								></u--text>
							</view>
						</view>
					</u-cell>
				</u-list-item>
			</u-list>
		</view>
		<!-- 回到顶部 -->
		<view @click="scrollTop = 0" class="back-top">
			<u-icon name="arrow-upward" size="32rpx" color="#c55a5c"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sort_list: [
					{ name: "综合" },
					{ name: "销量" },
					{ name: "新品" },
					{ name: "价格" },
				],
				goods_list: [
					{
						id: 1,
						img: require("@/static/index/img-1.png"),
						name: "高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖",
						word: "一件能明显提升幸福感的小物件",
						price: 61.9,
					},
					{
						id: 2,
						img: require("@/static/index/img-2.png"),
						name: "28寸 纯PC”铝矿”（非全铝）拉杆箱",
						word: "国画四色 诠释最美器具",
						price: 261.9,
					},
					{
						id: 3,
						img: require("@/static/index/img-3.png"),
						name: "高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖",
						word: "一件能明显提升幸福感的小物件",
						price: 45.9,
					},
					{
						id: 4,
						img: require("@/static/index/img-4.png"),
						name: "瓦尔塔婆婆飒飒考虑瓦尔塔婆婆飒飒考虑瓦尔塔婆婆飒飒考虑瓦尔塔婆婆飒飒考虑",
						word: "委屈哦iu日哦诶哦尽快好卡",
						price: 87.9,
					},
					{
						id: 5,
						img: require("@/static/index/img-5.png"),
						name: "高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖",
						word: "一件能明显提升幸福感的小物件",
						price: 435.9,
					},
					{
						id: 6,
						img: require("@/static/index/img-6.png"),
						name: "高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖",
						word: "一件能明显提升幸福感的小物件",
						price: 78.9,
					},
				],
				scrollTop: 0,
			};
		},
		methods: {
			// 加载更多商品
			handleLoadMore() {
				// 随机生成商品
				for (let i = 0; i < 6; i++) {
					let x = uni.$u.random(1, 10);
					let price = uni.$u.random(100, 500);

					let new_goods = {
						id: this.goods_list.length + 1,
						img: require(`@/static/index/img-${x}.png`),
						name: "高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖",
						word: "一件能明显提升幸福感的小物件",
						price: price,
					};

					this.goods_list.push(new_goods);
				}
			},
			// 监听滚动事件
			handleScroll(scrollTop) {
				this.scrollTop = scrollTop;
			},
			goDetail(goods) {
				this.$store.commit("setGoodDetail", {
					id: goods.id,
					photo: goods.img,
					name: goods.name,
					word: goods.word,
					price: goods.price,
				});
				uni.navigateTo({
					url: "/pages/goods/detail/detail",
				});
			},
		},
	};
</script>

<style>
	.search-bar {
		height: 88rpx;
		padding: 10rpx;
		box-sizing: border-box;
	}

	.sort-bar {
		height: 88rpx;
	}

	.goods-list .goods {
		display: flex;
		align-items: center;
	}

	.goods-list .goods .photo {
		margin-right: 25rpx;
	}

	/* 回到顶部 */
	.back-top {
		position: fixed;
		right: 20rpx;
		bottom: 20rpx;
		padding: 20rpx;
		background-color: #eee;
		border-radius: 6rpx;
	}
</style>
