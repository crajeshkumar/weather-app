class Weather {
    constructor(city){
        this.apiKey = '639c98d0d759ccfd73921898ea2c629c';
        this.city = city;
    }
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }
    changeWeather(newCity){
        this.city = newCity;
    }
}