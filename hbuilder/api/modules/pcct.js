import ajax from "@/utils/ajax.js";

// 获取行政区域
let district = (data) => ajax.get("/config/district", data);

export default {
	district,
}