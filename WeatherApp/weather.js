class Weather {
    constructor(city) {
        this.appid = '9da150a1c1b14276f85806a08cd3bdd2';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID=${this.appid}`);
        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}