const searchButton=document.querySelector(".image-button");function search(){const e=document.querySelector(".search-input").value;fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=c8fb17bee74c48f0a0a8d6d542831ded`).then((e=>e.json())).then((e=>{console.log(e)}))}searchButton.addEventListener("click",search);