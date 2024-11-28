"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string(),

})

export default function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="flex flex-col justify-center items-center pt-10">
            <Avatar className="w-16 h-16">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center space-y-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>名称</FormLabel>
                                <FormControl>
                                    <Input placeholder="请输入你的名称" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>邮箱</FormLabel>
                                <FormControl>
                                    <Input placeholder="请输入你的邮箱" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="space-x-3">
                        <Button type="submit" className="w-16">保存</Button>
                        <Button variant="outline" className="w-16">重置</Button>
                    </div>
                </form>
            </Form>
        </div>

    )
}
