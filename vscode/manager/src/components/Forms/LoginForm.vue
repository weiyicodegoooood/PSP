<template>
	<ElForm
		class="login-form w-full"
		ref="loginRef"
		:model="loginParam"
		:rules="loginRules"
	>
		<ElFormItem prop="username">
			<ElInput
				placeholder="请输入账号"
				:prefix-icon="User"
				v-model="loginParam.username"
				size="large"
			></ElInput>
		</ElFormItem>
		<ElFormItem prop="password">
			<ElInput
				placeholder="请输入密码"
				show-password
				:prefix-icon="Lock"
				v-model="loginParam.password"
				size="large"
			></ElInput>
		</ElFormItem>
		<ElFormItem>
			<ElButton
				color="#007750"
				class="login-btn w-full"
				size="large"
				@click="submit(loginRef)"
			>
				登录
			</ElButton>
		</ElFormItem>
		<div class="w-full flex justify-between items-center cursor-pointer">
			<!--			<div>忘记密码</div>-->
		</div>
	</ElForm>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { LoginReq } from '../../types/user';
import { onMounted, reactive, ref } from 'vue';
import { FormInstance, FormRules } from 'element-plus';
import { login } from '../../api/user';
import router from '../../router';

const loginParam: LoginReq = reactive({
	username: '',
	password: ''
});
// const captchaUrl = ref('')

onMounted(() => {
	// getCaptcha().then(res => {
	//     console.log(res)
	//     //修改loginParam中captchaId数值
	//     console.log(res.data.id);
	//     captchaUrl.value = res.data.imageBase64
	// })
});
const loginRef = ref<FormInstance>();
const loginRules: FormRules = reactive({
	username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
	password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
});
const submit = async (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log('submit!');
			login({
				name: loginParam.username,
				password: loginParam.password
			}).then(
				res => {
					console.log(res);
					if (res.code === 200) {
						// 登录成功
						console.log(res);

						localStorage.setItem('username', loginParam.username);
						router.push('/dashboard');
					} else {
						ElMessage.error(res.message);
					}
				},
				err => {
					ElMessage.error('登录失败');
					console.log(err.message);
				}
			);
		} else {
			console.log('error submit!', fields);
		}
	});
};
// 修改网页标题为商家登录
onMounted(() => {
	document.title = '登录';
});
</script>

<style scoped></style>
