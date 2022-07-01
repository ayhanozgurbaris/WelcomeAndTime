let currentTime = new Date();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + " " + weekday[currentTime.getDay()]);







var isim = prompt("lütfen isim giriniz: ");

if (isim != null) {
    document.getElementById("myName").innerText = `Merhaba ${isim} Hoşgeldin;`;    
}

