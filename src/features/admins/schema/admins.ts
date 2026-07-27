import z from "zod";


export const addAdmins = z.object({
    name: z
        .string()
        .min(1, "Enter the legal name as it should appear on reports."),

    email: z.string().email("Corporate email used for login and notifications."),

    password: z
        .string()
        .min(
            8,
            "Minimum 8 characters with symbols, numbers, and uppercase letters.",
        ),


});

export const updateAdmins = addAdmins.partial();