let weather = {
    "apiKey": "",
    featchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        if (data.cod !== "404") {
            document.querySelector(".weather").classList.remove('hide');
            document.querySelector(".errordiv").classList.add('hide');

            const { name } = data;
            const { country } = data.sys;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            const today = new Date();
            const date = document.querySelector(".currentdate");
            date.innerText = this.datefunction(today);

            document.querySelector(".city").innerText = `Weather in ${name}, ${country}`;
            document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
            document.querySelector(".temp").innerText = `${temp} °C`;
            document.querySelector(".description").innerText = description;
            document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
            document.querySelector(".wind").innerText = `Wind Speed: ${speed}km/h`;
            document.querySelector(".weather").classList.remove('loading');
            document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?" ${name}")`
        } else {
            document.querySelector(".errordiv").classList.remove('hide');
            const errorMsg = document.querySelector('.error');
            errorMsg.textContent = "Please enter a valid city";
            document.querySelector(".search-bar").value = " ";
            document.querySelector(".weather").classList.add('hide');

        }
    },

    search: function () {
        this.featchWeather(document.querySelector(".search-bar").value);
    },
    datefunction: function (d) {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDate()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day}, ${date} ${month} ${year}`;
    }
};
document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})
weather.featchWeather('Pune');