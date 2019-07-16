
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree =  document.querySelector(".temperature-degree");
    let temperatureDescription =  document.querySelector(".temperature-description");
    let locationTimezone =  document.querySelector(".location-timezone");

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position=> {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/ad81e446f019528283ba3e59011dbea6/${lat},${long}`;

            fetch(api).then( response => {
                return response.json();
            })
            .then(data => {
                /*console.log("and the data is");
                console.log(data);*/

                const temperature = data.currently.temperature;
                const summary = data.currently.summary;
                const timezone = data.timezone;
                const icon = data.currently.icon;

                //set html dom elements from da API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = timezone;

                setIcons(icon, document.querySelector(".icon"));
            });

        });


    }

    setIcons = (icon, iconID) => {
        const skycon = new Skycons({color:"#fff"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycon.play();
        return skycon.set(iconID, Skycons[currentIcon] );

    }



})