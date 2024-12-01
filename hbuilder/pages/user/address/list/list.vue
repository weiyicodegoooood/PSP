<template>
	<view class="tools-bar-fix">
		<!-- 地址列表 -->
		<view class="address-list">
			<u-list>
				<u-list-item v-for="(address,index) in address_list" :key="address.id">
					<u-cell size="large">
						<view class="address" slot="title">
							<view class="left">
								<view class="receiver">
									<u--text :text="address.fullname" mode="name" size="28rpx" color="#333"></u--text>
									<u--text :text="address.phone" mode="phone" size="28rpx" align="right" color="#333"></u--text>
								</view>
								<u--text :text="`${address.province} ${address.city} ${address.county} ${address.detail}`" margin="36rpx 0 0 0" size="24rpx"
									color="#666">
								</u--text>
							</view>
							<view class="default-tag">
								<u-tag v-if="address.is_default" text="默认" color="#c55a5c" border-color="#c55a5c" size="mini" plain>
								</u-tag>
							</view>
						</view>
						<view class="actions" slot="value">
							<!-- 编辑 -->
							<navigator url="../edit/edit" class="edit">
								<u-icon name="edit-pen" size="42rpx" color="#c55a5c"></u-icon>
							</navigator>
							<!-- 删除 -->
							<u-icon @click="open_remove_modal(index)" name="close" size="42rpx"></u-icon>
						</view>
					</u-cell>
				</u-list-item>
			</u-list>
		</view>
		<!-- 删除Modal -->
		<u-modal :show="remove_visible" @confirm="handleRemove" @cancel="remove_visible = false" content="确定要删除此收货地址吗？" show-cancel-button>
		</u-modal>
		<!-- 添加地址-工具条 -->
		<navigator url="../add/add" class="tools-bar">
			<u-button color="#c55a5c">新建收货地址</u-button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 删除Modal状态
				remove_visible: false,
				// 记录当前操作的商品索引
				current_index: -1,
				address_list: [
				{
					id: 1,
					fullname: "黄小米",
					phone: '15863008280',
					province: "山东省",
					city: "青岛市",
					county: "城阳区",
					detail: "南京路8号海信众信6楼",
					is_default: true,
				},
				{
					id: 2,
					fullname: "黄渤",
					phone: '13475829262',
					province: "山东省",
					city: "青岛市",
					county: "市南区",
					detail: "台东八路8号",
					is_default: false,
				},
				{
					id: 3,
					fullname: "黄磊",
					phone: '13475829262',
					province: "浙江省",
					city: "杭州市",
					county: "西湖区",
					detail: "东山路6号",
					is_default: false,
				},
				{
					id: 4,
					fullname: "张艺兴",
					phone: '13475829262',
					province: "江苏省",
					city: "南京市",
					county: "兰陵区",
					detail: "柳州路6号中信大厦3楼",
					is_default: false,
				},
				{
					id: 5,
					fullname: "鹿晗",
					phone: '13475829262',
					province: "北京市",
					city: "北京市",
					county: "丰台区",
					detail: "顺义门6号",
					is_default: false,
				},
				{
					id: 6,
					fullname: "罗志祥",
					phone: '13475829262',
					province: "台湾省",
					city: "台北市",
					county: "台州区",
					detail: "忠孝东路3号财富大厦505室",
					is_default: false,
				},
				{
					id: 7,
					fullname: "王迅",
					phone: '13475829262',
					province: "四川省",
					city: "成都市",
					county: "秭归区",
					detail: "南京路169号小酒馆",
					is_default: false,
				}],
			}
		},
		methods: {
			// 打开删除 Modal
			open_remove_modal(index) {
				// 记录当前操作的收货地址索引
				this.current_index = index;
				// 显示 Modal
				this.remove_visible = true;
			},
			// 删除收货地址
			handleRemove() {
				this.address_list.splice(this.current_index, 1);
				// 关闭 Modal
				this.remove_visible = false;
			},
		}
	}
</script>

<style>
	.address-list .actions {
		display: flex;
		align-items: center;
	}

	.address-list .actions .edit {
		margin-right: 45rpx;
	}

	.address-list .address {
		display: flex;
		margin-right: 64rpx;
	}

	.address-list .address .left {
		flex: 1;
	}

	.address-list .address .receiver {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.address-list .address .default-tag {
		width: 72rpx;
		flex-shrink: 0;
		margin-left: 30rpx;
	}

	/* 新建地址 */
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