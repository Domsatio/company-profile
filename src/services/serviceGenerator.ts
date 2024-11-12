import instance from "../lib/axios/instance";

const tokenHeader = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` },
});

const createService = <T, U>(endpoint: string) => ({
  getItems: (params?: Record<string, any>) =>
    instance.get(`/api/${endpoint}`, { params }),
  getItem: (params?: Record<string, any>) =>
    instance.get(`/api/${endpoint}`, { params }),
  addItem: (item: T) => instance.post(`/api/${endpoint}`, item),
  updateItem: (item: U, params?: Record<string, any>) =>
    instance.put(`/api/${endpoint}`, item, { params }),
  deleteItem: (params?: Record<string, any>) =>
    instance.delete(`/api/${endpoint}`, { params }),
});

// export const postServices = createService<Post, UpdatePost>("post");

export const dashboardServices = {
  getDashboard: (token: string) =>
    instance.get("/api/dashboard", tokenHeader(token)),
};

export const resetPasswordServices = {
  sendEmail: (email: string) =>
    instance.post("/api/reset-password/send-email", email),
  resetPassword: (token: string, password: string) =>
    instance.post("/api/reset-password", password, { params: { token } }),
};
