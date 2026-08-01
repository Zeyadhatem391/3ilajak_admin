import { z } from "zod";

export const addDoctors = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(100, "Name must not exceed 100 characters."),

  email: z
    .string()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(20, "Phone number is too long."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),

  national_id: z
    .string()
    .regex(/^\d{14}$/, "National ID must be exactly 14 digits."),

  medical_license: z
    .string()
    .min(3, "Medical license is required."),

  clinic_id: z.number().min(1, "Clinic is required."),

  specialization_id: z.number().min(1, "Specialization is required."),

  gender: z.enum(["male", "female"]),

  date_of_birth: z
    .string()
    .min(1, "Date of birth is required."),

  blood_type: z.enum([
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ]),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters."),

  status: z.enum([
    "active",
    "inactive",
    "on_leave",
  ]),

  photo: z.instanceof(File).nullable().optional(),

});

export type AddDoctorsInput = z.infer<typeof addDoctors>;