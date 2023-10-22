import { classNames } from "@/utils";
import React, { ChangeEvent, useCallback, useState } from "react";
import { SearchIcon } from "./icons";
import { debounce } from "lodash";

interface SearchProps {
	value: string;
	placeholder?: string;
	delay?: number;
	onSearch: (query: string) => void;
}
function Search({ value, delay = 1000, placeholder, onSearch }: SearchProps) {
	const [search, setSearch] = useState<string>(() => value ?? ""); /* if there is no value use empty string */
	const handleSearch = useCallback(
		debounce((search) => {
			onSearch(search);
		}, delay),
		[]
	);

	return (
		<div
			className={classNames(
				"border border-neutral-200 bg-[#FAFAFA]",
				"flex gap-2 items-center",
				"w-full",
				"rounded-lg"
			)}
		>
			<span className="block pl-3">
				<SearchIcon className="h-5 w-5 text-neutral-600" />
			</span>

			<input
				type="search"
				name="search"
                placeholder={placeholder}
				value={search}
				className={classNames(
					"text-sm pl-1 pr-4 py-3 bg-transparent placeholder:text-neutral-600",
					"w-full h-full",
					"outline-none"
				)}
				onChange={({
					currentTarget: { value }, /* destructuring the event to get the current event & destructuring the current event to get the value */
				}: ChangeEvent<HTMLInputElement>) => {
					setSearch(value);
					handleSearch(value);
				}}
			/>
		</div>
	);
}

export default Search;
