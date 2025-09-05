var clockItem = document.createElement('li');
var clockLink = document.createElement('a');
clockLink.href = "#";
clockLink.className = 'navbar-clock';

function updateClock() {
    var now = new Date();
    var hours = now.getUTCHours().toString().padStart(2, '0');
    var minutes = now.getUTCMinutes().toString().padStart(2, '0');
    var seconds = now.getUTCSeconds().toString().padStart(2, '0');
    clockLink.textContent = `${hours}:${minutes}:${seconds} UTC`;
}

updateClock();
setInterval(updateClock, 1000);

clockItem.appendChild(clockLink);

var navList = document.querySelector('.nav');
navList.appendChild(clockItem);