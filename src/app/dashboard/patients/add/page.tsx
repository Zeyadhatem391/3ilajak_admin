"use client";
import { Button } from "@/components/ui/button";
import { addPatients } from "@/features/patients/api/addPatients";
import DemoPatient from "@/features/patients/components/add/DemoPatient";
import FormPatient from "@/features/patients/components/FormPatient";
import {
  addPatient,
  AddPatientInput,
} from "@/features/patients/schema/patient";
import Breadcrumb from "@/shared/components/atoms/Breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

function page() {
  const router = useRouter();

  const methods = useForm<AddPatientInput>({
    resolver: zodResolver(addPatient),
    mode: "onBlur",
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: AddPatientInput) => {
    try {
      const response = await addPatients(data);

      console.log("API Success:", response);

      toast.success("Patient added successfully");

      reset();

      router.push("/dashboard/patients");
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
            <div className="col-span-4 flex flex-col gap-6">
              <DemoPatient />
            </div>
            <div className="col-span-8 flex flex-col gap-6">
              <FormPatient />
            </div>
          </div>

          <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6 mt-6">
            <Button
              variant="outline"
              disabled={isSubmitting}
              onClick={() => {
                reset();
                router.back();
              }}
              type="button"
              className="h-11 w-24 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer"
            >
              {isSubmitting ? "Added..." : " Add Patient "}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default page;
