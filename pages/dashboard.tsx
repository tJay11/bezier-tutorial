import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Overview from "@/components/overview";
import React from "react";

function dashboard() {
	return (
		<div className="flex h-screen w-screen">
			<Sidebar />

			<div className="w-full">
				<TopNav />

				<div className="flex gap-16 p-8">
					<div className="flex flex-col gap-20 w-[70%]">
						<Overview/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default dashboard;
