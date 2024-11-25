"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import { useState } from "react";


export default function LoginPage() {
    const [showLogin, setShowLogin] = useState(true); // 状态管理，切换登录/注册

    return (
        <div className="w-full h-screen flex bg-gray-100">
            {/* 左侧区域 */}
            <div className="flex-1 flex justify-center items-center bg-white">
                <h1 className="text-4xl font-bold text-gray-800">这是Logo或标语</h1>
            </div>

            {/* 右侧卡片区域 */}
            <div className="w-full max-w-lg flex justify-center items-center bg-gray-50">
                {showLogin ? (
                    // 登录卡片
                    <Card className="w-full max-w-sm p-6 shadow-lg rounded-xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">登录</CardTitle>
                            <CardDescription className="text-sm text-gray-500">
                                请填写以下信息登录
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="mb-4">
                                    <Input type="email" placeholder="邮箱" />
                                </div>
                                <div className="mb-4">
                                    <Input type="password" placeholder="密码" />
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col justify-center">
                            <Button className="rounded-xl">登录</Button>
                        </CardFooter>
                        <Button
                            variant="link"
                            onClick={() => setShowLogin(false)} // 切换到注册卡片
                        >
                            还没有账号？注册
                        </Button>
                    </Card>
                ) : (
                    // 注册卡片
                    <Card className="w-full max-w-sm p-6 shadow-lg rounded-xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">注册</CardTitle>
                            <CardDescription className="text-sm text-gray-500">
                                请填写以下信息进行注册
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="mb-4">
                                    <Input type="email" placeholder="邮箱" />
                                </div>
                                <div className="mb-4">
                                    <Input type="password" placeholder="密码" />
                                </div>
                                <div className="mb-4">
                                    <Input type="rePassword" placeholder="确认密码" />
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col justify-center">
                            <Button className="rounded-xl">注册</Button>
                        </CardFooter>
                        <Button
                            variant="link"
                            onClick={() => setShowLogin(true)} // 切换到登录卡片
                        >
                            已有账号？登录
                        </Button>
                    </Card>
                )}
            </div>
        </div>
    );
}
