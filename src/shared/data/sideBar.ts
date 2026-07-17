import {
    BellDot, ChartNoAxesColumn, CircleUserRound, Clipboard,
    ClipboardClock, LayoutDashboard, Settings, Sheet, ShieldCogCorner,
    SquarePlus, User, UserStar
} from "@/assets/icon/icons";


export const menus = [
    {
        icon: LayoutDashboard,
        name: "Dashboard Home",
        link: "/",
    },
    {
        icon: ShieldCogCorner,
        name: "Admins",
        link: "/dashboard/admins",
    },
    {
        icon: UserStar,
        name: "Clinic Admins",
        link: "/dashboard/clinic-admins",
    },
    {
        icon: SquarePlus,
        name: "Clinics",
        link: "/dashboard/clinics",
    },
    {
        icon: Sheet,
        name: "Doctors",
        link: "/dashboard/doctors",
    },
    {
        icon: User,
        name: "Patients",
        link: "/dashboard/patients",
    },
];

export const info = [
    {
        icon: Clipboard,
        name: "Medical Content",
        link: "/dashboard/medical-content",
    },
    {
        icon: ClipboardClock,
        name: "Appointments",
        link: "/dashboard/appointments",
    },
    {
        icon: BellDot,
        name: "Notifications",
        link: "/dashboard/notifications",
    },
    {
        icon: ChartNoAxesColumn,
        name: "Reports",
        link: "/dashboard/reports",
    },
];


export const settings = [
    {
        icon: CircleUserRound,
        name: "Profile",
        link: "/dashboard/profile",
    },
    {
        icon: Settings,
        name: "Settings",
        link: "/dashboard/settings",
    },
];