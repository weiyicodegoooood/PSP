<template>
	<view class="tools-bar-fix">
		<view class="form">
			<u--form :model="formData" :rules="rules" ref="uForm" label-width="170rpx" label-align="right">
				<u-form-item label="收货人：" prop="name" border-bottom>
					<u--input v-model="formData.name" placeholder="请输入收货人姓名" border="none"></u--input>
				</u-form-item>
				<u-form-item label="手机号码：" prop="tel" border-bottom>
					<u--input v-model="formData.tel" placeholder="请输入收货人手机号码" border="none"></u--input>
				</u-form-item>
				<u-form-item label="所在地区：" border-bottom>
					<u--text :text="location" @click="pcct_visible = true"></u--text>
				</u-form-item>
				<u-form-item label="详细地址：" prop="street" border-bottom>
					<view class="detail">
						<u--textarea v-model="formData.street" placeholder="门牌、楼层等"></u--textarea>
					</view>
				</u-form-item>
				<u-form-item label="邮政编码：" prop="code" border-bottom>
					<u--input v-model="formData.code" placeholder="请输入邮政编码" border="none"></u--input>
				</u-form-item>
				<u-form-item label="默认地址：" prop="isDefault" border-bottom>
					<view class="switch" slot="right">
						<u-switch v-model="formData.isDefault" :active-value="1" :inactive-value="0" active-color="#c55a5c">
						</u-switch>
					</view>
				</u-form-item>
			</u--form>
		</view>
		<!-- 省市区三级联动 -->
		<u-picker :show="pcct_visible" :columns="columns" ref="uPicker" @confirm="handlePickerConfirm" @change="handlePickerChange" key-name="name"
			@cancel="pcct_visible = false">
		</u-picker>

		<!-- 添加按钮-工具条 -->
		<view class="tools-bar">
			<u-button @click="handleSubmit" color="#c55a5c">保存修改</u-button>
		</view>
	</view>
</template>

<script>
	import { pcct } from '@/api/';

	export default {
		data() {
			return {
				formData: {
					name: "黄小米",
					tel: "13475829262",
					province: "河南省",
					city: "洛阳市",
					county: "新安县",
					street: "中海大厦6-102室",
					code: "266001",
					isDefault: 1,
				},
				rules: {
					name: [
						{ required: true, message: '请填写收货人姓名！', trigger: ['blur', 'change'] },
						{ min: 2, max: 30, message: '收货人姓名应该2 ~ 30个文字之间！', trigger: ['blur', 'change'] },
					],
					tel: [
						{ required: true, message: '请填写手机号码！', trigger: ['blur', 'change'] },
						{
							pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
							message: '手机号码不合法，重新输入！',
							trigger: ['blur', 'change']
						},
					],
					street: [
						{ required: true, message: '请填写详细地址！', trigger: ['blur', 'change'] },
					],
					code: [
						{ required: true, message: '请填写邮政编码！', trigger: ['blur', 'change'] },
						{
							pattern: /^[1-9]\d{5}$/,
							message: '邮政编码不合法，重新输入！',
							trigger: ['blur', 'change']
						},
					],
					isDefault: [
						{ type: "enum", enum: [0, 1], message: '请选择是否默认地址！', trigger: ['blur', 'change'] },
					],
				},
				// 省市区picker状态
				pcct_visible: false,
				// 省市区默认三列数据
				columns: [
					[],
					[],
					[],
				],
			}
		},
		onLoad() {
			this.loadDistrict();
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules)
		},
		computed: {
			location() {
				let { province, city, county } = this.formData;

				if (province || city || county) {
					return `${province} ${city} ${county}`;
				} else {
					return '请选择省、市、区';
				}
			},
		},
		methods: {
			// 加载行政区域数据
			async loadDistrict() {
				let { districts: [{ districts: province }] } = await pcct.district({ key: '3bff6533f064b7b1252d4fdac8613a19', subdistrict: 3 });
				// 设置默认三列省市区数据
				this.$set(this.columns, 0, province);
				this.$set(this.columns, 1, province[0].districts);
				this.$set(this.columns, 2, province[0].districts[0].districts);
			},
			// 省市区picker联动
			handlePickerChange(event) {
				let { columnIndex, value } = event;
				// 解构省市区
				let [province, city, county] = value;
				// 当省份发生变化时，加载市级的数据，区级默认加载第一个市级的数据
				if (columnIndex === 0) {
					this.$refs.uPicker.setColumnValues(1, province.districts);
					this.$refs.uPicker.setColumnValues(2, province.districts[0].districts);
				}
				// 当第二列值发生变化时，加载第三列对应的选项
				if (columnIndex === 1) {
					this.$refs.uPicker.setColumnValues(2, city.districts);
				}
			},
			// 省市区picker确认操作
			handlePickerConfirm({ value }) {
				// 解构省市区
				let [province, city, county] = value;

				this.formData.province = province.name;
				this.formData.city = city.name;
				this.formData.county = county.name;

				// 关闭 picker
				this.pcct_visible = false;
			},
			// 添加地址
			handleSubmit() {
				// 校验整个表单
				this.$refs.uForm.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('校验失败')
				});
			}
		},
	}
</script>

<style>
	.form .detail,
	.form .switch {
		flex: 1;
		padding-right: 20rpx;
	}

	/* 添加按钮 */
	.tools-bar {
		position: fixed;
		bottom: 20rpx;
		left: 0;
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.tools-bar-fix {
		padding-bottom: 100rpx;
	}
</style>