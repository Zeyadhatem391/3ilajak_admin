"use client";

import { Button } from "@/components/ui/button";
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

export default function Page() {
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

      reset();

      router.push("/dashboard/doctors");
      router.refresh();
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-12 items-start gap-6">
            <div className="col-span-8 flex flex-col gap-6">
              <FormDoctors />
            </div>

            <div className="col-span-4 flex flex-col gap-8">
              <DemoDoctors />
              <StatusDoctors />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2 border-t-2 border-gray-400 pt-6">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => {
                reset();
              }}
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
