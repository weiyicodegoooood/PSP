<template>
	<view>
		<!-- 间隔槽 -->
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<view class="infor">
			<!-- 头像 -->
			<view class="avatar">
				<u--image :src="avatar" @click="sheet_visible = true" shape="circle" width="220rpx"
					height="220rpx"></u--image>
			</view>
			<!-- 上传头像-操作菜单 -->
			<u-action-sheet :actions="action_list" :show="sheet_visible" @select="handleSelectAction"
				@click="handleSelectAction" @close="sheet_visible = false" cancel-text="取消"
				close-on-click-overlay></u-action-sheet>
			<!-- 信息 -->
			<view class="information">
				<view class="cell">
					<view class="left">
						<u--text text="昵称"></u--text>
					</view>
					<view class="right">
						<u--input type="text" placeholder="喵喵酱" placeholderStyle="text-align:right;" v-model="info.name"
							border="false"></u--input>
					</view>
				</view>
				<view class="cell">
					<view class="left">
						<u--text text="性别" v-model="info.sex"></u--text>
					</view>
					<view class="right">
						<u-radio-group v-model="radiovalue1">
							<u-radio name="man" label="男" class="button1" activeColor="#c55a5c"></u-radio>
							<u-radio name="womem" label="女" class="button2" activeColor="#c55a5c"></u-radio>
						</u-radio-group>
					</view>
				</view>
				<view class="cell">
					<view class="left">
						<u-text text="手机"></u-text>
					</view>
					<view class="right">
						<u--input type="number" placeholder="15863008280" placeholderStyle="text-align:right;"
							border="false" v-model="info.pheno"></u--input>
					</view>
				</view>
				<u-modal v-model="show" :content="content"></u-modal>
			</view>
		</view>
		<!-- 保存按钮-工具条 -->
		<view class="tools-bar">
			<u-button color="#c55a5c" @click="save">保存修改</u-button>
		</view>

	</view>
</template>

<script>
	import toast from '../../../uni_modules/uview-ui/libs/config/props/toast';
	export default {
		data() {
			return {
				avatar: require('@/static/center/avatar.png'),
				action_list: [
					// #ifdef MP
					{
						name: "拍照"
					},
					// #endif
					{
						name: "相册"
					},
				],
				sheet_visible: false,
				radiovalue1: "man",
				info: {
					name: "",
					sex: "",
					pheno: ""
				},
				show: false,
				content: '东临碣石，以观沧海'
			}
		},
		methods: {
			handleSelectAction(action) {
				//拍照
				if (action.name === "拍照") {
					uni.$u.toast("仅小程序使用！");
				}

				// 相册
				if (action.name === "相册") {
					uni.chooseImage({
						// 调用成功
						success: ({
							errMsg,
							tempFilePaths,
							tempFiles
						}) => {
							if (errMsg === "chooseImage:ok") {
								this.avatar = tempFilePaths[0];
							}
						},
						// 调用失败
						fail(error) {
							console.log(res);
						},
					})
				}

			},
			save() {
				console.log(this.info.name)
				this.show = true
				console.log(this.show)
				uni.$u.toast("修改成功！")
				// uni.navigateTo({
				// 	url: `/pages/user/center/center?name=${this.info.name}&sex=${this.info.sex}&pheno=${this.info.pheno}`
				// 	// url: "/pages/user/center/center"
				// })
				uni.switchTab({
						url: `/pages/user/center/center?name=${this.info.name}&sex=${this.info.sex}&pheno=${this.info.pheno}`,
						complete() {
							uni.$u.toast("修改成功！")
						}
					}),
					uni.switchTab({

					})
			}


		}
	}
</script>

<style>
	.infor {
		padding: 0 25rpx;
	}

	.avatar {
		display: flex;
		justify-content: center;
		padding-top: 60rpx;
		padding-bottom: 84rpx;
	}


	.information .cell {
		display: flex;
		height: 107rpx;
		margin-bottom: 41rpx;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #cecece;
	}

	.information .cell .right .button2 {
		margin-right: 25rpx;
	}

	.information .cell .right .button1 {
		margin-right: 93rpx;
	}

	/* 保存按钮-工具条*/
	.tools-bar {
		position: fixed;
		right: 21rpx;
		bottom: 50rpx;
		left: 21rpx;
	}
</style>