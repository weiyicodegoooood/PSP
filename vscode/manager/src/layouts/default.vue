<template>
	<div>
		<el-container class="home-container">
			<!-- header -->
			<el-header>
				<el-row>
					<el-col :span="4">
						<!-- 将文字水平垂直居中 -->
						<div class="system-name leading-[60px] ml-5">
							商城管理平台
						</div>
					</el-col>

					<el-col :offset="12" :span="8" style="min-width: 150px">
						<el-dropdown style="float: right; margin: 20px 10px">
							<span
								class="el-dropdown-link"
								style="color: #fff; cursor: pointer"
							>
								{{ userInfo.username }} &nbsp;&nbsp;
								<el-icon class="el-icon--right">
									<arrow-down />
								</el-icon>
							</span>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item @click.native="logout">
										退出系统
									</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
						<el-avatar
							shape="square"
							style="margin: 10px; float: right"
						>
							{{ userInfo.username }}
						</el-avatar>
					</el-col>
				</el-row>
			</el-header>

			<el-container style="overflow: auto">
				<!-- 菜单 -->
				<el-aside>
					<el-menu
						router
						:default-active="activePath"
						class="el-menu-vertical-demo"
						:collapse="isCollapse"
					>
						<el-menu-item
							:index="item.path"
							:key="item.path"
							v-for="item in menuList"
							:to="item.path"
							@click="saveActiveNav(item.path)"
						>
							<el-icon :class="item.icon" />
							<span slot="title">{{ item.title }}</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-container>
					<el-main>
						<!-- 面包屑 -->
						<!-- <Breadcrumb /> -->
						<!-- 主要内容 -->
						<router-view></router-view>
					</el-main>
					<el-footer height="30px" style="line-height: 30px">
						Copyright © 2024 商城管理平台
					</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>
<script setup lang="ts">
import { userLogout } from '../api/user/index';
const router = useRouter();
let isCollapse = ref(false);
let activePath = ref('/dashboard');

const userInfo = ref({
	username: '用户',
	code: '1231'
});
//侧边栏菜单
const menuList = ref([
	{
		title: '概览',
		icon: 'el-icon-s-home',
		path: '/dashboard'
	},
	{
		title: '用户管理',
		icon: 'el-icon-s-user',
		path: '/user-manage'
	},
	{
		title: '商品管理',
		icon: 'el-el-icon-business',
		path: '/good-manage'
	}
]);
// 挂载 DOM 之前
onBeforeMount(() => {
	activePath.value = sessionStorage.getItem('activePath') || '/dashboard';
});
onMounted(() => {
	let username = localStorage.getItem('username');
	if (username) {
		console.log(username);
		userInfo.value.username = username;
	}
});

// 保存链接的激活状态
const saveActiveNav = (path: string) => {
	sessionStorage.setItem('activePath', path);
	router.push(path);
	activePath.value = path;
};
const logout = async () => {
	// 清除缓存
	sessionStorage.clear();
	localStorage.clear();

	// 清除用户信息
	userInfo.value = {
		username: '',
		code: ''
	};
	// 跳转到登录页
	await userLogout();
	router.push('/login');
};
</script>

<style scoped>
.home-container {
	position: absolute;
	height: 100%;
	top: 0;
	left: 0;
	width: 100%;
	background: #f2f3f5;
}

.el-header {
	background: #007750;
	padding: 0 10px;
	overflow: hidden;
}

.system-name {
	color: #fff;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-size: 14px;
}

.el-aside {
	background: white;
	width: auto !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}

.el-footer {
	color: #cccccc;
	text-align: center;
	line-height: 60px;
}

.el-footer:hover {
	color: #007750;
}

.toggle-button {
	background-color: #d9e0e7;
	font-size: 18px;
	line-height: 24px;
	color: #fff;
	text-align: center;
	letter-spacing: 0.2em;
	cursor: pointer;
	color: black;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}

.el-menu-item.is-active {
	color: #fff !important;
	font-size: 15px;
	font-weight: bold;
	background-color: #007750 !important;
	border-radius: 2px;
	height: 50px;
	line-height: 50px;
	box-sizing: border-box;
	margin: 2px 5px 0px 2px;
}
</style>
