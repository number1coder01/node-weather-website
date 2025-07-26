const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault(); // form ka natural behaviour to reload the page upon submission  and reset all the value and we dont want that so we remove that
  //prevent form from reloading the page

  const location = searchElement.value;
  messageOne.textContent = "⏳ Loading result...";
  messageTwo.textContent = "";
  fetch("/weather?address=" + encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = "⚠️ ERROR...";
        messageTwo.textContent = data.error;
      } else {
        messageOne.textContent =
          "Fetched results for the location : " + data.location; //manipulate the value of the para from js file
        const emoji = getWeatherEmoji(data.forecast.type);
        messageTwo.innerHTML = `
                <div class="weather-details">
                    <div class="weather-header">
                        <span class="emoji">${emoji}</span>
                        <span class="type"><strong>${data.forecast.type}</strong></span>
                    </div>
                    <div class="weather-info">
                        <p><strong>🌡️ Temperature:</strong> ${data.forecast.temperature}</p>
                        <p><strong>🤒 Feels Like:</strong> ${data.forecast.feelslike}</p>
                        <p><strong>💧 Humidity:</strong> ${data.forecast.humidity}</p>
                        <p><strong>🌧️ Chance of Rain:</strong> ${data.forecast.rain}</p>
                    </div>
                </div>
            `;
      }
    });
  });
});

function getWeatherEmoji(desc) {
  desc = desc.toLowerCase();
  if (desc.includes("cloud")) return "☁️";
  if (desc.includes("sun") || desc.includes("clear")) return "☀️";
  if (desc.includes("rain")) return "🌧️";
  if (desc.includes("snow")) return "❄️";
  return "🌈";
}

//error to be fixed : invalid values
