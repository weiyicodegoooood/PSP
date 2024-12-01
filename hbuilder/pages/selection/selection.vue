<template>
	<view>
		<!-- 轮播图 -->
		<u-swiper :list="banner" previousMargin="30" nextMargin="30" circular height="360rpx" indicator></u-swiper>
		<!-- 板块 -->
		<view class="section-menu">
			<u-grid col="4">
				<u-grid-item>
					<u--image :src="require('@/static/selection/section-1.png')" width="164rpx" height="164rpx"></u--image>
					<u--text text="本家甄选" margin="22rpx 0 0 0" color="#333" size="24rpx" align="center"></u--text>
				</u-grid-item>
				<u-grid-item>
					<u--image :src="require('@/static/selection/section-2.png')" width="164rpx" height="164rpx"></u--image>
					<u--text text="挑选师推荐" margin="22rpx 0 0 0" color="#333" size="24rpx" align="center"></u--text>
				</u-grid-item>
				<u-grid-item>
					<u--image :src="require('@/static/selection/section-3.png')" width="164rpx" height="164rpx"></u--image>
					<u--text text="私物推荐" margin="22rpx 0 0 0" color="#333" size="24rpx" align="center"></u--text>
				</u-grid-item>
				<u-grid-item>
					<u--image :src="require('@/static/selection/section-4.png')" width="164rpx" height="164rpx"></u--image>
					<u--text text="本家LOOK" margin="22rpx 0 0 0" color="#333" size="24rpx" align="center"></u--text>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 本家甄选 -->
		<view class="section select">
			<!-- 标题 -->
			<view class="title">
				<u--text text="本家甄选" size="28rpx" color="#333" align="center"></u--text>
			</view>
			<!-- 列表 -->
			<view class="list">
				<view class="item">
					<view class="photo">
						<u--image :src="require('@/static/selection/photo-1.png')" width="700rpx" height="385rpx"></u--image>
					</view>
					<u--text text="叠韵滤光器，氛围造型大师" margin="32rpx 20rpx" size="30rpx" color="#333"></u--text>
					<u--text text="光笼，来自斯德哥尔摩的光晕礼赞" margin="0 20rpx 60rpx 20rpx" size="26rpx" color="#999"></u--text>
				</view>
				<view class="item">
					<view class="photo">
						<u--image :src="require('@/static/selection/photo-2.png')" width="700rpx" height="385rpx"></u--image>
					</view>
					<u--text text="夏季出游必备" margin="32rpx 20rpx" size="30rpx" color="#333"></u--text>
					<u--text text="舒心出行，本家为你推荐的5个tips不能忘" margin="0 20rpx 60rpx 20rpx" size="26rpx" color="#999"></u--text>
				</view>
			</view>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<!-- 本家LOOK -->
		<view class="section look">
			<!-- 标题 -->
			<view class="title">
				<u--text text="本家LOOK" size="28rpx" color="#333" align="center"></u--text>
			</view>
			<!-- 列表 -->
			<view class="list">
				<view class="item">
					<view class="album">
						<view class="left">
							<u--image :src="require('@/static/selection/look-1.jpg')" width="464rpx" height="394rpx"></u--image>
						</view>
						<view class="right">
							<view class="top">
								<u--image :src="require('@/static/selection/look-1-1.jpg')" width="194rpx" height="192rpx"></u--image>
							</view>
							<view class="bottom">
								<u--image :src="require('@/static/selection/look-1-2.jpg')" width="194rpx" height="192rpx"></u--image>
							</view>
						</view>
					</view>
					<u--text text="给牛仔加点火山岩" margin="32rpx 0" color="#333" size="26rpx"></u--text>
				</view>
				<view class="item">
					<view class="album">
						<view class="left">
							<u--image :src="require('@/static/selection/look-2.jpg')" width="464rpx" height="394rpx"></u--image>
						</view>
						<view class="right">
							<view class="top">
								<u--image :src="require('@/static/selection/look-2-1.jpg')" width="194rpx" height="192rpx"></u--image>
							</view>
							<view class="bottom">
								<u--image :src="require('@/static/selection/look-2-2.jpg')" width="194rpx" height="192rpx"></u--image>
							</view>
						</view>
					</view>
					<u--text text="婚纱拍照必看功课" margin="32rpx 0" color="#333" size="26rpx"></u--text>
				</view>
				<view class="item">
					<view class="album">
						<view class="left">
							<u--image :src="require('@/static/selection/look-3.jpg')" width="464rpx" height="394rpx"></u--image>
						</view>
						<view class="right">
							<view class="top">
								<u--image :src="require('@/static/selection/look-3-1.jpg')" width="194rpx" height="192rpx"></u--image>
							</view>
							<view class="bottom">
								<u--image :src="require('@/static/selection/look-3-2.jpg')" width="194rpx" height="192rpx"></u--image>
							</view>
						</view>
					</view>
					<u--text text="你的厨房只是少了它" margin="32rpx 0" color="#333" size="26rpx"></u--text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			banner: [require('@/static/selection/banner-1.png'), require('@/static/selection/banner-2.png')]
		};
	},
	methods: {}
};
</script>

<style>
.section-menu {
	margin: 47rpx 0;
}

.section .title {
	padding: 35rpx 0;
}

.select .list {
	padding: 0 22rpx;
}

.select .item {
	border: 1rpx solid #eee;
	margin-bottom: 30rpx;
}

/* 本家LOOK */
.look .list {
	background-color: #f8f8f8;
	padding: 21rpx;
}

.look .list .item {
	padding: 20rpx;
	background-color: white;
	margin-bottom: 20rpx;
}

.look .list .item:last-child {
	margin-bottom: 0;
}

.look .list .item .album {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.look .list .album .top {
	margin-bottom: 10rpx;
}
</style>
