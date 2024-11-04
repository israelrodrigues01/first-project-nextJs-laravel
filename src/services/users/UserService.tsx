import axios from 'axios';

interface User {
    name: string;
    email: string;
}

class UserService {
    static API_URL = 'http://127.0.0.1:8000/api/user';

    static async getUsers() {
        const response = await axios.get(this.API_URL);
        return response.data;
    }

    static async getUserById(id: number) {
        const response = await axios.get(`${this.API_URL}/${id}`);
        return response.data;
    }

    static async createUser(userData: User) {
        const response = await axios.post(this.API_URL, userData);
        return response.data;
    }

    static async updateUser(id: number, userData: User) {
        const response = await axios.put(`${this.API_URL}/${id}`, userData);
        return response.data;
    }

    static async deleteUser(id: number) {
        const response = await axios.delete(`${this.API_URL}/${id}`);
        return response.data;
    }
}

export default UserService;