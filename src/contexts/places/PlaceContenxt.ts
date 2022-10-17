import { createContext } from "react";
import { Feature } from "../../interfaces/places";

export interface PlacesContentxProps {
	isLoading: boolean;
	userLocation?: [number, number];
	searchPlacesByTerm: (query: string) => Promise<Feature[]>;
	isLoadingPlaces: boolean;
	places: Feature[];
}

export const PlaceContext = createContext<PlacesContentxProps>(
	{} as PlacesContentxProps
);
