class UI{
    constructor(){
        this.location = document.querySelector('#w-loc');
        this.describtion = document.querySelector('#w-desc');
        this.country = document.querySelector('#w-country');
        this.humidity = document.querySelector('#w-humidity');
        this.coord = document.querySelector('#w-coord');
        this.feel_like = document.querySelector('#w-feel-like');
        this.pressure = document.querySelector('#w-pressure');
    }
    addingData(weather){
        this.location.textContent = weather.name;
        this.describtion.textContent = weather.weather[0].main;
        this.country.textContent =  weather.sys.country;
        this.humidity.textContent = 'Humidity: '+ weather.main.humidity;
        this.coord.textContent =   `Lat: ${weather.coord.lat}  and  Lon: ${weather.coord.lon}`;
        this.feel_like.textContent ='Feels Like: ' + weather.main.feels_like;
        this.pressure.textContent = 'Weather: ' + weather.main.pressure;
    }
}