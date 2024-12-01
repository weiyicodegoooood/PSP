import http from '../../axios';

export const login = (body: any) => {
	// login logic
	return http.post('/login', body);
};
export const register = (body: any) => {
	// register logic
	return http.post('/register', body);
};
export const userLogout = () => {
	return http.post('/logout');
};

export const getAllUsers = () => {
	return http.get('/getallusers');
};

export const addUser = (user: any) => {
	return http.post('/insertuser', user);
};

export const updateUser = (name: string, user: any) => {
	return http.put(`/updateuser/${name}`, user);
};

export const deleteUserByName = (name: string) => {
	return http.post(`/deleteuser/${name}`);
};

export const deleteUserById = (id: string) => {
	return http.delete(`/deleteuserbyid/${id}`);
};
export const getAllCommodities = () => {
	return http.get('/getallcom');
};
// addCommodity,
// 	updateCommodity,
// 	deleteCommodityById
export const addCommodity = (commodity: any) => {
	return http.post('/insertcom', commodity);
};

export const updateCommodity = (id: string, commodity: any) => {
	return http.post(`/updatecom/${id}`, commodity);
};

export const deleteCommodityById = (id: string) => {
	return http.post(`/deletecom/${id}`);
};
