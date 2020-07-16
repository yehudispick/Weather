/* global $ */
(function (){
    'use strict';

    const zipInput = $('#zip');
    const unitsSelect =$('#units');
    const location =$('#location');
    const weatherIcon =$('#weatherIcon');
    const description = $('#description');
    const msg = $('#msg');
   
    zipInput.change(getWeather);
    unitsSelect.change(getWeather);

    function getWeather(){
            $.getJSON(`http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${zipInput.val()}&units=${unitsSelect.val()}&callback=?`)
            .done(proccessWeatherData)
            .fail(function(  textStatus, error ) {
                var err = textStatus + ", " + error;
                msg.innerHTML=(err);
            });
    }
           
        function proccessWeatherData(weatherData){
                location.text(weatherData.name);
                const icon = weatherData.weather[0].icon;
                weatherIcon.attr('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
                const descriptionText = `${weatherData.main.temp} and ${weatherData.weather[0].description}`;
                description.text(descriptionText);
            }

      $('form') .submit((e)=>e.preventDefault());
    
   
}());