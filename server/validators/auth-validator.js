const { z } = require("zod");

// Creating a schema for user signup
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(255, { message: "Name must not exceed 255 characters" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters long" })
        .max(255, { message: "Email must not exceed 255 characters" }),

    phone: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .min(10, { message: "Phone number must be at least 10 characters long" })
        .max(20, { message: "Phone number must not exceed 20 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "Password must be at least 7 characters long" })
        .max(1024, { message: "Password must not exceed 1024 characters" }),
});

// Creating a schema for user login
const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters long" })
        .max(255, { message: "Email must not exceed 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "Password must be at least 7 characters long" })
        .max(1024, { message: "Password must not exceed 1024 characters" }),
});

module.exports = { signupSchema, loginSchema };
