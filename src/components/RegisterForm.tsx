'use client'

import React, { useState } from 'react';
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {Checkbox} from "./ui/checkbox.tsx";
import { AlertCircle } from 'lucide-react';
import useRegister from "../hooks/useRegister.ts";


type Role = 'ADMIN' | 'USER';

export default function RegisterForm() {
    const [formData, setFormData] = useState({

        email: '',
        name: '',
        password: '',
        roles: [] as Role[] // Roles are now an array
    });
    const [error, setError] = useState('');

    const registerMutation = useRegister();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRoleChange = (role: Role) => {
        setFormData(prev => {
            // If the role is already selected, remove it; otherwise, add it
            const updatedRoles = prev.roles.includes(role)
                ? prev.roles.filter(r => r !== role) // Remove role
                : [...prev.roles, role]; // Add role
            return { ...prev, roles: updatedRoles };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password || formData.roles.length === 0) {
            setError('Please fill in all fields and select at least one role');
            return;
        }

        setError('');

        registerMutation.mutate({
            email: formData.email,
            userName: formData.name,
            password: formData.password,
            roles: formData.roles
        });
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="space-y-4">
                        <Label>Roles</Label>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="admin"
                                    checked={formData.roles.includes('ADMIN')}
                                    onCheckedChange={(checked) => handleRoleChange('ADMIN', checked)}
                                />
                                <Label htmlFor="admin" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Admin
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="user"
                                    checked={formData.roles.includes('USER')}
                                    onCheckedChange={(checked) => handleRoleChange('USER', checked)}
                                />
                                <Label htmlFor="user" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    User
                                </Label>
                            </div>
                        </div>
                    </div>
                    {error && (
                        <div className="flex items-center text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </div>
                    )}
                    <Button type="submit" className="w-full" disabled={registerMutation.isPending}>
                        {registerMutation.isPending ? "Registering..." : "Register"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}