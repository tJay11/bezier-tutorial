import React from "react";

export function SearchIcon({ className }: { className: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.5859 21C16.849 21 21.1156 16.7467 21.1156 11.5C21.1156 6.25329 16.849 2 11.5859 2C6.32283 2 2.05624 6.25329 2.05624 11.5C2.05624 16.7467 6.32283 21 11.5859 21Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22.1187 22L20.1125 20"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}


