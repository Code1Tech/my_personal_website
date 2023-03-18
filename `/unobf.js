getIPs().then(res => {
    document.querySelector('#ip').innerHTML = "ipv4: " + res[0];
    document.querySelector('#ipv6').innerHTML = "ipv6: " + res[1];
});
var ua = navigator.userAgent;
document.querySelector('#user-agent').innerHTML = "user-agent: " + ua;
var os = navigator.platform;
document.querySelector('#os').innerHTML = "os: " + os;
var browser = navigator.appName;
document.querySelector('#browser').innerHTML = "browser: " + browser;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ipapi.co/json/', true);
xhr.onload = function() {
    var data = JSON.parse(this.responseText);
    document.querySelector('#location').innerHTML = "location: " + data.city + ", " + data.region + ", " + data.country_name;
    document.querySelector('#timezone').innerHTML = "timezone: " + data.timezone;
};
xhr.send();

function geg() {
    // funny easter geg
    setInterval(geg, 10000);
    setTimeout(function() {
        document.querySelector('.center-over-img').innerHTML = "LOL!!!";
    }, 2500);
    setTimeout(function() {
        document.querySelector('.center-over-img').innerHTML = "deez";
    }, 5000);
    setTimeout(function() {
        document.querySelector('.center-over-img').innerHTML = "chk chk chk";
    }, 7500);
    setTimeout(function() {
        document.querySelector('.center-over-img').innerHTML = "hacked!!1";
    }, 10000);
}

// anti select
document.onselectstart = function() { return false; };
// anti right click
document.oncontextmenu = function() { return false; };
// anti drag
document.ondragstart = function() { return false; };
// main script
document.querySelector('.hero').addEventListener('click', function() {
    this.removeEventListener('click', arguments.callee);
    // loop play lol.mp3
    var audio = new Audio('lol.mp3');
    audio.loop = true;
    audio.play();

    document.querySelector("#wat").innerHTML = "...";

    // wait for 10 seconds then show this
    setTimeout(function() {
        document.querySelector('.hero').className = 'hidden';
        document.querySelector('.hidden').className = 'hero';

        document.title = "hacked!!1";

        // geg geg geg
        geg();
    }, 9521);
});