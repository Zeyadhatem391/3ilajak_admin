import PersonalAuthentication from "@/features/profile/components/PersonalAuthentication";
import PersonalInfo from "@/features/profile/components/PersonalInfo";
import ProfileCard from "@/features/profile/components/ProfileCard";
import ProfileInfo from "@/features/profile/components/ProfileInfo";
import RecentActivity from "@/features/profile/components/RecentActivity";
import RequestDeactivation from "@/features/profile/components/RequestDeactivation";
import StatisticsProfile from "@/features/profile/components/StatisticsProfile";

export default function Page() {
  return (
    <div className="grid grid-cols-12 items-start gap-6">
      <div className="col-span-4 flex flex-col gap-6">
        <ProfileCard />
        <ProfileInfo />
        <StatisticsProfile />
      </div>

      <div className="col-span-8 flex flex-col gap-6">
        <PersonalInfo />

        <PersonalAuthentication />

        <RecentActivity />
        <RequestDeactivation />
      </div>
    </div>
  );
}
