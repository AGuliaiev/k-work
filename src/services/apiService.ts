import axios from 'axios';


import {baseURL} from "../constans/urls";
import {authService} from "./authService";

const apiService = axios.create({ baseURL });
authService.setToken('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGI0M2E2MGI4MjgzYjFkY2NkMGRlNTM0NzAzZmZmYSIsInN1YiI6IjY0YzBlMDk4MDk3YzQ5MDExZDgyOTZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hieG5g6ovfYc6sYzKNviWMn__4Cu3qUAsDvvo9s0A8')
apiService.interceptors.request.use(request => {
    const token: string | undefined = authService.getToken('token');

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

export {
    apiService
};
