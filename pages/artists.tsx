import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import React from "react";

function artists() {
	return (
		<div className="flex h-screen w-screen">
			<Sidebar />

			<div className="w-full">
				<TopNav />
			</div>
		</div>
	);
}

export default artists;
