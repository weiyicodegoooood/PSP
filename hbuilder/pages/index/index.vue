<template>
	<view>
		<!-- 轮播图 -->
		<u-swiper
			:list="banner"
			height="392rpx"
			img-mode="aspectFit"
			indicator
		></u-swiper>
		<!-- 板块 -->
		<view class="section-menu">
			<u-grid col="4">
				<u-grid-item>
					<u--image
						:src="require('@/static/index/icon-1.png')"
						width="66rpx"
						height="56rpx"
					></u--image>
					<u--text
						text="新品/热销"
						margin="18rpx 0 0 0"
						color="#333"
						size="24rpx"
						align="center"
					></u--text>
				</u-grid-item>
				<u-grid-item>
					<u--image
						:src="require('@/static/index/icon-2.png')"
						width="66rpx"
						height="56rpx"
					></u--image>
					<u--text
						text="超值拼团"
						margin="18rpx 0 0 0"
						color="#333"
						size="24rpx"
						align="center"
					></u--text>
				</u-grid-item>
				<u-grid-item>
					<u--image
						:src="require('@/static/index/icon-3.png')"
						width="66rpx"
						height="56rpx"
					></u--image>
					<u--text
						text="新人福利"
						margin="18rpx 0 0 0"
						color="#333"
						size="24rpx"
						align="center"
					></u--text>
				</u-grid-item>
				<u-grid-item>
					<u--image
						:src="require('@/static/index/icon-4.png')"
						width="66rpx"
						height="56rpx"
					></u--image>
					<u--text
						text="时尚动态"
						margin="18rpx 0 0 0"
						color="#333"
						size="24rpx"
						align="center"
					></u--text>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 精品热卖 -->
		<view class="section">
			<view class="title">
				<u--text
					text="精品热卖"
					size="28rpx"
					color="#333"
					align="center"
				></u--text>
				<u-line length="50rpx" margin="6rpx 0"></u-line>
				<u--text
					text="SALE"
					size="12rpx"
					color="#666"
					align="center"
				></u--text>
			</view>
			<!-- 列表 -->
			<view class="goods-list">
				<view
					v-for="goods in hot_sales"
					@click="goDetail(goods)"
					:key="goods.id"
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
						mode="price"
						margin="33rpx 0 0 0"
						size="26rpx"
						color="#c55a5c"
					>
					</u--text>
				</view>
			</view>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 好物推荐 -->
		<view class="section">
			<view class="title">
				<u--text
					text="好物推荐"
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
					@click="goDetail(goods)"
					:key="goods.id"
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
						mode="price"
						margin="33rpx 0 0 0"
						size="26rpx"
						color="#c55a5c"
					>
					</u--text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from "vuex";
	export default {
		data() {
			return {
				banner: [
					require("@/static/logo.jpg"),
					require("@/static/index/banner1.jpg"),
					require("@/static/index/banner2.jpg"),
				],
				recommend_list: [
					{
						id: 111,
						photo: require("@/static/index/t (1).png"),
						name: "狐步小吊灯",
						word: "曼妙裙摆 任意空间的光线舞者",
						price: 469,
					},
					{
						id: 112,
						photo: require("@/static/index/t (2).png"),
						name: "折简餐具组|碗套装",
						word: "国画四色 诠释最美器具",
						price: 89,
					},
					{
						id: 113,
						photo: require("@/static/index/t (3).png"),
						name: "竹枝抱枕",
						word: "上百竹枝首尾相依 静生生物",
						price: 169,
					},
					{
						id: 114,
						photo: require("@/static/index/t (4).png"),
						name: "澎湃声波牙刷 Pro",
						word: "一件能明显提升幸福感的小物件",
						price: 259,
					},
				],
				hot_sales: [
					{
						id: 1,
						photo: require("@/static/index/photo-1.png"),
						name: "无声派对复古镜-A",
						word: "选用优质金属 镜框双色点缀",
						price: 249,
					},
					{
						id: 2,
						photo: require("@/static/index/photo-2.png"),
						name: "镜面不锈钢双耳连盖汤煲",
						word: "食品级304不锈钢 复合底",
						price: 359,
					},
					{
						id: 3,
						photo: require("@/static/index/photo-3.png"),
						name: "纳米水离子空气净化器",
						word: "美容、润肤 除甲醛、烟等有害气体",
						price: 169,
					},
					{
						id: 4,
						photo: require("@/static/index/photo-4.png"),
						name: "S.PRINCESS荞麦保健枕",
						word: "全面面料 双面工艺 单面荞麦",
						price: 59,
					},
				],

				//详情页数据
			};
		},
		onShow() {
			uni.showTabBar();
			
		},
		onLoad() {
    uni.request({
        url: "http://localhost:8089/getallcom",
        method: "GET",
        success: (res) => {
            if (res.data.code === 200) {
                const newData = res.data.data.map((item, index) => ({
                    id: index,
                    photo: item.picture,
                    name: item.name,
                    word: item.des,
                    price: item.price,
                }));
                this.hot_sales = newData; // Ensure reactivity
            }
        },
    });
},

		
		methods: {
			goDetail(goods) {
				console.log(goods);
				this.$store.commit("setGoodDetail", goods);
				uni.navigateTo({
					url: `../goods/detail/detail`,
				});
			},
		},
	};
</script>

<style>
	.section-menu {
		margin-top: 57rpx;
		margin-bottom: 47rpx;
	}

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
</style>
