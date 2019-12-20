import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1b48c8cf-ec5e-4d2d-a057-48ca693a94d0"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getUsersProfile(userId) {
        console.warn('Use profileAPI getUsersProfile');
        return profileAPI.getUsersProfile(userId);
    }
}

export const profileAPI = {
    getUsersProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        });
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me');
    },

    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },

    logout() {
        return instance.delete('auth/login');
    }
}