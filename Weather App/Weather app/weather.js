// VANCOUVER VS OTTAWA WEATHER COMPARISON APP
const APIkey = '1fe4bacb05c5a1c7a957c84d2f733f77'
const OttawaAPI = `http://api.openweathermap.org/data/2.5/forecast?id=6094817&appid=${APIkey}&units=metric`
const VancouverAPI = `http://api.openweathermap.org/data/2.5/forecast?id=6173331&appid=${APIkey}&units=metric`
// API Call for Ottawa
const getOWeather = async () => {
    try {
        const res = await axios.get(OttawaAPI)
        return res.data
    } catch (e) {
        return "NO WEATHER AVAILABLE! SORRY :("
    }
}
// API Call for Vancouver
const getVWeather = async () => {
    try {
        const res = await axios.get(VancouverAPI)
        return res.data
    } catch (e) {
        return "NO WEATHER AVAILABLE! SORRY :("
    }
}
// Add the different times to the dropdown 
const populateTimeOptions = async () => {
    const OttawaWeather = await getOWeather();
    console.log(OttawaWeather)
    // setting the drowpdown to read the different time options
    for (let i = 0; i < 40; i++) {
        document.querySelector(`#time${i}`).innerHTML = OttawaWeather.list[i].dt_txt
    }

}

let time = document.querySelector('#time-select').value
dropDown = document.querySelector('#time-select')
dropDown.onchange = async function () {
    // This function changes the contents of the screen to reflect the time selected on the dropdown
    time = document.querySelector('#time-select').value
    // Get API info
    const OttawaWeather = await getOWeather();
    // Update Ottawa info on page
    const OttawaDate = OttawaWeather.list[time].dt_txt
    document.querySelector('#oDate').innerHTML = OttawaDate
    const OttawaTemp = OttawaWeather.list[time].main.temp

    document.querySelector('#oTemp').innerHTML = OttawaTemp
    const OttawaWeatherConditions = OttawaWeather.list[time].weather[0].description

    document.querySelector('#oWeather').innerHTML = OttawaWeatherConditions
    // Get Vancouver API info
    const VancouverWeather = await getVWeather();
    // populate Vancouver info on page
    const firstDate = VancouverWeather.list[time].dt_txt
    document.querySelector('#vDate').innerHTML = firstDate
    const firstTemp = VancouverWeather.list[time].main.temp

    document.querySelector('#vTemp').innerHTML = firstTemp
    const firstWeather = VancouverWeather.list[time].weather[0].description

    document.querySelector('#vWeather').innerHTML = firstWeather
};

populateTimeOptions()

