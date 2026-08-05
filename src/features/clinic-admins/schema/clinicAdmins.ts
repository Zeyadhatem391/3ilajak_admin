import z from "zod";

export const addClinicAdmins = z.object({
    admin_id: z.number()
        .min(1, "An admin must be selected."),
    clinic_id: z.number()
        .min(1, "The clinic must be selected."),
    note: z.string().optional(),
    status: z.enum(["active", "inactive"], {
        error: "Status is required",
    }),
})

export const updateClinicAdmins = addClinicAdmins.partial();