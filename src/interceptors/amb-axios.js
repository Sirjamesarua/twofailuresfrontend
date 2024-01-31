import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('tf_amb_t');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.email = `${token}`;
    return config;
});

axiosClient.interceptors.response.use((response) => { return response }, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            // console.log(response);
            localStorage.removeItem("tf_amb_t");
            window.location.href = "/";
        }
    } catch (error) {
        console.log(error);
    }

    throw error
});

export default axiosClient