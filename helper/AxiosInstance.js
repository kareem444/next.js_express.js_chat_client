import axios from "axios";

let headers = {};

const AxiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    headers,
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem("access_token");

        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default AxiosInstance;
