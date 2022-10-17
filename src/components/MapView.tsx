/* eslint import/no-webpack-loader-syntax: off */

//@ts-ignore
import mapboxgl from "!mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react";
import { MapContext } from "../contexts";
import { PlaceContext } from "../contexts/places/PlaceContenxt";
import { Loading } from "./";

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlaceContext);
	const { setMap } = useContext(MapContext);
	const mapDiv = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new mapboxgl.Map({
				container: mapDiv.current!, // container ID
				style: "mapbox://styles/mapbox/light-v10", // style URL
				center: userLocation, // starting position [lng, lat]
				zoom: 14, // starting zoom
			});
			setMap(map);
		}
	}, [isLoading]);

	if (isLoading) return <Loading />;

	return (
		<div
			ref={mapDiv}
			style={{
				backgroundColor: "red",
				height: "100vh",
				width: "100vw",
				position: "fixed",
				top: 0,
				left: 0,
			}}
		></div>
	);
};
