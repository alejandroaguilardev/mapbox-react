import { useContext } from "react";
import { PlaceContext } from "../contexts/places/PlaceContenxt";
import { MapContext } from "../contexts/map/MapContext";

export const BtnMyLocation = () => {
	const { map, isMapReady } = useContext(MapContext);
	const { userLocation } = useContext(PlaceContext);

	const onClick = () => {
		if (!isMapReady) throw new Error("Mapa no esta listo");
		if (!userLocation) throw new Error("NO hay ubicacion de usuario");

		map?.flyTo({
			zoom: 14,
			center: userLocation,
		});
	};

	return (
		<div
			className="btn btn-primary"
			onClick={onClick}
			style={{
				position: "fixed",
				top: "20px",
				right: "20px",
				zIndex: 999,
			}}
		>
			BtnMyLocation
		</div>
	);
};
