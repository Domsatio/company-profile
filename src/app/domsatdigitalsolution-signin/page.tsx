"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/inputPassword";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const inputList: Array<{
  label: string;
  name: "email" | "password";
  type?: string;
}> = [
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

const LoginForm: React.FC = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Form Data: ", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col items-end"
        >
          {inputList.map((input) => (
            <FormField
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="w-full flex flex-col items-start">
                  <FormLabel>{input.label}</FormLabel>
                  <FormControl>
                    {input.name === "password" ? (
                        <InputPassword {...field} />
                    ) : (
                    <Input type={input.type} {...field} />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
