let currentTime = new Date();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var zaman = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + " " + weekday[currentTime.getDay()];

document.getElementById("time").innerText = zaman;



var isim = prompt("lütfen isim giriniz: ");

if (isim != null) {
    document.getElementById("myName").innerText = `Merhaba ${isim} Hoşgeldin;`;    
}

