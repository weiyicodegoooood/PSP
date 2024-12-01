/**
 * 登录表单提交请求数据类型
 */
export interface LoginReq {
	username: string;
	password: string;
	// code: string;
	// captchaId: string;
}

/**
 * 注册表单提交请求数据类型
 */
export interface RegisterReq {
	enterpriseName: string;
	businessType: string;
	legalPersonName: string;
	legalPersonIdCard: string;
	contactNumber: string;
	businessLicenseNumber: string;
	registeredAddress: string;
	taxRegistrationNumber: string;
	alipayAccount: string;
}
