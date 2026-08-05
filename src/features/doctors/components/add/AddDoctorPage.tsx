"use client";

import { Button } from "@/components/ui/button";
import { Clinic } from "@/features/clinics/api/getAllClinics";
import { addDoctor } from "@/features/doctors/api/addDoctor";
import DemoDoctors from "@/features/doctors/components/add/DemoDoctors";
import FormDoctors from "@/features/doctors/components/add/FormDoctors";
import StatusDoctors from "@/features/doctors/components/add/StatusDoctors";
import { addDoctors, AddDoctorsInput } from "@/features/doctors/schema/doctors";
import Breadcrumb from "@/shared/components/atoms/Breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRoundCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import AddPhotoDoctor from "./AddPhotoDoctor";
import { Specializations } from "@/features/specializations/api/getAllSpecializations";

interface Props {
  clinics: Clinic[];
  specializations: Specializations[];
}

export default function AddDoctorPage({ clinics, specializations }: Props) {
  const router = useRouter();

  const methods = useForm<AddDoctorsInput>({
    resolver: zodResolver(addDoctors),
    mode: "onBlur",
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: AddDoctorsInput) => {
    try {
      const response = await addDoctor(data);

      console.log("API Success:", response);

      toast.success("Doctor added successfully");

      reset();

      router.push("/dashboard/doctors");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-12 items-start gap-6">
            <div className="col-span-8 flex flex-col gap-6">
              <FormDoctors clinics={clinics} specializations={specializations}/>
            </div>

            <div className="col-span-4 flex flex-col gap-8">
              <DemoDoctors />
              <StatusDoctors />

              <AddPhotoDoctor />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2 border-t-2 border-gray-400 pt-6">
            <Button
              variant="outline"
              disabled={isSubmitting}
              onClick={() => {
                reset();
                router.back();
              }}
              type="button"
              className="h-11 w-40 cursor-pointer rounded-lg"
            >
              Discard Changes
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-58 cursor-pointer rounded-lg bg-blue-800 text-lg font-semibold text-white"
            >
              <UserRoundCheck className="h-6 w-6" />

              <span>
                {isSubmitting ? "Registering..." : "Complete Registration"}
              </span>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
