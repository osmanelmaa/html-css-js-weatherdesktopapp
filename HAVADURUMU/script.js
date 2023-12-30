function getWeather() {
            const cityInput = document.getElementById('cityInput');
            const cityName = cityInput.value;
        
            if (cityName === '') {
                alert('Lütfen bir şehir adı girin.');
                return;
            }
        
            const apiKey = '243db700a934a246995afddc6d1184f4';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Hava durumu alınamadı:', error);
                });
        }
        
        function displayWeather(data) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Sıcaklık: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Rüzgar Hızı: ${data.wind.speed} m/s</p>
            `;
        }
        