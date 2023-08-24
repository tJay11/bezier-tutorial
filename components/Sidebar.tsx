import { ArtistIcon, DashboardIcon, Logo, LogoutIcon, ProjectIcon, SalesIcon, SettingsIcon } from "./icons"; // prettier-ignore
import SidebarOptions, { SidebarOptionProps } from "./SidebarOptions";
import { classNames } from "../utils";
import { routes } from "@/routes";
import React from "react";

function Sidebar() {
	const managementNav: SidebarOptionProps[] = [
		{
			name: "Dashboard",
			href: routes.management.dashboard,
			icon: <DashboardIcon className="w-6 h-6" />,
		},
		{
			name: "Artist",
			href: routes.management.artists,
			icon: <ArtistIcon className="w-6 h-6" />,
		},
		{
			name: "Projects",
			href: routes.management.projects,
			icon: <ProjectIcon className="w-6 h-6" />,
		},
		{
			name: "Sales",
			href: routes.management.sales,
			icon: <SalesIcon className="w-6 h-6" />,
		},
	];

	const sessionNav: SidebarOptionProps[] = [
		{
			name: "Settings",
			href: routes.management.settings,
			icon: <SettingsIcon className="w-6 h-6" />,
		},
		{
			name: "Logout",
			href: "#",
			icon: <LogoutIcon className="w-6 h-6" />,
			onClick: () => {
				console.log("Logged Out");
			},
		},
	];

	return (
		<div
			className={classNames(
				"flex flex-col gap-32",
				"!w-60 h-full",
				"bg-[#f2f2f2]",
				"px-8 py-14"
			)}
		>
			<div className="flex gap-2 items-center">
				<Logo className="text-primary w-8 h-6" />
				<h1
					className={classNames(
						"text-2xl text-transparent",
						"font-semibold bg-clip-text",
						"bg-gradient-to-r from-primary to-[#427A5B]"
					)}
				>
					Bezier
				</h1>
			</div>

			<div className="flex flex-col gap-6">
				{managementNav.map((nav, i) => (
					<SidebarOptions
						name={nav.name}
						href={nav.href}
						icon={nav.icon}
						key={i}
					/>
				))}
			</div>

			<div className="flex flex-col gap-6">
				{sessionNav.map((nav, i) => (
					<SidebarOptions
						name={nav.name}
						href={nav.href}
						icon={nav.icon}
						onClick={nav.onClick}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
