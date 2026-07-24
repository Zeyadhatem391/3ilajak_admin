import CardClinic from "@/features/clinics/components/details/CardClinic"
import StatisticsDetailsClinic from "@/features/clinics/components/details/StatisticsDetailsClinic"

function page() {
  return (
    <div className="flex flex-col gap-8">
        <CardClinic />
        
        <StatisticsDetailsClinic />

    </div>
  )
}

export default page