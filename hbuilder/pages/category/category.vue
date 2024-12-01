<template>
	<view>
		<!-- 搜索框 -->
		<view class="search-bar">
			<u-search placeholder="搜索商品的关键字"></u-search>
		</view>
		<!-- 选项卡 -->
		<uv-vtabs :list="list" :bar-item-active-style="{ color: '#c55a5c' }" :bar-item-active-line-style="{ backgroundColor: '#c55a5c', width: '6rpx' }"
			hd-height="88rpx" :height="height">
			<template v-for="(cate_1st, index) in list">
				<uv-vtabs-item :index="index" :key="index">
					<view class="tab-right">
						<!-- banner图 -->
						<view class="banner">
							<u--image :src="cate_1st.img" width="528rpx" height="192rpx"></u--image>
						</view>
						<!-- 分割线 -->
						<u-divider :text="`${cate_1st.name}分类`"></u-divider>
						<!-- 二级分类 -->
						<view class="cate_2nd">
							<u-grid>
								<u-grid-item v-for="cate_2nd in cate_1st.children" :key="cate_2nd.id">
									<navigator url="../goods/list/list">
										<u--image :src="cate_2nd.img" width="100rpx" height="120rpx"></u--image>
										<u--text :text="cate_2nd.name" margin="24rpx 0 44rpx 0" size="24rpx" color="#777" align="center">
										</u--text>
									</navigator>
								</u-grid-item>
							</u-grid>
						</view>
					</view>
				</uv-vtabs-item>
			</template>
		</uv-vtabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
				{
					name: '女装',
					img: require('@/static/category/banner-3.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-1.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-2.jpg') },
						{ id: 3, name: '连衣裙', img: require('@/static/category/cate-3.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-4.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-5.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-6.jpg') },
						{ id: 7, name: '家居服', img: require('@/static/category/cate-7.jpg') },
						{ id: 8, name: '羽绒服', img: require('@/static/category/cate-8.jpg') },
						{ id: 9, name: '鞋靴', img: require('@/static/category/cate-9.jpg') }
					]
				},
				{
					name: '男装',
					img: require('@/static/category/banner-4.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-10.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-11.jpg') },
						{ id: 3, name: '夹克', img: require('@/static/category/cate-12.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-13.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-14.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-15.jpg') },
						{ id: 7, name: '鞋靴', img: require('@/static/category/cate-16.jpg') }
					]
				},
				{
					name: '婴童',
					img: require('@/static/category/banner-3.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-1.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-2.jpg') },
						{ id: 3, name: '连衣裙', img: require('@/static/category/cate-3.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-4.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-5.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-6.jpg') },
						{ id: 7, name: '家居服', img: require('@/static/category/cate-7.jpg') },
						{ id: 8, name: '羽绒服', img: require('@/static/category/cate-8.jpg') },
						{ id: 9, name: '鞋靴', img: require('@/static/category/cate-9.jpg') }
					]
				},
				{
					name: '居家',
					img: require('@/static/category/banner-4.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-1.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-2.jpg') },
						{ id: 3, name: '连衣裙', img: require('@/static/category/cate-3.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-4.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-5.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-6.jpg') },
						{ id: 7, name: '家居服', img: require('@/static/category/cate-7.jpg') },
						{ id: 8, name: '羽绒服', img: require('@/static/category/cate-8.jpg') },
						{ id: 9, name: '鞋靴', img: require('@/static/category/cate-9.jpg') }
					]
				},
				{
					name: '配饰',
					img: require('@/static/category/banner-3.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-1.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-2.jpg') },
						{ id: 3, name: '连衣裙', img: require('@/static/category/cate-3.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-4.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-5.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-6.jpg') },
						{ id: 7, name: '家居服', img: require('@/static/category/cate-7.jpg') },
						{ id: 8, name: '羽绒服', img: require('@/static/category/cate-8.jpg') },
						{ id: 9, name: '鞋靴', img: require('@/static/category/cate-9.jpg') }
					]
				},
				{
					name: '餐厨',
					img: require('@/static/category/banner-4.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-1.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-2.jpg') },
						{ id: 3, name: '连衣裙', img: require('@/static/category/cate-3.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-4.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-5.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-6.jpg') },
						{ id: 7, name: '家居服', img: require('@/static/category/cate-7.jpg') },
						{ id: 8, name: '羽绒服', img: require('@/static/category/cate-8.jpg') },
						{ id: 9, name: '鞋靴', img: require('@/static/category/cate-9.jpg') }
					]
				},
				{
					name: '饮食',
					img: require('@/static/category/banner-3.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-1.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-2.jpg') },
						{ id: 3, name: '连衣裙', img: require('@/static/category/cate-3.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-4.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-5.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-6.jpg') },
						{ id: 7, name: '家居服', img: require('@/static/category/cate-7.jpg') },
						{ id: 8, name: '羽绒服', img: require('@/static/category/cate-8.jpg') },
						{ id: 9, name: '鞋靴', img: require('@/static/category/cate-9.jpg') }
					]
				},
				{
					name: '杂货',
					img: require('@/static/category/banner-4.png'),
					children: [
						{ id: 1, name: '衬衫', img: require('@/static/category/cate-1.jpg') },
						{ id: 2, name: 'T恤', img: require('@/static/category/cate-2.jpg') },
						{ id: 3, name: '连衣裙', img: require('@/static/category/cate-3.jpg') },
						{ id: 4, name: '卫衣', img: require('@/static/category/cate-4.jpg') },
						{ id: 5, name: '大衣', img: require('@/static/category/cate-5.jpg') },
						{ id: 6, name: '裤装', img: require('@/static/category/cate-6.jpg') },
						{ id: 7, name: '家居服', img: require('@/static/category/cate-7.jpg') },
						{ id: 8, name: '羽绒服', img: require('@/static/category/cate-8.jpg') },
						{ id: 9, name: '鞋靴', img: require('@/static/category/cate-9.jpg') }
					]
				}]
			};
		},
		computed: {
			height() {
				return uni.getSystemInfoSync().windowHeight - uni.upx2px(88);
			}
		},
		methods: {}
	};
</script>

<style>
	.search-bar {
		height: 88rpx;
		padding: 10rpx;
		box-sizing: border-box;
	}

	.tab-right {
		padding: 20rpx;
	}

	.banner {
		margin-bottom: 42rpx;
	}

	.cate_2nd {
		margin-top: 72rpx;
	}
</style>