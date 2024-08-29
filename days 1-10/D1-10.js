'use strict';
let  menu  = document.querySelectorAll('.icon-menu');
let  bar1  = document.querySelectorAll('.bar-1');
let  bar2  = document.querySelectorAll('.bar-2');
let  bar3  = document.querySelectorAll('.bar-3');
let cont = 0 ;
let cont1 = 0 ;
menu[0].addEventListener('click',()=>{
    if (cont ==0){
        bar1[0].classList.toggle('open1');
        bar2[0].classList.toggle('open2');
        bar3[0].classList.toggle('open3');
        cont +=1; 
    }else if (cont == 1){
        bar1[0].classList.toggle('open1');
        bar2[0].classList.toggle('open2');
        bar3[0].classList.toggle('open3');
        void bar1[0].offsetWidth;
        void bar2[0].offsetWidth;
        void bar3[0].offsetWidth;
        bar1[0].classList.toggle('close1');
        bar2[0].classList.toggle('close2');
        bar3[0].classList.toggle('close3');
        cont += 1;
    }else {
        bar1[0].classList.toggle('close1');
        bar2[0].classList.toggle('close2');
        bar3[0].classList.toggle('close3');
        void bar1[0].offsetWidth;
        void bar2[0].offsetWidth;
        void bar3[0].offsetWidth;
        bar1[0].classList.toggle('open1');
        bar2[0].classList.toggle('open2');
        bar3[0].classList.toggle('open3');
        cont -=1;
    }
})
/* -- day 6 -- */
let followers = document.querySelector('#followers')
let fw= 144
followers.textContent=fw;
let follow = document.querySelector('#follow');
follow.addEventListener('click',()=>{
    follow.classList.toggle('follow')
    follow.classList.toggle('unfollow')
    if  (follow.classList.contains('unfollow')){
        followers.textContent=fw+1
    }else{followers.textContent=fw}
})
/* -- day 7 -- */
const $ = ((class1) => {
    let element = class1
    element = document.querySelector(class1)
    return element 
})
let panelnots = $('.panel')
let menu_icon = $('.square')
menu_icon.addEventListener('click',()=>{
    panelnots.classList.toggle('panel-open')
    panelnots.classList.toggle('panel-close')
    menu_icon.classList.toggle('open-side-menu')
    menu_icon.classList.toggle('close-side-menu')
})
let search_icon = $('.search-icon')
let search_bar =$('.search-input')
search_icon.addEventListener('click',()=>{
    search_bar.classList.toggle('search-visible')
})
//let a=$('.panel')
//a.style.backgroundColor="red";
/*-- day 8 --*/
let max = 300;
let randomNum = 0;
let randomlist = []
for (let i = 0 ; i < 18 ; i++){
    randomNum = Math.floor(Math.random() * max);
    randomlist.push(randomNum);
}
console.log(randomlist)
console.log(`${randomlist[0]}f`)
for (let i = 0 ; i < 18 ; i++){
    document.documentElement.style.setProperty(`--random${i+1}`, `${randomlist[i]}deg`);
}

/* -- day 9 -- */
 // Latitude and Longitude for Mendoza, Argentina
const latitude = -32.889458;
const longitude = -68.845839;


 // Fetch current weather data using Open-Meteo API
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(response => response.json())
    .then(data => {
        // Extract the needed information from the API response
        const temperature = data.current_weather.temperature;
        const windSpeed = data.current_weather.windspeed;
        const windDirection = data.current_weather.winddirection;
    
        // Display the weather information
        let wind_d = 0
        if (windDirection>= 330 || windDirection<=30){
            wind_d= 'N'
        }else if (windDirection < 330 && windDirection> 300){
            wind_d = 'NW'
        }else if (windDirection <= 300 && windDirection >= 240){
            wind_d = 'W'
        }else if (windDirection < 240 && windDirection > 210){
            wind_d = 'SW'
        }else if (windDirection <= 210 && windDirection >= 150){
            wind_d = 'S'
        }else if (windDirection < 150 && windDirection > 120){
            wind_d = 'SE'
        }else if (windDirection <= 120 && windDirection >= 60){
            wind_d = 'E'
        }else if (windDirection < 60 && windDirection >= 30){
            wind_d = 'NE'
        }

        document.getElementById('temperature').textContent = ` ${Math.floor(temperature)}°`;
        document.getElementById('wind').textContent = ` Wind: ${wind_d} ${windSpeed} km/h `;
    })
.catch(error => console.error('Error fetching weather data:', error));
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
.then(response => response.json())
.then(data => {
    // Extract the needed information from the API response
    const maxToday = Math.floor(data.daily.temperature_2m_max[0]);
    const minToday = Math.floor(data.daily.temperature_2m_min[0]);
    const maxTomorrow = Math.floor(data.daily.temperature_2m_max[1]);
    const minTomorrow = Math.floor(data.daily.temperature_2m_min[1]);

    document.getElementById('today-min/max').textContent = ` ${maxToday}°/${minToday}° ` ;
    document.getElementById('tomorrow-min/max').textContent = ` ${maxTomorrow}°/${minTomorrow}° `;
})
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&minutely_15=relative_humidity_2m`)
.then(response => response.json())
.then(data => {
    
    const humidity= data.minutely_15.relative_humidity_2m[0];

    document.getElementById('humidity').textContent = ` Humidity: ${humidity} %`
})
.catch(error => console.error('Error fetching weather data:', error));

let now = new Date();
let listdays= ['Sun', 'Mon' , 'Tue', 'Wed', 'Thur','Fri','Sat'];
let day = now.getDay();// Get current day
document.getElementById('today').textContent = ` ${listdays[day]} ` ;
document.getElementById('tomorrow').textContent = ` ${listdays[day+1]} ` ;

/*  -- day 10 --  */

let mounth = now.getMonth();
let listmounth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','SepOct','Nov','Dec']
console.log(listmounth[mounth])
let hours = now.getHours(); // Get current hours (0-23)
let minutes = now.getMinutes(); // Get current minutes (0-59)
let seconds = now.getSeconds(); // Get current seconds (0-59)
let todaydate = now.getDate() ;
let y1 = now.getFullYear();

//Mon 15 Jan 2015
let date = `${listdays[day]} ${todaydate} ${listmounth[mounth]} ${y1} `
document.querySelector('.date-watch').textContent = date
document.documentElement.style.setProperty(`--today$`, `${listdays[day]}`);
document.documentElement.style.setProperty(`--today$`, `${listdays[day]}`);

let hour=''
if (now.getHours()<10)hour=hour+`0${now.getHours()}`
else hour=hour+now.getHours()
if  (now.getMinutes()< 10)hour = hour +`:0${now.getMinutes()}`
else hour = hour +`:${now.getMinutes()}`
document.querySelector('.time-watch').textContent = ` ${hour}`
function showTime() {
    now = new Date();
    hour = ''
    if (now.getHours()>10)hour=hour+`0${now.getHours()}`
    else hour=hour+now.getHours()
    if  (now.getMinutes()< 10)hour = hour +`:0${now.getMinutes()}`
    else hour = hour +`:${now.getMinutes()}`
    document.querySelector('.time-watch').textContent = ` ${hour}`
}

// Schedule the function to run every 1 second (1000 milliseconds)
setInterval(showTime, 60000);