'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import LoginForm from './LoginForm'
import RegistrationForm from './RegisterForm'

export default function AuthTabs() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Welcome</CardTitle>
                <CardDescription className="text-center">Login or create an account to get started</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <LoginForm />
                    </TabsContent>
                    <TabsContent value="signup">
                        <RegistrationForm />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

