export interface Localizacion {
    formatted_address: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        }
    }
}
