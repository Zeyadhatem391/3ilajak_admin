"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteDoctor } from "../api/deleteDoctor";

interface DeleteDoctorButtonProps {
  doctorId: number;
}

export default function DeleteDoctorButton({
  doctorId,
}: DeleteDoctorButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteDoctor(doctorId);

      console.log("Doctor deleted successfully");

      router.refresh();
    } catch (error) {
      console.error("Delete doctor error:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-md cursor-pointer text-red-900"
    >
      <Trash2 className="h-6 w-6" />
    </button>
  );
}
