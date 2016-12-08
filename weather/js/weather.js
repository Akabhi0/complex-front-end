if("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(function(position){
     loadWeather(position.croods.latitude + ',' + position.croods.longitude);
   });
}else {
   loadWeather("kolkata, IN ", "");
}

$(document).ready(function(){
   setInterval(getWeather,10000);
});

function loadWeather(location , woeid){
   $.simpleWeather({
       location: location,
       woeid: woeid,
       unit: 'c',
       success: function(weather){
       city = weather.city;
       temp = weather.temp+'&deg;';
       wcode = '<img class="weathericon" src="images/weathericon/' + weather.code + '.svg">';
       wind = '<p>' + weather.wind.speed + '</p> <p>' + weather.units.speed + '</p>';
    
       humidity = weather.humidity + '%';
          
       $(".location").text(city);
       $(".temperature").html(temp);
       $(".climate_bg").html(wcode);
       $(".windspeed").html(wind);
       $(".humidity").html(humidity);      
        
     },
     
     error: function(error){
       $(".error").html("<p>" + error + "</p>");
     }
   });
}

