// api --> application programming interface (hadgalsan data)
// fetch () --> ape request yvuulah /http:/
//promise --> then() requestees hariu avah amlalt
// status : 200 / approved/
//status : 300 404 500 error
//json() file -->hun harhad hylbar bolson data file



/*fetch('https://fakestoreapi.com/users').then(
	response=> response.json()
	
).then(
	data=>{
		console.log(data);
		console.log(data[1].address.city);
		console.log(data[9].name.lastname);
		console.log(data[data.length-1].name.lastname);
	}
)*/


const input= document.getElementsByTagName('input')[0];
const btn= document.getElementsByTagName('button')[0];
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const desc = document.querySelector('.desc');
const humidity = document.querySelector('.humidity');
const clouds = document.querySelector('.clouds');

btn.addEventListener('click',()=>{
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
		response=> response.json()
	).then(
		data=> {
			console.log(data);
			temp.innerText="temp: "+Math.floor(data.main.temp) + "C";
			wind.innerText="wind: "+data.wind.speed ;
			desc.innerText="desc: "+data.weather[0].description;
			humidity.innerText="humidity: "+data.main.humidity; 
			console.log(data.weather[0].main);
			if(data.weather[0].main=="Clear"){
				document.getElementsByName('img')[0].src="https://c1.wallpaperflare.com/preview/38/264/1003/afternoon-sunny-clouds.jpg";
				
				}
			if(data.weather[0].main=="rainy"){
				document.getElementsByName('img')[0].src="https://www.shutterstock.com/image-photo/rain-clouds-black-sky-textured-260nw-2154906427.jpg";
				
				}
			
		}
	)
});