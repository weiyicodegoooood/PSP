<template>
	<el-card>
		<template #header>用户管理</template>
		<div class="w-full mb-4">
			<el-button type="primary" @click="addUserHandler">
				添加用户
			</el-button>
		</div>
		<el-table :data="users" style="width: 100%">
			<el-table-column prop="uname" label="用户名"></el-table-column>
			<el-table-column prop="sex" label="性别"></el-table-column>
			<el-table-column prop="age" label="年龄"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column label="操作">
				<template #default="scope">
					<el-button
						@click="deleteUser(scope.row.uname)"
						type="danger"
					>
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 添加/编辑用户对话框 -->
		<el-dialog :title="dialogTitle" v-model="showUserDialog">
			<el-form :model="userForm">
				<el-form-item label="用户名">
					<el-input v-model="userForm.uname"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-input v-model="userForm.sex"></el-input>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input
						v-model.number="userForm.age"
						type="number"
					></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="userForm.address"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input
						v-model="userForm.password"
						type="password"
					></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="showUserDialog = false">取消</el-button>
				<el-button type="primary" @click="saveUser">保存</el-button>
			</span>
		</el-dialog>
	</el-card>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { getAllUsers, addUser, deleteUserByName } from '../../api/user';

const users = ref([]);
const showUserDialog = ref(false);
const dialogTitle = ref('');
const userForm = reactive({
	address: '',
	age: 0,
	id: 0,
	password: '',
	sex: '',
	tx: '',
	uname: ''
});

const fetchUsers = async () => {
	try {
		const response = await getAllUsers();
		users.value = response.data;
	} catch (error) {
		console.error('Error fetching users:', error);
	}
};

const addUserHandler = () => {
	dialogTitle.value = '添加用户';
	resetUserForm();
	showUserDialog.value = true;
};

const saveUser = async () => {
	try {
		await addUser(userForm).then(res => {
			if (res.code == 200) {
				ElMessage.success('添加成功');
			} else {
				ElMessage.error('添加失败');
			}
		});
		fetchUsers();
		showUserDialog.value = false;
	} catch (error) {
		console.error('Error saving user:', error);
	}
};

const deleteUser = async (name: string) => {
	try {
		await deleteUserByName(name).then(res => {
			if (res.code == 200) {
				ElMessage.success('删除成功');
			} else {
				ElMessage.error('删除失败');
			}
		});
		fetchUsers();
	} catch (error) {
		console.error('Error deleting user:', error);
	}
};

const resetUserForm = () => {
	userForm.id = 0;
	userForm.tx = '';
	userForm.uname = '';
	userForm.sex = '';
	userForm.age = 0;
	userForm.address = '';
	userForm.password = '';
};

onMounted(fetchUsers);
</script>
