import { useContext, useState } from "react";
import { PlaceContext } from "../contexts/places/PlaceContenxt";
import { LoadingPace } from "./";
import { Feature } from "../interfaces/places";
import { MapContext } from "../contexts/map/MapContext";

export const SearchResults = () => {
	const { isLoadingPlaces, places, userLocation } = useContext(PlaceContext);
	const { map, getRouteBetweenPoints } = useContext(MapContext);

	const [activeId, setActiveId] = useState("");

	const onPlaceClicked = (place: Feature) => {
		setActiveId(place.id);
		const [lng, lat] = place.center;
		map?.flyTo({
			zoom: 14,
			center: [lng, lat],
		});
	};

	const getRoute = (place: Feature) => {
		if (!userLocation) return;

		const [lng, lat] = place.center;
		getRouteBetweenPoints(userLocation, [lng, lat]);
	};

	if (isLoadingPlaces) return <LoadingPace />;

	if (places.length === 0) return <></>;

	return (
		<ul className="list-group mt-3">
			{places.map((place) => (
				<li
					key={place.id}
					className={`${
						activeId === place.id && "active"
					} pointer list-group-item list-group-item-action`}
					onClick={() => onPlaceClicked(place)}
				>
					<h6>{place.text}</h6>
					<p style={{ fontSize: "12px" }}>{place.place_name}</p>
					<button
						onClick={() => getRoute(place)}
						className={`${
							activeId === place.id
								? "btn btn-outline-light"
								: "btn btn-outline-primary"
						}  btn-sm`}
					>
						Direcciones
					</button>
				</li>
			))}
		</ul>
	);
};
