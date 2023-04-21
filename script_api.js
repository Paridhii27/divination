const api_key="OPENWEATHER_API_KEY";

let btn=document.querySelector("button");
btn.style.background=""
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
        if(temp<=18){
            document.querySelector("#result").innerHTML="You're on course at " + temp + " degrees right now. If you stay where you are it will be helpful. Sometimes you just need to take a nap and all is well in the world again. Sometimes you need that comfort of knowing what's to come. The comfort and familiarity of the everyday life." 
            document.querySelector("#result").style.fontSize="24px";
        }

        else {
            //document.getElementById("result").
            document.querySelector("#result").innerHTML="You're off course by " + temp + " degrees right now. If you stay where you are you'll keep wondering what if you changed. The choice is yours at the end of the day. Just remember, if you do decide to make a big change, it might be a complete disaster, but at least you'll have a good story to tell at your next awkward family gathering. So, go ahead, make that big change. Who knows, you might just end up regretting it for the rest of your life, but at least you won't be stuck wondering what if? Maybe it might be the best decision you ever made." 
            document.querySelector("#result").style.fontSize="24px";
        }
    }
})
document.querySelector("label").style.fontSize="24px";

function back() {
    location.href="./Light.html";
  }