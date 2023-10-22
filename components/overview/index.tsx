import React from "react";
import card from "./card";
import Card from "./card";

function Overview() {
	const cards = [
		{ value: 30_000, title: "All sales" },
		{ value: 250, title: "New artists" },
		{ value: 400_000, title: "Revenue generated", currency: true },
	];
	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-[#4c4c4c] font-semibold text-lg">
				In the Last 30 days
			</h1>

			<div className="grid gap-8 grid-cols-3">
				{cards.map((card, i) => (
					<Card
						key={i}
						title={card.title}
						value={card.value.toLocaleString()}
                        currency={card.currency}
					/>
				))}
			</div>
		</div>
	);
}

export default Overview;
