import axios from "axios";

const searchApi = axios.create({
	baseURL: "https:/api.mapbox.com/geocoding/v5/mapbox.places",
	params: {
		limit: 5,
		languaje: "es",
		access_token:
			"pk.eyJ1IjoiYWxlamFuZHJvYWd1aWxhcmRldiIsImEiOiJjbDlhNmZmcGMxMXV2M3Z0OG9keDN0dTBnIn0.FCeuD54ZSFUYEeIbLTzADg",
	},
});

export default searchApi;