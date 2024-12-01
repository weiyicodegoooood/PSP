<template>
	<el-table :data="props.tableData" border style="width: 100%">
		<el-table-column prop="productName" label="商品名称" width="180" />
		<el-table-column prop="buyer" label="买家信息" />
		<el-table-column prop="price" label="成交价格" width="180" />
		<el-table-column prop="date" label="成交时间" width="180" />
	</el-table>
</template>

<script setup lang="ts">
const props = defineProps({
	tableData: {
		type: Array,
		required: true
	}
});
</script>
