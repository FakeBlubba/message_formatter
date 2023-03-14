export class LocationFinder {
    constructor(userInput, latitude, longitude) {
        this.userInput = userInput;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    //  Restituisce il valore di input 
    getUserInput = () => {
        return this.userInput;
    };

    //  Imposta il valore di input
    setUserInput = (userInput) => {
        this.userInput = userInput; 
    };

    //  Restituisce la latitudine
    getLatitude = () => {
        return this.latitude;
    };

    //  Imposta la longitudine
    setLatitude = (latitude) => {
        this.latitude = latitude;
    };

    //  Restituisce la longitudine
    getLongitude = () => {
        return this.longitude;
    };

    //  Imposta la latitudine
    setLongitude = (longitude) => {
        this.longitude = longitude;
    };

    //  Genera e imposta coordinate a partire dalla stringa input
    generateCoordinates = async () => {
        const input = this.getUserInput();
        const locationEncoded = encodedURIComponent(input);
        const data = await (await fetch(`https://nominatim.openstreetmap.org/search?street=${locationEncoded}&format=json`)).json();
        this.setLatitude(data[0].lat);
        this.setLongitude(data[0].lon);
    };

    //  Combina il link di google maps con le coordinate
    generateLink = () => {

        //  Inizializzazione variabili
        const googleLink = `https://www.google.com/maps/place/`;
        const lat = this.getLatitude();
        const lon = this.getLongitude();

        return `${googleLink}${lat},${lon}`;
    };



}