
const btn = document.getElementById('submit-Btn');

const inputTxt = document.getElementById('inputCity');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let inputCity = inputTxt.value;

    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=e065e5c3f4abf96bb2f47f3ec75cb4df`;
    let bufferData = JSON.parse(ApiUrl);
    console.log(bufferData);
});

console.log("hello");

const date = "{{date}}";
const time = "{{time}}";

const day = "{{day}}";

