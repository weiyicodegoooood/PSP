import axios, {
	AxiosResponse,
	InternalAxiosRequestConfig,
	AxiosRequestConfig,
	AxiosError
} from 'axios';

// 创建axios实例
const service = axios.create({
	baseURL: '/api',
	timeout: 30000,
	withCredentials: true
});
// axios请求拦截器
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		let token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		config.headers['Content-Type'] = 'application/json';
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);
// axios响应拦截器
service.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError) => {
		if (error && error.response) {
			// const status = error.response.status;
			// switch (status) {
			// 	case 400:
			// 		ElMessage.error('请求错误');
			// 		break;
			// 	case 401:
			// 		ElMessage.error('未授权，请重新登录');
			// 		break;
			// 	case 403:
			// 		ElMessage.error('拒绝访问');
			// 		break;
			// 	case 404:
			// 		ElMessage.error('请求错误，未找到相应的资源');
			// 		break;
			// 	case 408:
			// 		ElMessage.error('请求超时');
			// 		break;
			// 	case 500:
			// 		ElMessage.error('服务器内部错误');
			// 		break;
			// 	case 501:
			// 		ElMessage.error('网络未实现');
			// 		break;
			// 	case 502:
			// 		ElMessage.error('网络错误');
			// 		break;
			// 	case 503:
			// 		ElMessage.error('服务不可用');
			// 		break;
			// 	case 504:
			// 		ElMessage.error('网络超时');
			// 		break;
			// 	case 505:
			// 		ElMessage.error('http版本不支持该请求');
			// 		break;
			// 	default:
			// 		ElMessage.error(`连接错误${status}`);

			// }
			return Promise.reject(error.response.data);
		}
		return Promise.reject(error);
	}
);
export type { AxiosRequestConfig, AxiosResponse, AxiosError };
export default service;
