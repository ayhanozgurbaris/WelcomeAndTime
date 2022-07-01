var isim = prompt("lütfen isim giriniz: ");

if (isim != null) {
    document.getElementById("myName").innerText = `Merhaba ${isim} Hoşgeldin;`;    
}


function timeUpdate() {

    let currentTime = new Date();

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var gun = currentTime.getDay();

    document.getElementById("time").innerText = hours + ":" + minutes + ":" + seconds + " " + weekday[gun];
}

setInterval(timeUpdate,1000);

