class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(data) {
        this.location.textContent = `${data.city.name}, ${data.city.country}`;
        this.desc.textContent = data.list[0].weather[0].description;
        this.string.textContent = data.list[0].main.temp;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${data.list[0].main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${data.list[0].weather[0].main}`;
        this.dewpoint.textContent = `Temp kf: ${data.list[0].main.temp_kf}`;
        this.wind.textContent = `Wind: ${data.list[0].wind.speed}`;
    }
}