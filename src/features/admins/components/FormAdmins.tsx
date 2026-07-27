"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Lock, Mail, User, UserPlus } from "lucide-react";
import z from "zod";
import { addAdmins, updateAdmins } from "../schema/admins";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type AddAdminsInput = z.infer<typeof addAdmins>;
type UpdateAdminsInput = z.infer<typeof updateAdmins>;

type FormAdminsProps = {
  mode?: "add" | "update";
};

function FormAdmins({ mode = "add" }: FormAdminsProps) {

  const isUpdate = mode === "update";

  const schema = isUpdate ? updateAdmins : addAdmins;

  type FormInput = AddAdminsInput | UpdateAdminsInput;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormInput) => {
    if (isUpdate) {
      console.log("Update Admin:", data);
    } else {
      console.log("Add Admin:", data);
    }
  };

  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-2xl">
      <div className="flex justify-between p-6 bg-blue-50 rounded-t-2xl border-b-2 border-gray-400">
        <div className="flex flex-col">
          <p className="font-bold text-xl">Admin Configuration</p>
          <span>
            Provide the credentials and details for the new system
            administrator.
          </span>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-300">
          <UserPlus className="h-7 w-7 text-white" />
        </div>
      </div>

      <div className="p-6">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="email" className="mb-2">
                Full Name
              </Label>

              <div className="relative bg-gray-100 ">
                <User
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="name"
                  type="text"
                  placeholder="e.g. Sarah Mitchell"
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="text-red-800">{errors.name.message}</p>
              )}
            </div>

            <div className="w-full">
              <Label htmlFor="email" className="mb-2">
                Email Address
              </Label>

              <div className="relative bg-gray-100 ">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="email"
                  type="email"
                  placeholder="dr.smith@3ilajak.com"
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-red-800">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Security Password</Label>
            </div>

            <div className="relative bg-gray-100">
              <Lock
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-11 pl-10 pr-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                {...register("password")}
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
              >
                <Eye size={18} />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-800">{errors.password.message}</p>
            )}
          </div>

          <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6">
            <Button
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
                  ? "Update Administrator"
                  : "Add Administrator"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAdmins;
