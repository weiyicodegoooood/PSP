<template>
	<el-card>
		<template #header>商品管理</template>
		<div class="w-full mb-4">
			<el-button type="primary" @click="addCommodityHandler">
				添加商品
			</el-button>
		</div>
		<el-table :data="commodities" style="width: 100%">
			<el-table-column prop="name" label="商品名称"></el-table-column>
			<el-table-column prop="price" label="商品价格"></el-table-column>
			<el-table-column label="操作">
				<template #default="scope">
					<el-button
						@click="deleteCommodity(scope.row.id)"
						type="danger"
					>
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 添加/编辑商品对话框 -->
		<el-dialog :title="dialogTitle" v-model="showCommodityDialog">
			<el-form :model="commodityForm">
				<el-form-item label="商品名称">
					<el-input v-model="commodityForm.name"></el-input>
				</el-form-item>
				<el-form-item label="商品图片">
					<el-input v-model="commodityForm.picture"></el-input>
				</el-form-item>
				<el-form-item label="商品描述">
					<el-input v-model="commodityForm.des"></el-input>
				</el-form-item>
				<el-form-item label="商品价格">
					<el-input
						v-model.number="commodityForm.price"
						type="number"
					></el-input>
				</el-form-item>
				<el-form-item label="商品规格">
					<el-input v-model="commodityForm.model"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="showCommodityDialog = false">取消</el-button>
				<el-button type="primary" @click="saveCommodity">
					保存
				</el-button>
			</span>
		</el-dialog>
	</el-card>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import {
	getAllCommodities,
	addCommodity as addNewCommodity, // Renamed to avoid naming conflict
	deleteCommodityById
} from '../../api/user';

const commodities = ref([]);
const showCommodityDialog = ref(false);
const dialogTitle = ref('');
const commodityForm = reactive({
	id: 0,
	name: '',
	picture:
		'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%8110.jpg',
	des: '',
	price: '0',
	model: '',
	state: 0 // Assuming default value is '1' for adding to cart
});

const fetchCommodities = async () => {
	try {
		const response = await getAllCommodities();
		commodities.value = response.data;
	} catch (error) {
		console.error('Error fetching commodities:', error);
	}
};

const addCommodityHandler = () => {
	dialogTitle.value = '添加商品';
	resetCommodityForm();
	showCommodityDialog.value = true;
};

const saveCommodity = async () => {
	try {
		await addNewCommodity(commodityForm).then(res => {
			console.log(res);
			if (res.code === 200) {
				ElMessage.success('添加成功');
			} else {
				ElMessage.error('添加失败');
			}
		});
		fetchCommodities();
		showCommodityDialog.value = false;
	} catch (error) {
		console.error('Error saving commodity:', error);
	}
};

const deleteCommodity = async (id: string) => {
	try {
		await deleteCommodityById(id).then(res => {
			if (res.code === 200) {
				ElMessage.success('删除成功');
			} else {
				ElMessage.error('删除失败');
			}
		});
		fetchCommodities();
	} catch (error) {
		console.error('Error deleting commodity:', error);
	}
};

const resetCommodityForm = () => {};

onMounted(fetchCommodities);
</script>
