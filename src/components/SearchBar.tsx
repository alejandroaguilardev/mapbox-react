import { ChangeEvent, useRef, useContext } from "react";
import { PlaceContext } from "../contexts/places/PlaceContenxt";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>();
	const { searchPlacesByTerm } = useContext(PlaceContext);

	const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => {
			searchPlacesByTerm(event.target.value);
		}, 500);
	};

	return (
		<div className="search-container">
			<input
				type="text"
				className="form-control"
				placeholder="algun lugar"
				onChange={onQueryChanged}
			/>
			<SearchResults />
		</div>
	);
};
