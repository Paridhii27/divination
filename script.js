function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function burn() {
    //document.getElementById("demo").innerHTML = "Hello World";
    //window.open("https://www.google.com");
    location.href="./Light.html";
  }

function back() {
    location.href="./Light.html";
  }

function one() {
    location.href="./result_one.html";
  }

function two() {
    location.href="./result_two.html";
  }

function three() {
    location.href="./result_three.html";
  }

function giveTime(){
    document.getElementById('demo').innerHTML=Date();
    
}

function giveProb(){
    var randomNumber = Math.random();
    if (randomNumber < 0.5) {
        document.getElementById("demo").innerHTML = "You were on the right path";
    } else {
        document.getElementById("demo").innerHTML = "You're lost.";
    }
}