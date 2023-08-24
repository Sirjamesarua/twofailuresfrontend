import axios from "axios";

const axiosClient2 = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient2.interceptors.request.use((config) => {
    const token = localStorage.getItem('tfa_token');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "multipart/form-data"
    // console.log(config);
    return config;
});

axiosClient2.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            localStorage.clear('tfa_token');
            window.location.href = "/admin/login";
        }
    } catch (error) {
        console.log(error);
    }

    throw error
});

export default axiosClient2