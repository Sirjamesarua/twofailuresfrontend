import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ADMIN_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            localStorage.clear('ADMIN_TOKEN');
            localStorage.clear('USER_TOKEN');
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }

    throw error
});

export default axiosClient