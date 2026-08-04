"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deletePatient } from "../api/deletePatient";

interface DeletePatientButtonProps {
  patientId: number;
}

export default function DeletePatientButton({
  patientId,
}: DeletePatientButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deletePatient(patientId);

      console.log("Patient deleted successfully");

      router.refresh();
    } catch (error) {
      console.error("Delete patient error:", error);
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
