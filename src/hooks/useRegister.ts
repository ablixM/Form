// src/hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/api-client";
import { RegisterCredentials } from "../entities/RegisterCredentials";

const useRegister = () => {
    return useMutation({
        mutationFn: (data: RegisterCredentials) => registerUser(data),
        onSuccess: (response) => {
            console.log("Registration successful:", response.data);
        },
        onError: (error) => {
            console.error("Registration failed:", error);
        },
    });
};

export default useRegister;