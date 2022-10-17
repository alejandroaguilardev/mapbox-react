import { useEffect, useReducer } from "react";
import { getUserLocation } from "../../helpers";
import { PlaceContext } from "./PlaceContenxt";
import { placeReducer } from "./PlaceReducer";
import searchApi from "../../apis/searchApi";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
	isLoading: boolean;
	userLocation?: [number, number];
	isLoadingPlaces: boolean;
	places: Feature[];
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
	isLoadingPlaces: false,
	places: [],
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(placeReducer, INITIAL_STATE);

	const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
		if (query.length === 0) {
			dispatch({ type: "setPlaces", payload: [] });
			return [];
		}
		if (!state.userLocation) throw new Error("No hay ubicacion de usuario");

		dispatch({ type: "setLoadingPlaces" });

		const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
			params: {
				proximity: state.userLocation.join(","),
			},
		});
		dispatch({ type: "setPlaces", payload: resp.data.features });
		return resp.data.features;
	};

	useEffect(() => {
		getUserLocation().then((lngLat) => {
			dispatch({
				type: "setUserLocation",
				payload: lngLat,
			});
		});
	}, []);

	return (
		<PlaceContext.Provider
			value={{
				...state,
				searchPlacesByTerm,
			}}
		>
			{children}
		</PlaceContext.Provider>
	);
};
