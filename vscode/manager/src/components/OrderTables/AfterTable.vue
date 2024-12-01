<template>
	<el-table :data="props.tableData" border style="width: 100%">
		<el-table-column prop="productName" label="商品名称" width="180" />
		<el-table-column prop="buyer" label="买家" />
		<el-table-column prop="service" label="售后服务内容" />
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
