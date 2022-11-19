// FUCKED HELLSCAPE WHERE NOTHING WORKS

// API Call for the first Selected City taking city from selector
const getOWeather = async () => {
    let city = document.querySelector('#cityselect').value
    const APIkey = '1fe4bacb05c5a1c7a957c84d2f733f77'
    const API = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${APIkey}&units=metric`
    try {
        const res = await axios.get(API)
        console.log(res.data)
        console.log(res.data.weather[0].description)
        document.querySelector('#cityName').innerHTML = `${res.data.name} Weather:`
        document.querySelector('#temperature').innerHTML = `It's ${res.data.main.temp} outside (feels like ${res.data.main.feels_like})`
        document.querySelector('#weather').innerHTML = `The weather is: ${res.data.weather[0].description}`
       // Assigning pictures to different drop down menu options
        if (document.querySelector('#cityselect').value === '6173331'){
            document.querySelector('#ottapic').src = 'Images/vancouver.jpg'
        }else if(document.querySelector('#cityselect').value === '5909294'){
            document.querySelector('#ottapic').src = 'Images/brockville.jpeg'
        }else if(document.querySelector('#cityselect').value === '6094817'){
            document.querySelector('#ottapic').src = 'Images/ottawa.jpg'
        }else if(document.querySelector('#cityselect').value === '6077243'){
            document.querySelector('#ottapic').src = 'Images/montreal.jpeg'
        }else if(document.querySelector('#cityselect').value === '6167865'){
            document.querySelector('#ottapic').src = 'Images/toronto.jpeg'
        }else if(document.querySelector('#cityselect').value === '2988507'){
            document.querySelector('#ottapic').src = 'Images/paris.jpeg'
        }else if(document.querySelector('#cityselect').value === '2996944'){
            document.querySelector('#ottapic').src = 'Images/lyon.jpeg'
        }else if(document.querySelector('#cityselect').value === '5983720'){
            document.querySelector('#ottapic').src = 'Images/iqaluit.jpeg'
        }else if(document.querySelector('#cityselect').value === '6183235'){
            document.querySelector('#ottapic').src = 'Images/winnipeg.jpeg'
        }
        
    } catch (e) {
        return "NO WEATHER AVAILABLE! SORRY :("
    }
}
// Click button to call API
document.getElementById("compareButton").addEventListener("click", getOWeather)

// API Call for the first Selected City taking city from selector
const getnewWeather = async () => {
    let city = document.querySelector('#cityselect2').value
    const APIkey = '1fe4bacb05c5a1c7a957c84d2f733f77'
    const API = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${APIkey}&units=metric`
    try {
        const res = await axios.get(API)
        console.log(res.data)
        console.log(res.data.weather[0].description)
        document.querySelector('#cityName2').innerHTML = `${res.data.name} Weather:`
        document.querySelector('#temperature2').innerHTML = `It's ${res.data.main.temp} outside (feels like ${res.data.main.feels_like})`
        document.querySelector('#weather2').innerHTML = `The weather is: ${res.data.weather[0].description}`
// Assigning pictures to different drop down menu options
        if (document.querySelector('#cityselect2').value === '6173331'){
            document.querySelector('#ottapic2').src = 'Images/vancouver.jpg'
        }else if(document.querySelector('#cityselect2').value === '5909294'){
            document.querySelector('#ottapic2').src = 'Images/brockville.jpeg'
        }else if(document.querySelector('#cityselect2').value === '6094817'){
            document.querySelector('#ottapic2').src = 'Images/ottawa.jpg'
        }else if(document.querySelector('#cityselect2').value === '6077243'){
            document.querySelector('#ottapic2').src = 'Images/montreal.jpeg'
        }else if(document.querySelector('#cityselect2').value === '6167865'){
            document.querySelector('#ottapic2').src = 'Images/toronto.jpeg'
        }else if(document.querySelector('#cityselect2').value === '2988507'){
            document.querySelector('#ottapic2').src = 'Images/paris.jpeg'
        }else if(document.querySelector('#cityselect2').value === '2996944'){
            document.querySelector('#ottapic2').src = 'Images/lyon.jpeg'
        }else if(document.querySelector('#cityselect2').value === '5983720'){
            document.querySelector('#ottapic2').src = 'Images/iqaluit.jpeg'
        }else if(document.querySelector('#cityselect2').value === '6183235'){
            document.querySelector('#ottapic2').src = 'Images/winnipeg.jpeg'
        }

        
    } catch (e) {
        return "NO WEATHER AVAILABLE! SORRY :("
    }
}
// Click button to call API
document.getElementById("compareButton2").addEventListener("click", getnewWeather)