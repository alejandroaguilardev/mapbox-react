/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

//@ts-ignore
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require(' ');"

mapboxgl.accessToken =
	"pk.eyJ1IjoiYWxlamFuZHJvYWd1aWxhcmRldiIsImEiOiJjbDlhNmZmcGMxMXV2M3Z0OG9keDN0dTBnIn0.FCeuD54ZSFUYEeIbLTzADg";

if (!navigator.geolocation) {
	alert("TU navegador no tiene geolocalizacion");
	throw new Error("No tienes geolocalizacion");
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<MapsApp />
	</React.StrictMode>
);
