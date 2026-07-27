import z from "zod";

export const addClinicAdmins = z.object({
    administrator: z.string()
        .min(1, "An admin must be selected."),
    clinic: z.string()
        .min(1, "The clinic must be selected."),
    note: z.string().optional(),
})

export const updateClinicAdmins = addClinicAdmins.partial();