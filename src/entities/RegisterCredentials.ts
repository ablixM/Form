// src/entities/RegisterCredentials.ts
export interface RegisterCredentials {
    email: string;
    userName: string;
    password: string;
    roles: string[]; // Optional, depending on your registration flow
}