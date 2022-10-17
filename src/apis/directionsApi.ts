import axios from "axios";

const directionsApi = axios.create({
	baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
	params: {
		alternatives: true,
		steps: true,
		geometries: "geojson",
		overview: "simplified",
		language: "es",
		access_token:
			"pk.eyJ1IjoiYWxlamFuZHJvYWd1aWxhcmRldiIsImEiOiJjbDlhNmZmcGMxMXV2M3Z0OG9keDN0dTBnIn0.FCeuD54ZSFUYEeIbLTzADg",
	},
});

export default directionsApi;
