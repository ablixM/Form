import axios, { AxiosResponse } from 'axios';
import {RegisterCredentials} from "../entities/RegisterCredentials.ts";


const API_BASE_URL = 'http://localhost:8080';

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    message: string;
}


const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


export const registerUser = async (user: RegisterCredentials): Promise<AxiosResponse<string>> => {
    try {
        const response = await apiClient.post<string>('/register', user);
        return response;
    } catch (error) {
        throw new Error('Failed to register user');
    }
};


export const loginUser = async (loginRequest: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    try {
        const response = await apiClient.post<LoginResponse>('/login', loginRequest);
        return response;
    } catch (error) {
        throw new Error('Failed to login');
    }
};


export const deleteUserById = async (userId: number): Promise<AxiosResponse<string>> => {
    try {
        const response = await apiClient.delete<string>(`/${userId}`);
        return response;
    } catch (error) {
        throw new Error('Failed to delete user by ID');
    }
};

export const deleteUserByEmail = async (email: string): Promise<AxiosResponse<string>> => {
    try {
        const response = await apiClient.delete<string>('/by-email', { params: { email } });
        return response;
    } catch (error) {
        throw new Error('Failed to delete user by email');
    }
};


export const getCurrentUser = async (): Promise<AxiosResponse<string>> => {
    try {
        const response = await apiClient.get<string>('/current-user');
        return response;
    } catch (error) {
        throw new Error('Failed to fetch current user');
    }
};

export default apiClient;