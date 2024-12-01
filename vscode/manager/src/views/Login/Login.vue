<template>
	<div
		class="w-full min-h-screen flex items-center justify-center relative bg-login-bg"
	>
		<ElCard
			class="min-w-[450px] max-w-[750px] min-h-[350px] px-5 relative"
			shadow="always"
		>
			<!-- @click="userStore.IsLogin = !userStore.IsLogin" -->
			<div class="absolute right-0 top-0">
				<span
					class="relative z-10 text-white right-2 top-1 after:block after:absolute after:hover:bg-[#4DA085] after:-top-2 after:-right-7 after:-z-10 after:w-20 after:h-9 after:bg-primary-color after:skew-x-[38deg] cursor-pointer"
				>
					{{ '登录' }}
				</span>
			</div>
			<p class="text-center my-10 text-2xl font-bold">
				商城管理平台
				<span></span>
			</p>
			<component
				data-aos="fade-right"
				:is="userStore.IsLogin ? loginForm : registerForm"
			/>
		</ElCard>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '../../store/user';
import loginForm from '../../components/Forms/LoginForm.vue';
import registerForm from '../../components/Forms/RegisterForm.vue';

const userStore = useUserStore();
</script>
<style scoped></style>
