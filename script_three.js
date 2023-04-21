const api_key="a2143b00baecb27b578557d83fd83e6b";

let btn=document.querySelector("button");
let city;
let emoji;

let choice= document.getElementById("choice")
choice.addEventListener("keypress",function(event){
    if((event.key)==="Enter"){
        event.preventDefault();
        btn.click();
    }
});

btn.addEventListener("click",()=>{
    //take this parameter and then do this function ()=>

    let form = document.getElementById("form")
    console.log(form)
    city=form.elements[0].value;
    getWeather(city);

    async function getWeather(city){
        let api_url="https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+ api_key+ "&units=Metric";

    //console.log(api_url);

        const response = await fetch(api_url);

        const data = await response.json();

        console.log(data);

        let temp=data.main.temp;
        console.log(temp)

        if(temp<=10){
            emoji="❄️"
        }

        else {
            emoji="🌤️"
        }

        document.getElementById("result").
            textContent='The tempterature in '+ city + " right now is " + temp +emoji
    }
})