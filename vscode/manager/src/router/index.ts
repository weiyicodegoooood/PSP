import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '登录'
		},
		component: () => import('../views/Login/Login.vue')
	},
	{
		path: '/',
		name: '主页',
		meta: {
			title: '主页'
		},
		redirect: '/dashboard',
		component: () => import('../layouts/default.vue'),
		children: [
			{
				path: '/dashboard',
				meta: {
					title: '数据展示'
				},
				component: () => import('../views/Main/DashBoard.vue')
			},
			{
				path: '/user-manage',
				meta: {
					title: '用户管理'
				},
				component: () => import('../views/Main/UserManage.vue')
			},
			{
				path: '/good-manage',
				meta: {
					title: '商品管理'
				},
				component: () => import('../views/Main/GoodsManage.vue')
			}
		]
	}
];
const router = createRouter({
	history: createWebHashHistory(),
	routes
});
// 挂载路由导航守卫：to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作
router.beforeEach((to, _, next) => {
	// 修改页面 title
	if (to.meta.title) {
		document.title = '' + to.meta.title;
	}
	// 放行登录页面
	if (to.path === '/login') {
		return next();
	}
	// 获取token
	// const token= sessionStorage.getItem('token')
	// if (!token) {
	//   return next('/login')
	// } else {
	//   next()
	// }
	return next();
});

// 导出路由
export default router;
