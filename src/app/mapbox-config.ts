export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoieWVlenp5eTI3IiwiYSI6ImNseW1mdWM0czBiODYya3B0cjlsY3J1eGYifQ.X-NbcgGcphQd9V_2N8n_JA';

// let accessToken: string = 'pk.eyJ1IjoieWVlenp5eTI3IiwiYSI6ImNseW1mdWM0czBiODYya3B0cjlsY3J1eGYifQ.X-NbcgGcphQd9V_2N8n_JA';

// export const MAPBOX_ACCESS_TOKEN = accessToken;

// export function setAccessToken(token: string) {
//     accessToken = token;
// }
import mapboxgl from 'mapbox-gl'; // Add this import statement

export const setAccessToken = (token: string) => {
    (mapboxgl as any).accessToken = token;
};