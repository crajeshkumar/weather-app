const storage = new Storage();
const ui = new UI();
const weatherLocation = storage.getLocation();
const weather = new Weather(weatherLocation.city);

//Display while DOM loaded
document.addEventListener('DOMContentLoaded',displayWeather);

function displayWeather(){
    weather.getWeather()
        .then(res => {
            if(res.cod === 404){
                throw `$City can't able to find`;
            }else{
                ui.addingData(res);
            }
            
        })
        .catch(err => {
            storage.setLocation('Chennai');
        });
}

//while changing location
const change_btn = document.querySelector('#w-change-btn');
change_btn.addEventListener('click',()=>{
    const newLocation = document.querySelector('#new-city').value;
    weather.changeWeather(newLocation);
    storage.setLocation(newLocation);
    displayWeather();
    //To close the model(pop-up)
    $('#locModal').modal('hide');
});