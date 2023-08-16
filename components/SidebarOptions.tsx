import { classNames } from "@/utils";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface SidebarOptionProps {
	name: string;
	href: string;
	icon: ReactNode;
	onClick?: () => void;
}

function SidebarOptions({ name, href, icon, onClick }: SidebarOptionProps) {
	const router = useRouter();

	const handleActive = (link: string) => {
		return router.pathname.startsWith(link);
	};
	return (
		<Link
			// href={href}
			{...{ href }}
			className={classNames(
				handleActive(href)
					? "bg-primary text-white"
					: "bg-transparent text-secondary",
				"rounded cursor-pointer",
				"hover:bg-secondary hover:text-white",
				"flex gap-3",
				"px-4 py-2",
				name.toLowerCase() === "logout" && "!text-danger"
			)}
			onClick={(ev) => {
				if (onClick) {
					ev.preventDefault();
					onClick();
				}
			}}
		>
			{icon}
			<p className="font-medium">{name}</p>
		</Link>
	);
}

export default SidebarOptions;
