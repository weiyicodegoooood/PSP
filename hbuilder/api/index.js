import pcct from "./modules/pcct.js";
import ajax from "@/uni_modules/u-ajax";
export { pcct };
export const login = (data) => {
	return ajax.post("/login", data);
};

export const register = (data) => {
	return ajax.post("/register", data);
};
	
export const getallcom=()=>{
	return ajax.get("/getallcom");
}
