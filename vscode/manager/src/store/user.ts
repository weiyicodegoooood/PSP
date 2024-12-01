import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
	const count = ref(0);
	const user = ref(null);
	const IsLogin = ref(true);
	function increment() {
		count.value++;
	}
	function login(user: any) {
		user.value = user;
		localStorage.setItem('userInfo', user);
	}
	// 退出
	function logout(user: any) {
		user.value = '';
		localStorage.setItem('userInfo', '');
	}

	return { count, increment, user, login, logout, IsLogin};
});
