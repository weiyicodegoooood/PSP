<template>
	<ElForm
		class="register-form"
		ref="registerRef"
		:model="registerParam"
		:rules="registerRules"
		label-width="80px"
	>
		<ElFormItem label="用户名" prop="enterpriseName">
			<ElInput
				placeholder="请输入用户名"
				v-model="registerParam.username"
			></ElInput>
		</ElFormItem>
		<ElFormItem label="邮箱" prop="email">
			<ElInput
				placeholder="请输入邮箱"
				v-model="registerParam.email"
			></ElInput>
		</ElFormItem>
		<ElFormItem label="密码" prop="password">
			<ElInput
				placeholder="请输入密码"
				type="password"
				v-model="registerParam.password"
			></ElInput>
		</ElFormItem>
		<ElFormItem label="确认密码" prop="confirmPass">
			<ElInput
				placeholder="请输入确认密码"
				type="password"
				v-model="registerParam.confirmPass"
			></ElInput>
		</ElFormItem>

		<ElFormItem>
			<ElButton
				type="primary"
				color="#007750"
				class="register-btn w-full"
				size="large"
				@click="submit(registerRef)"
			>
				注册
			</ElButton>
		</ElFormItem>
	</ElForm>
</template>

<script setup lang="ts">
import { register } from '../../api/user';
import { reactive, ref } from 'vue';
import { ElMessage, FormInstance, FormRules } from 'element-plus';

import { useUserStore } from '../../store/user';
const userStore = useUserStore();

const registerParam = reactive({
	username: '',
	email: '',
	password: '',
	confirmPass: ''
});
const registerRef = ref<FormInstance>();
const registerRules: FormRules = reactive({
	username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
	email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
	confirmPass: [
		{ required: true, message: '请再次输入密码', trigger: 'blur' }
	]
});
const submit = async (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log('submit!');
			register(registerParam).then(res => {
				if (res.code === 200) {
					ElMessage.success('注册成功');
					userStore.IsLogin = true;
				} else {
					ElMessage.error(res.message);
				}
			});
		} else {
			console.log('error submit!', fields);
		}
	});
};
// 修改网页标题为商家注册
onMounted(() => {
	document.title = '注册';
});
</script>

<style scoped></style>
