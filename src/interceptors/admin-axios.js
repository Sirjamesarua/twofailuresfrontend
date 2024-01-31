import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('tfa_token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use((response) => { return response }, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            // console.log(response);
            localStorage.removeItem("tfa_token");
            window.location.href = "/";
        }
    } catch (error) {
        console.log(error);
    }

    throw error
});

export default axiosClient