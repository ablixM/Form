import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/api-client";
import { LoginCredentials } from "../entities/LoginCredentials.ts";

const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginCredentials) => loginUser(data),
        onSuccess: (response) => {
            console.log("Login successful:", response.data);

        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });
};

export default useLogin;