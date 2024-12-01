import Vue from "vue";

import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		cart_list: [
			{
				id: 11,
				img: require("@/static/index/img-1.png"),
				name: "小物件",
				word: "一件能明显提升幸福感的小物件",
				price: 61.9,
				count: 2,
			},
			{
				id: 12,
				img: require("@/static/index/img-2.png"),
				// 舒适睡眠，享受品质生活
				name: "豪华大床",
				word: "为您的美梦保驾护航，幸福感瞬间升级",
				price: 261.9,
				count: 1,
			},
			{
				id: 13,
				img: require("@/static/index/img-3.png"),
				// 时尚男士必备，性价比之选
				name: "经典男士外套",
				word: "潮流风格，优质面料，超值价格，不容错过",
				price: 45.9,
				count: 1,
			},
			{
				id: 14,
				img: require("@/static/index/img-4.png"),
				// 精致耐用，出行无忧
				name: "瓦尔塔牌轻便行李箱",
				word: "坚固耐用，空间充足，旅行最佳伴侣",
				price: 87.9,
				count: 1,
			},
			{
				id: 15,
				img: require("@/static/index/img-5.png"),
				// 软糯吸水，亲肤舒适
				name: "GNF高端纯棉毛巾",
				word: "质感细腻，快速吸湿，为日常生活增添温馨",
				price: 5.9,
				count: 3,
			},
			{
				id: 16,
				img: require("@/static/index/img-6.png"),
				// 时尚优雅，温暖整个秋冬
				name: "女士时尚羊毛呢外套",
				word: "经典剪裁，保暖舒适，彰显女性魅力",
				price: 78.9,
				count: 1,
			},
		],
		//商品详情
		goods_detail: {
			name: "高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖高端GNF不锈钢脚踏垃圾桶家用40L大容量30L厨房25L客厅8L有盖",
			word: "一件能明显提升幸福感的小物件",
			price: 61.9,
			photo: require("@/static/index/img-1.png"),
			banner: [require("@/static/detail/photo-2.jpg")],
		},
	},
	mutations: {
		//相当于同步的操作
		// 添加进购物车
		add_cart(state, data) {
			let index = state.cart_list.findIndex(
				(item) => item.id === data.id
			);
			if (index === -1) {
				state.cart_list.push(data);
			} else {
				state.cart_list[index].count++;
			}
			console.log(state.cart_list);
		},
		// 减少数量
		reduce_cart(state, id) {
			let index = state.cart_list.findIndex((item) => item.id === id);
			if (state.cart_list[index].count > 1) {
				state.cart_list[index].count--;
			} else {
				state.cart_list.splice(index, 1);
			}
		},
		setGoodDetail(state, data) {
			state.goods_detail = data;
		},
	},
	actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	},
	// plugins: [
	// 	createPersistedState({
	// 		storage: { // 存储方式定义  
	// 		                getItem: (key) => uni.getStorageSync(key), // 获取  
	// 		                setItem: (key, value) => uni.setStorageSync(key, value), // 存储  
	// 		                removeItem: (key) => uni.removeStorageSync(key) // 删除  
	// 		            }
	// 	}),
	// ],
});
export default store;
