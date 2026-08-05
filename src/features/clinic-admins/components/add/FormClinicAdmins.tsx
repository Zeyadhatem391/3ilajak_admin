"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Contact, Hospital } from "lucide-react";
import z from "zod";
import { addClinicAdmins, updateClinicAdmins } from "../../schema/clinicAdmins";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clinic } from "@/features/clinics/api/getAllClinics";
import { Admin } from "@/features/admins/api/getAllAdmins";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addClinicAdmin } from "../../api/addClinicAdmin";

export type AddClinicAdminsInput = z.infer<typeof addClinicAdmins>;
type UpdateClinicAdminsInput = z.infer<typeof updateClinicAdmins>;

type FormClinicAdminsProps = {
  mode?: "add" | "update";
  clinics: Clinic[];
  admins: Admin[];
};

function FormClinicAdmins({
  mode = "add",
  clinics,
  admins,
}: FormClinicAdminsProps) {
  const router = useRouter();
  const isUpdate = mode === "update";

  // const schema = isUpdate ? addClinicAdmins : updateClinicAdmins;

  // type FormInput = AddClinicAdminsInput | UpdateClinicAdminsInput;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddClinicAdminsInput>({
    resolver: zodResolver(addClinicAdmins),
    mode: "onBlur",
    defaultValues: {
      status: "active",
    },
  });

  const onSubmit = async (data: AddClinicAdminsInput) => {
      console.log(data);
  console.log(typeof data.admin_id);
    try {
      const response = await addClinicAdmin(data);

      console.log("API Success:", response);

      toast.success("Clinic Admin added successfully");

      reset();

      router.push("/dashboard/clinic-admins");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col bg-white shadow rounded-2xl">
      <div className="flex justify-between p-7 border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <Contact className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Assignment Details</span>
        </div>
        <div className="py-1 px-2 bg-blue-200 rounded-full text-sm text-blue-800">
          {isUpdate ? "UPDATE ASSIGNMENT" : "NEW ASSIGNMENT"}
        </div>
      </div>
      <div className="p-6">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full space-y-0.5">
            <Label htmlFor="administrator" className="text-md">
              Select System Administrator
            </Label>

            <p className="text-gray-600">
              Choose an existing system admin to delegate to a specific clinic.
            </p>

            <div className="relative">
              <Hospital
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400"
              />

              <Select
                value={watch("admin_id")?.toString()}
                onValueChange={(value) =>
                  setValue("admin_id", Number(value), {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              >
                <SelectTrigger
                  id="administrator"
                  className="h-11 py-5 bg-gray-100 w-full border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
                >
                  <SelectValue placeholder="Select System Administrator" />
                </SelectTrigger>

                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  className="bg-white"
                >
                  {admins.map((admin) => (
                    <SelectItem key={admin.id} value={admin.id.toString()}>
                      {admin.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {errors.admin_id && (
              <p className="mt-2 text-sm text-red-500">
                {errors.admin_id.message}
              </p>
            )}
          </div>

          <div className="w-full space-y-0.5">
            <Label htmlFor="clinic" className="text-md">
              Target Clinic Facility
            </Label>

            <p className="text-gray-600">
              Select the medical facility this administrator will be responsible
              for.
            </p>

            <div className="relative">
              <Hospital
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400"
              />

              <Select
                value={watch("clinic_id")?.toString()}
                onValueChange={(value) =>
                  setValue("clinic_id", Number(value), {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              >
                <SelectTrigger
                  id="clinic"
                  className="h-11 py-5 bg-gray-100 w-full border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
                >
                  <SelectValue placeholder="Target Clinic Facility" />
                </SelectTrigger>

                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  className="bg-white"
                >
                  {clinics.map((clinic) => (
                    <SelectItem key={clinic.id} value={clinic.id.toString()}>
                      {clinic.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {errors.clinic_id && (
              <p className="mt-2 text-sm text-red-500">
                {errors.clinic_id.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notes" className="text-gray-700">
                Assignment Notes (Optional)
              </Label>
            </div>

            <Textarea
              id="notes"
              className="h-25 bg-gray-100 focus-visible:border-gray-500 focus-visible:ring-0"
              placeholder="Describe scope of responsibility or specific authorization levels..."
              {...register("note")}
            />

            {errors.note && (
              <p className="mt-2 text-sm text-red-500">{errors.note.message}</p>
            )}
          </div>

          <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6 mt-5">
            <Button
              onClick={() => {
                reset();
                router.back();
              }}
              type="button"
              disabled={isSubmitting}
              className="h-11 w-24 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer"
            >
              {isSubmitting
                ? "Saving..."
                : isUpdate
                  ? "Update Assignment"
                  : "Confirm Assignment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormClinicAdmins;
