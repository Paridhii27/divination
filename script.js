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